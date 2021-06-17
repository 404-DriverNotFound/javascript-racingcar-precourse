/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-new */
import setEventListener from './handleEvents.js';
import { printRaceResult, printWinners, getMaxMoves } from './gameUtils.js';

export default function RacingCarGame() {
  this.cars = [];

  this.runGame = (count) => {
    this.makeRaceResult(count);
    this.chooseWinner();
  };

  this.makeRaceResult = (count) => {
    while (count) {
      this.cars.forEach((car) => car.moveOneTime());
      printRaceResult(this.cars);
      count -= 1;
    }
  };

  this.chooseWinner = () => {
    const max = getMaxMoves(this.cars);
    const winners = this.cars.filter((car) => car.moves === max);
    printWinners(winners);
  };
}

const init = (game) => setEventListener(game);

init(new RacingCarGame());
