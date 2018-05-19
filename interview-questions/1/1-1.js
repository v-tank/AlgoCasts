function hasUniqueChars(str) {
  var bools = [];
  for (let char of str) {
    if (bools[char]) {
      console.log(false);
      console.log(bools);
      return false;
    } 
    bools[char] = true;
  }
  console.log(true);
  console.log(bools);
  return true;
}

hasUniqueChars("palindrome"); 
hasUniqueChars("charmander");