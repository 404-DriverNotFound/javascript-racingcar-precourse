/* eslint-disable import/extensions */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
import * as elementHandler from './elementHandler.js';

export function handleNameError(gameObj) {
  gameObj.cars.length = 0;
  elementHandler.hideCountDiv();
  alert(`잘못된 이름을 입력하셨습니다. 아래 조건을 지켜주세요.
  1) 각 자동차의 이름은 1글자 이상 5글자 이하로 입력해주세요.
  2) 자동차의 이름이 중복되지 않도록 입력해주세요.`);
}

export function handleCountError() {
  // TODO: count 입력 오류 처리
}
