function staircase(n) {
  for (let i = 0; i < n; i++) {
    var string = '';

    for (let j = n - 1; j >= 0; j--) {
      if (j <= i) {
        string += '#';
      } else {
        string += ' ';
      }
    }
    console.log(string);
  }
}

// function staircase(n, row = 0, stair = '') {
//   if (row === n) {
//     return;
//   }

//   if (n === stair.length) {
//     console.log(stair);
//     staircase(n, row+1);
//     return;
//   }

//   if (stair.length <= row) {
//     stair += '#'
//   } else {
//     stair += '-';
//   }

//   staircase(n, row, stair);
// }


staircase(3);