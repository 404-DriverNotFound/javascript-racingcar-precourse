/* eslint-disable import/extensions */
import Car from './Car.js';

const $namesInput = document.getElementById('car-names-input');
const $countInput = document.getElementById('racing-count-input');

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

export function getCount() {
  return Number($countInput.value);
}

export function isValidCount(count) {
  return !Number.isNaN(count) && count > 0 && count % 1 === 0;
}
