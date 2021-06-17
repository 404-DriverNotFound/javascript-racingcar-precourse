/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import { handleNameError, handleCountError } from './handleErrors.js';
import * as inputHandler from './inputHandler.js';
import * as elementHandler from './elementHandler.js';

function handleNamesInput(gameObj) {
  const names = inputHandler.makeCarNames();
  if (!inputHandler.isValidNames(names)) {
    handleNameError(gameObj);
    return;
  }
  gameObj.cars = inputHandler.makeCars(names);
  elementHandler.showCountDiv();
}

function handleCountInput() {
  // TODO: count click 이벤트 처리
}

export default function setEventListener(gameObj) {
  const $namesButton = document.getElementById('car-names-submit');

  $namesButton.addEventListener('click', () => handleNamesInput(gameObj));
  // TODO: count click 이벤트 처리
}
