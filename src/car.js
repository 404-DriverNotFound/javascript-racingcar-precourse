export function runRace(cars, count, resultContainer) {
  resultContainer.innerHTML = '';
  for (let i = 0; i < count; i += 1) {
    let statusString = '';
    cars.forEach((car) => {
      car.go();
      statusString += car.getStatus();
      statusString += '<br>';
    });
    statusString += '<br>';
    resultContainer.innerHTML += statusString;
  }
  const top = Math.max(...cars.map((car) => car.pos));
  resultContainer.innerHTML += `최종 우승자: ${cars.filter((car) => (car.pos === top)).map((car) => car.name).join(', ')}`;
}

function getPath(pos) {
  let result = '';
  for (let i = 0; i < pos; i += 1) {
    result += '-';
  }
  return result;
}

export default function Car(name) {
  this.name = name;
  this.pos = 0;

  this.go = () => {
    if (Math.floor(Math.random() * 10) >= 4) {
      this.pos += 1;
    }
  };

  this.getStatus = () => `${this.name}: ${getPath(this.pos)}`;
}
