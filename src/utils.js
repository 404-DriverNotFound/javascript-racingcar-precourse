export default function checkNameVaild(nameString) {
  if (/\s/g.test(nameString)) {
    return false;
  }
  const names = nameString.split(',');
  if (names.find((val) => (val === ''))) {
    return false;
  }
  const nameSet = new Set(names);
  return nameSet.size === names.length;
}
