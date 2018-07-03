function digital_root(n) {
  var sum = 0;
  n = n.toString();

  while (n.length !== 1) {
    sum = 0;

    for (let el of n) {
      sum += parseFloat(el);
    }

    n = sum.toString();
  }

  return sum;
}


console.log(digital_root(942));