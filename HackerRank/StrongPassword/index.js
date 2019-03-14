function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  var numbers = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()-+";

  var neededChars = 0;
  var hasNumbers = false;
  var hasLowerCase = false;
  var hasUpperCase = false;
  var hasSpecialCharacters = false;
  var desiredLength = 0;

  for (let char of password) {
    if (hasNumbers === false) {
      if (numbers.indexOf(char) >= 0) {
        hasNumbers = true;
      }
    }

    if (hasLowerCase === false) {
      if (lowerCase.indexOf(char) >= 0) {
        hasLowerCase = true;
      }
    }

    if (hasUpperCase === false) {
      if (upperCase.indexOf(char) >= 0) {
        hasUpperCase = true;
      }
    }

    if (hasSpecialCharacters === false) {
      if (specialCharacters.indexOf(char) >= 0) {
        hasSpecialCharacters = true;
      }
    }

    desiredLength++;

    if (hasNumbers && hasLowerCase && hasUpperCase && hasSpecialCharacters && password.length >= 6) {
      break;
    }
  }

  if (!hasNumbers) {
    neededChars++;
  }

  if (!hasLowerCase) {
    neededChars++;
  }

  if (!hasUpperCase) {
    neededChars++;
  }

  if (!hasSpecialCharacters) {
    neededChars++;
  }

  if (desiredLength + neededChars < 6) {
    neededChars += 6 - neededChars + desiredLength;
  }

  return neededChars;
}

let result = minimumNumber(11, "#HackerRank");
console.log(result);

result = minimumNumber(3, "Ab1");
console.log(result);



