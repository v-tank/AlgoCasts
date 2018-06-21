function checker(str) {
  str = str.toLowerCase().replace(/\s+/g, "");
  var oddCounter = 0;
  var obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  for (let char in obj) {
    if (obj[char] % 2 === 1) {
      oddCounter++;
    }
  }

  return(oddCounter <= 1)
}

console.log(checker("Car Race"));