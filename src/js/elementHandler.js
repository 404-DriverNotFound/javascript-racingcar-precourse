const $countDiv = document.getElementById('racing-count-container');
const $resultDiv = document.getElementById('result-container');

function toggleElement(element) {
  element.classList.toggle('hidden');
}

function showElement(element) {
  if (element.classList.contains('hidden')) {
    toggleElement(element);
  }
}

function hideElement(element) {
  if (!element.classList.contains('hidden')) {
    toggleElement(element);
  }
}

export function showCountDiv() {
  showElement($countDiv);
}

export function hideCountDiv() {
  hideElement($countDiv);
}

export function showResultDiv() {
  showElement($resultDiv);
}

export function hideResultDiv() {
  hideElement($resultDiv);
}

export function initResultDiv() {
  // TODO: resultDiv 초기화 기능
}
