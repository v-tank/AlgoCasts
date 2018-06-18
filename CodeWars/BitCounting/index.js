var countBits = function (n) {
  var counter = 0;

  n = parseInt(n, 10).toString(2);

  for (let char of n) {
   if (char === "1") {
     counter++;
   }
  }

  return(counter);   
};

countBits(0);
countBits(4);
countBits(7);
countBits(9);
countBits(10);