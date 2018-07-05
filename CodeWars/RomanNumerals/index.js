function convertNum(num) {
  var romanKey = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'C': 100,
    'XC': 90,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  var result = '';

  for (let key in romanKey) {
    if (num >= romanKey[key]) {
      result += key.repeat(Math.floor(num / romanKey[key]));
      num -= romanKey[key] * Math.floor(num / romanKey[key]);
    }
  }

  return result;
}

console.log(convertNum(1666));