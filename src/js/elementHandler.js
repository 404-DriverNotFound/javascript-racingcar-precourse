const $countDiv = document.getElementById('racing-count-container');

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
  // TODO: resultDiv 보이기
}
