/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
import { RESULT_CONTENT } from './constants.js';

const $resultContent = document.getElementById(RESULT_CONTENT);

function printRaceResult(cars) {
  const $resultPerOnePlay = document.createElement('div');
  cars.forEach((car) => {
    const $carInfo = document.createElement('span');
    $carInfo.innerText = `${car.name}: ${String().padEnd(car.moves, '-')}
    `;
    $resultPerOnePlay.appendChild($carInfo);
  });
  $resultPerOnePlay.appendChild(document.createElement('p'));
  $resultContent.appendChild($resultPerOnePlay);
}

function printWinners(winners) {
  const $result = document.createElement('p');
  $result.innerText = `최종 우승자: ${winners.map((car) => car.name).join(', ')}`;
  $resultContent.appendChild($result);
}

function getMaxMoves(cars) {
  return cars.reduce((acc, cur) => (cur.moves > acc ? cur.moves : acc), 0);
}

export function makeRaceResult(cars, originCount) {
  let count = originCount;
  while (count) {
    cars.forEach((car) => car.moveOneTime());
    printRaceResult(cars);
    count -= 1;
  }
}

export function chooseWinner(cars) {
  const max = getMaxMoves(cars);
  const winners = cars.filter((car) => car.moves === max);
  printWinners(winners);
}

export function initMoves(cars) {
  cars.forEach((car) => {
    car.moves = 0;
  });
}

export function isValidNames(names) {
  const set = new Set(names.filter((carName) => carName.length > 0 && carName.length < 6));
  return set.size === names.length;
}

export function isValidCount(count) {
  return !Number.isNaN(count) && count > 0 && count % 1 === 0;
}
