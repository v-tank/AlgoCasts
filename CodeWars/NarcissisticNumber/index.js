function narcissistic(value) {
  value = value.toString();
  var result = 0;

  for (let num of value) {
    result += Math.pow(parseInt(num), value.length);
  }

  return parseInt(value) === result;
}

console.log(narcissistic(153));
console.log(narcissistic(1634));
console.log(narcissistic(371));
console.log(narcissistic(7));