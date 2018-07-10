function aVeryBigSum(ar) {
  var sum = 0;
  sum = ar.reduce((sum, el) => {
    return sum + el;
  }, 0)
  
  return sum;
}

var arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
aVeryBigSum(arr);