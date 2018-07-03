function expandedForm(num) {
  var expandedString = [];
  num = num.toString();
  var len = num.length;

  for (var i = 0; i < len; i++){
    var product = num[i] * Math.pow(10, (len - i - 1));

    if (product !== 0) {
      expandedString.push(product);
    }
  }

  return expandedString.join(' + ');
}


console.log(expandedForm(70300));