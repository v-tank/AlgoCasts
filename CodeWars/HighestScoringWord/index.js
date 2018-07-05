function high(x) {
  var splitString = x.split(" ");
  var max = 0;
  var maxVal = '';

  for (let word of splitString) {
    
    var total = 0;

    for (let i = 0; i < word.length; i++) {
      total += word.charCodeAt(i) - 'a'.charCodeAt(0);
    }

    if (total > max) {
      max = total;
      maxVal = word;
      // console.log(`${maxVal}: ${max}`);
    }
  }

  return maxVal;
}

console.log(high("man i need a taxi up to ubud"));
console.log(high("what time are we climbing up the volcano"));
console.log(high("take me to semynak"));