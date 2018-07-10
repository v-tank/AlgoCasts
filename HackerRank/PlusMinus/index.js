function plusMinus(arr) {
  var pos = 0;
  var neg = 0;
  var zeros = 0;
  var len = arr.length;

  arr.forEach(element => {
    if (Math.sign(element) === 1) {
      pos++;
    } 
    else if (Math.sign(element) === -1) {
      neg++;
    } 
    else {
      zeros++;
    }
  });

  console.log((pos/len).toFixed(6));
  console.log((neg/len).toFixed(6));
  console.log((zeros/len).toFixed(6));
}

var arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);