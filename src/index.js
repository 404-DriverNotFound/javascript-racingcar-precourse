import Car, { runRace } from './car.js';
import { initDOM, changeVisible } from './dom-utils.js';
import checkNameVaild from './utils.js';

export default function RacingCarGame() {
  const cars = [];
  let count = 0;

  initDOM();

  const carNamesInput = document.getElementById('car-names-input');
  const carNamesSubmit = document.getElementById('car-names-submit');
  const racingCountContainer = document.querySelector('.car-game-container > div:last-child');
  const racingCountInput = document.getElementById('racing-count-input');
  const racingCountSubmit = document.getElementById('racing-count-submit');
  const resultContainer = document.querySelectorAll('#app > div')[1];

  changeVisible(false, racingCountContainer, resultContainer);

  function onCarNamesClicked() {
    const nameString = carNamesInput.value;
    if (!checkNameVaild(nameString)) {
      alert('🚨 입력이 잘못되었습니다! 🚨');
      return;
    }
    cars.length = 0;
    nameString.split(',').forEach((name) => cars.push(new Car(name)));
    changeVisible(true, racingCountContainer);
  }

  function onRacingCountClicked() {
    count = Number(racingCountInput.value);
    runRace(cars, count, resultContainer);
    changeVisible(true, resultContainer);
  }

  carNamesSubmit.addEventListener('click', onCarNamesClicked);
  racingCountSubmit.addEventListener('click', onRacingCountClicked);
}

new RacingCarGame();
