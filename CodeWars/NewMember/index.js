function openOrSenior(data) {
  var open = 'Open';
  var senior = 'Senior';
  var result = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push(senior)
    } else {
      result.push(open);
    }
  }

}

openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]);
openOrSenior([[3, 12], [55, 1], [91, -2], [54, 23]]);
openOrSenior([[59, 12], [55, -1], [12, -2], [12, 12]]);