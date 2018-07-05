function validParentheses(parens) {
  var sum = 0;

  for (let paren of parens) {
    if (paren === '(') sum += 1;
    if (paren === ')') sum -= 1;
    if (sum < 0) return false;
  }

  return sum === 0;
}

