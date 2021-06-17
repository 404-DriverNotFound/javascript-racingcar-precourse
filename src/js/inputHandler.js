/* eslint-disable import/extensions */
import Car from './Car.js';

const $namesInput = document.getElementById('car-names-input');

export function makeCarNames() {
  return $namesInput.value.split(',').map((carName) => carName.trim());
}

export function isValidNames(names) {
  const set = new Set(names.filter((carName) => carName.length > 0 && carName.length < 6));
  return set.size === names.length;
}

export function makeCars(names) {
  return names.map((carName) => new Car(carName));
}
