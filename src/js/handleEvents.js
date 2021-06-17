/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import { handleNameError, handleCountError } from './handleErrors.js';
import * as inputHandler from './inputHandler.js';
import { showCountDiv, showResultDiv } from './elementHandler.js';

function handleNamesInput(gameObj) {
  const names = inputHandler.makeCarNames();
  if (!inputHandler.isValidNames(names)) {
    handleNameError(gameObj);
    return;
  }
  gameObj.cars = inputHandler.makeCars(names);
  showCountDiv();
}

function handleCountInput(gameObj) {
  const count = inputHandler.getCount();
  if (!inputHandler.isValidCount(count)) {
    handleCountError(gameObj);
    return;
  }
  // TODO: 게임 실행
  showResultDiv();
}

export default function setEventListener(gameObj) {
  const $namesButton = document.getElementById('car-names-submit');
  const $countButton = document.getElementById('racing-count-submit');

  $namesButton.addEventListener('click', () => handleNamesInput(gameObj));
  $countButton.addEventListener('click', () => handleCountInput(gameObj));
}
