function accum(s) {
  var string = '';

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) {
        string += s[i].toUpperCase();
      } else {
        string += s[i].toLowerCase();
      }
    }

    if (i === s.length - 1) {
      return string
    } else {
      string += "-";
    }
  }
}

accum("ZpglnRxqenU");
accum("NyffsGeyylB");
accum("MjtkuBovqrU");
