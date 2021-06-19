export default class Car {
  constructor(name) {
    this.name = name;
    this.digit = 0;
    this.result = '';
  }

  getDigit() {
    return this.digit;
  }

  setDigit(digit) {
    this.digit = digit;
  }

  addResult(result) {
    this.result += result;
  }

  getResult() {
    return this.result;
  }

  setResult(result) {
    this.result = result;
  }

  getName() {
    return this.name;
  }
}
