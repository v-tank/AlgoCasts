function uniqueChars(str){
  let chars = {};

  for (let char of str) {
    if (chars[char]) {
      console.log(false);
      return false;
    } 
    chars[char] = true;
  }
  console.log(true);
  return true;
}
