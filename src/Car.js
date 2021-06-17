function canGoForward() {
  return Math.floor(Math.random() * 10) % 10 > 3 ? 1 : 0;
}

export default function Car(name) {
  this.name = name;
  this.path = '';

  this.moveOneTime = () => {
    this.path += canGoForward() ? '-' : '';
  };
}
