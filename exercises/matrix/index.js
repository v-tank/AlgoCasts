// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  var outerArray = [];
  var counter = 1;

  var startCol = 0;
  var endCol = n-1;

  var startRow = 0;
  var endRow = n-1;

  for (let i = 0; i < n; i++) {
    outerArray.push([]);
  }

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      outerArray[startRow][i] = counter;
      counter++;
    }

    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      outerArray[i][endCol] = counter;
      counter++;
    }

    endCol--;

    for (let i = endCol; i >= startCol; i--) {
      outerArray[endRow][i] = counter;
      counter++;
    }

    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      outerArray[i][startCol] = counter;
      counter++;
    }

    startCol++;
  }

  return outerArray;
}

module.exports = matrix;
