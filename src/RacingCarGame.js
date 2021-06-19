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
    const carNames = this.$carNamesInput.value;
    if (isValidCarNames(carNames)) {
      // eslint-disable-next-line no-alert
      alert('제대로 입력했군!');
    } else {
      // eslint-disable-next-line no-alert
      alert('제대로 입력하라');
    }
  }

  onClickRacingCountSubmit() {
    const racingCount = this.$racingCountInput.value;
    if (racingCount > 0) {
      this.renderResult();
    } else {
      // eslint-disable-next-line no-alert
      alert('제대로 입력하라');
    }
  }

  renderResult() {
    let result = '<h4>📄 실행 결과</h4>';
    result += '결과 내용';
    this.$result[this.$result.length - 1].innerHTML = result;
  }
}
