function toggleElement($element) {
  $element.classList.toggle('hidden');
}

export function showElementWithId(selector) {
  const $element = document.getElementById(selector);

  if ($element.classList.contains('hidden')) {
    toggleElement($element);
  }
}

export function hideElementWithId(selector) {
  const $element = document.getElementById(selector);

  if (!$element.classList.contains('hidden')) {
    toggleElement($element);
  }
}
