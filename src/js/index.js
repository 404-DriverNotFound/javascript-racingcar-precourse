/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
/* eslint-disable no-new */
import setEventListener from './handleEvents.js';
import { makeRaceResult, chooseWinner } from './gameUtils.js';

export default function RacingCarGame() {
  this.cars = [];

  this.runGame = (count) => {
    makeRaceResult(this.cars, count);
    chooseWinner(this.cars);
  };

  setEventListener(this);
}

new RacingCarGame();
