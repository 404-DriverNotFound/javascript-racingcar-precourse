/* eslint-disable import/extensions */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import { hideElementWithId } from './handleElements.js';
import { RESULT_DIV, RACING_COUNT_DIV } from './constants.js';

export function handleNameError(gameObj) {
  hideElementWithId(RACING_COUNT_DIV);
  gameObj.cars.length = 0;
  alert(`잘못된 이름을 입력하셨습니다. 아래 조건을 지켜주세요.
  1) 각 자동차의 이름은 1글자 이상 5글자 이하로 입력해주세요.
  2) 자동차의 이름이 중복되지 않도록 입력해주세요.`);
}

export function handleCountError() {
  hideElementWithId(RESULT_DIV);
  alert('잘못된 값을 입력하셨습니다. 1 이상의 정수를 입력해주세요.');
}
