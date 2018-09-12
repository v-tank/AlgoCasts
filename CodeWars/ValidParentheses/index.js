var isValid = function(s) {
  var stack = [];

  if (s.length % 2 !== 0) {
    return false;
  } else {
    for (let paren of s) {
      switch (paren) {
        case '(':
          stack.push(')');
          break;
        case '{':
          stack.push('}');
          break;
        case '[':
          stack.push(']');
          break;
        default:
          var peek = stack[stack.length - 1];

          if (peek !== paren) {
            return false;
          } else {
            stack.pop();
          }
      }
    }

    if (stack.length > 0) {
      return false;
    }

    return true;
  }
};
