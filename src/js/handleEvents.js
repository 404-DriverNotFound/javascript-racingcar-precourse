/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import Car from './Car.js';
import { initMoves, isValidNames, isValidCount } from './gameUtils.js';
import { handleNameError, handleCountError } from './handleErrors.js';
import { hideElementWithId, showElementWithId } from './handleElements.js';
import {
  CAR_NAMES_INPUT,
  CAR_NAMES_BUTTON,
  RACING_COUNT_DIV,
  RACING_COUNT_INPUT,
  RACING_COUNT_BUTTON,
  RESULT_DIV,
  RESULT_CONTENT,
} from './constants.js';

function handleNamesInput(gameObj) {
  const $namesInput = document.getElementById(CAR_NAMES_INPUT);

  hideElementWithId(RESULT_DIV);
  const names = $namesInput.value.split(',').map((carName) => carName.trim());
  if (!isValidNames(names)) {
    handleNameError(gameObj);
    return;
  }
  gameObj.cars = names.map((carName) => new Car(carName));
  showElementWithId(RACING_COUNT_DIV);
}

function handleCountInput(gameObj) {
  const $countInput = document.getElementById(RACING_COUNT_INPUT);
  const $resultContent = document.getElementById(RESULT_CONTENT);

  $resultContent.innerHTML = '';
  initMoves(gameObj.cars);
  const count = Number($countInput.value);
  if (!isValidCount(count)) {
    hideElementWithId(RESULT_DIV);
    handleCountError(gameObj);
    return;
  }
  showElementWithId(RESULT_DIV);
  gameObj.runGame(count);
}

export default function setEventListener(gameObj) {
  const $namesButton = document.getElementById(CAR_NAMES_BUTTON);
  const $countButton = document.getElementById(RACING_COUNT_BUTTON);

  $namesButton.addEventListener('click', () => handleNamesInput(gameObj));
  $countButton.addEventListener('click', () => handleCountInput(gameObj));
}
