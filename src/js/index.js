/* eslint-disable import/extensions */
/* eslint-disable no-new */
import setEventListener from './handleEvents.js';

export default function RacingCarGame() {
  this.cars = [];
}

const init = (game) => setEventListener(game);

init(new RacingCarGame());
