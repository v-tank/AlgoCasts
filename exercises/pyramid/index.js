// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, string = '') {
  if (row === n) {
    return;
  }

  if (string.length === (2 * n - 1)) {
    console.log(string);
    return pyramid(n, row + 1);
  }

  var midpt = Math.floor((2 * n - 1) / 2);
  var add;
  if (midpt - row <= string.length && midpt + row >= string.length) {
    add = '#';
  } else {
    add = ' ';
  }

  pyramid(n, row, string + add);
}

module.exports = pyramid;


// function pyramid(n) {
//   // calculates the midpoint of the pyramid based on the level
//   var midpt = Math.floor((2 * n - 1) / 2);

//   for (var i = 0; i < n; i++) {
//     var string = ''; // creates an empty string for each level

//     for (var j = 0; j < (2 * n - 1); j++) {
//       // if the column falls within this range, add a '#', else add a ' '
//       if (midpt - i <= j && midpt + i >= j) {
//         string += '#';
//       } else {
//         string += ' ';
//       }
//     }
//     console.log(string);  // log the string for each level
//   }
// }