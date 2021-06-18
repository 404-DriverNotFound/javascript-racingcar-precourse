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
  }

  addEventListener() {
    this.$carGameContainer.addEventListener('click', (e) => {
      if (e.target.id === 'car-names-submit') {
        this.onClickCarNamesSubmit();
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
}
