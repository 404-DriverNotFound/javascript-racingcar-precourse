/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import { initMoves } from './gameUtils.js';
import { handleNameError, handleCountError } from './handleErrors.js';
import * as inputHandler from './handleInputs.js';
import * as elementHandler from './handleElements.js';

function handleNamesInput(gameObj) {
  elementHandler.hideResultDiv();
  const names = inputHandler.makeCarNames();
  if (!inputHandler.isValidNames(names)) {
    handleNameError(gameObj);
    return;
  }
  gameObj.cars = inputHandler.makeCars(names);
  elementHandler.showCountDiv();
}

function handleCountInput(gameObj) {
  elementHandler.initResultDiv();
  initMoves(gameObj.cars);
  const count = inputHandler.getCount();
  if (!inputHandler.isValidCount(count)) {
    elementHandler.hideResultDiv();
    handleCountError(gameObj);
    return;
  }
  elementHandler.showResultDiv();
  gameObj.runGame(count);
}

export default function setEventListener(gameObj) {
  const $namesButton = document.getElementById('car-names-submit');
  const $countButton = document.getElementById('racing-count-submit');

  $namesButton.addEventListener('click', () => handleNamesInput(gameObj));
  $countButton.addEventListener('click', () => handleCountInput(gameObj));
}
