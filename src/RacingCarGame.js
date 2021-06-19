// eslint-disable-next-line import/extensions
import Car from './Car.js';

function isValidCarNames(carNames) {
  if (carNames === '') {
    return false;
  }
  const arr = carNames.split(',');
  if (!arr.every((element) => element.length <= 5)) {
    return false;
  }
  const set = new Set(arr);
  return arr.length === set.size;
}

export default class RacingCarGame {
  constructor() {
    this.$carGameContainer = document.querySelector('.car-game-container');
    this.$carNamesInput = document.querySelector('#car-names-input');
    this.$racingCountInput = document.querySelector('#racing-count-input');
    this.$result = document.querySelectorAll('div');
    this.cars = [];
  }

  addEventListener() {
    this.$carGameContainer.addEventListener('click', (e) => {
      if (e.target.id === 'car-names-submit') {
        this.onClickCarNamesSubmit();
      } else if (e.target.id === 'racing-count-submit') {
        this.onClickRacingCountSubmit();
      }
    });
  }

  onClickCarNamesSubmit() {
    this.cars.length = 0;
    const carNames = this.$carNamesInput.value;
    if (isValidCarNames(carNames)) {
      const carNamesArr = carNames.split(',');
      carNamesArr.forEach((carName) => {
        this.cars.push(new Car(carName));
      });
      // eslint-disable-next-line no-alert
      alert('정상적으로 입력되었습니다.');
    } else {
      // eslint-disable-next-line no-alert
      alert('제대로 입력하라');
    }
  }

  onClickRacingCountSubmit() {
    const racingCount = this.$racingCountInput.value;
    if (this.cars.length !== 0 && racingCount > 0) {
      this.renderResult(racingCount);
      this.cars.forEach((elem) => elem.setResult(''));
    } else {
      // eslint-disable-next-line no-alert
      alert('제대로 입력하라');
    }
  }

  renderResult(racingCount) {
    let cnt = racingCount;
    let result = '<h4>📄 실행 결과</h4>';
    while (cnt) {
      result += `<p>${this.getResult()}</p>`;
      result += '<br/>';
      cnt -= 1;
    }
    result += `<p>최종 우승자: ${this.getWinner()}</p>`;
    this.$result[this.$result.length - 1].innerHTML = result;
  }

  getResult() {
    let result = '';
    this.cars.forEach((elem) => {
      elem.setDigit(Math.floor(Math.random() * 10));
      if (elem.getDigit() >= 4) {
        elem.addResult('-');
      }
      result += `<p>${elem.getName()}: ${elem.getResult()}</p>`;
    });
    return result;
  }

  getWinner() {
    const ret = [];
    let winnerLength = 0;
    this.cars.forEach((elem) => {
      if (elem.getResult().length > winnerLength) {
        winnerLength = elem.getResult().length;
      }
    });
    this.cars.forEach((elem) => {
      if (elem.getResult().length === winnerLength) {
        ret.push(elem.getName());
      }
    });
    return ret.join(', ');
  }
}
