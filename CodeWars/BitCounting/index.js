var countBits = function (n) {
  var counter = 0;

  n = parseInt(n, 10).toString(2).split("");

  n.reduce((counter, char) => char === '1' ? counter += 1 : false);

  // for (let char of n) {
  //  if (char === "1") {
  //    counter++;
  //  }
  // }

  return(counter);   
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(9));
console.log(countBits(10));