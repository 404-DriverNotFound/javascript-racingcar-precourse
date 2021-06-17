/* eslint-disable no-param-reassign */
function canGoForward() {
  return Math.floor(Math.random() * 10) % 10 > 3;
}

export function initMoves(cars) {
  cars.forEach((car) => {
    car.moves = 0;
  });
}

export function Car(name) {
  this.name = name;
  this.moves = 0;

  this.moveOneTime = () => {
    this.moves += canGoForward() ? 1 : 0;
  };
}
