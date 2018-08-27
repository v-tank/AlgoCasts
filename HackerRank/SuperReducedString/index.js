function superReducedString(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    if (res[res.length - 1] === s[i]) {
      res = res.slice(0, res.length - 1);
    } else {
      res += s[i];
    }
  }

  if (res.length === 0) {
    return ("Empty String");
  } else {
    return res;
  }
}

var result = superReducedString("aaabccddd");
console.log(result);
