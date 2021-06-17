const $resultContent = document.getElementById('result-content');

export function printRaceResult(cars) {
  const $resultPerOnePlay = document.createElement('div');
  cars.forEach((car) => {
    const $carInfo = document.createElement('span');
    $carInfo.innerText = `${car.name}: ${String().padEnd(car.moves, '-')}
    `;
    $resultPerOnePlay.appendChild($carInfo);
  });
  $resultPerOnePlay.appendChild(document.createElement('p'));
  $resultContent.appendChild($resultPerOnePlay);
}

export function printWinners(winners) {
  const $result = document.createElement('p');
  $result.innerText = `최종 우승자: ${winners.map((car) => car.name).join(', ')}`;
  $resultContent.appendChild($result);
}

export function getMaxMoves(cars) {
  return cars.reduce((acc, cur) => (cur.moves > acc ? cur.moves : acc), 0);
}
