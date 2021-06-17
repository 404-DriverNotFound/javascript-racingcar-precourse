/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-new */
import setEventListener from './handleEvents.js';
import { printRaceResult, printWinners, getMaxMoves } from './gameUtils.js';

export default function RacingCarGame() {
  this.cars = [];

  function makeRaceResult(count) {
    while (count) {
      this.cars.forEach((car) => car.moveOneTime());
      printRaceResult(this.cars);
      count -= 1;
    }
  }

  function chooseWinner() {
    const max = getMaxMoves(this.cars);
    const winners = this.cars.filter((car) => car.moves === max);
    printWinners(winners);
  }

  this.runGame = (count) => {
    makeRaceResult(count);
    chooseWinner();
  };
}

const init = (game) => setEventListener(game);

init(new RacingCarGame());
