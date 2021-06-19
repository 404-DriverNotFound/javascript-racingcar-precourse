/* eslint-disable no-param-reassign */
function canGoForward() {
  return Math.floor(Math.random() * 10) > 3;
}

export default function Car(name) {
  this.name = name;
  this.moves = 0;

  this.moveOneTime = () => {
    this.moves += canGoForward() ? 1 : 0;
  };
}
