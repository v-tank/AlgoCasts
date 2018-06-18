function towerBuilder(nFloors) {
  // build here
  let mid = Math.floor((2 * nFloors - 1) / 2);
  let array = [];
  for (let i = 0; i < nFloors; i++) {
    var string = '';

    for (let j = 0; j < (2 * nFloors - 1); j++) {
      if (mid - i <= j && mid + i >= j) {
        string += '*'
      } else {
        string += ' '
      }
    }

    array.push(string);
  }

  return array
}