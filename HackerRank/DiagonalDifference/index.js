function diagonalDifference(arr) {
  var leftSum = 0;
  var rightSum = 0;

  for (let i = 0; i < arr.length; i++ ){
    leftSum += arr[i][i];
    rightSum += arr[i][arr[i].length - i - 1];
  }
  
  return Math.abs(leftSum - rightSum);
}

var array = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log(diagonalDifference(array));