/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-new */
import setEventListener from './handleEvents.js';
import { printRaceResult, printWinners, getMaxMoves } from './gameUtils.js';

export default function RacingCarGame() {
  this.cars = [];

  function makeRaceResult(cars, count) {
    while (count) {
      cars.forEach((car) => car.moveOneTime());
      printRaceResult(cars);
      count -= 1;
    }
  }

  function chooseWinner(cars) {
    const max = getMaxMoves(cars);
    const winners = cars.filter((car) => car.moves === max);
    printWinners(winners);
  }

  this.runGame = (count) => {
    makeRaceResult(this.cars, count);
    chooseWinner(this.cars);
  };

  setEventListener(this);
}

new RacingCarGame();
