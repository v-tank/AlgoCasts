// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  var a = 1, b = 0, temp
  var arr = [];

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    arr.push(b);
    n--;
  }

  return arr[arr.length - 2];
}

module.exports = fib;
