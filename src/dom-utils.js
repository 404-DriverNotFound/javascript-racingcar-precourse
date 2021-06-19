export function initDOM() {
  const carGameContainerDivs = document.querySelectorAll('.car-game-container > div');
  carGameContainerDivs[0].querySelector('input').id = 'car-names-input';
  carGameContainerDivs[0].querySelector('button').id = 'car-names-submit';
  carGameContainerDivs[1].querySelector('input').id = 'racing-count-input';
  carGameContainerDivs[1].querySelector('button').id = 'racing-count-submit';
}

export function changeVisible(isVisible, ...elements) {
  elements.forEach((el) => {
    el.style.visibility = (isVisible ? 'visible' : 'hidden');
  });
}
