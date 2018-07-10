function miniMaxSum(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

  var sum = arr.reduce((sum, el) => {
    return sum + el;
  });
  
  console.log(`${sum - max} ${sum - min}`);
}

var arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);