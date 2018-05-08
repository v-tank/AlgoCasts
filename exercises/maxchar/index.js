// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  var max = 0;
  var maxChar = '';

  // Create an object and increment counter if the lettery key already exists; if not, create it.
  for (let char of str) {
    !chars[char] ? chars[char] = 1 : chars[char]++
  }

  // Loop through object and find the max value as well as the character that occurs the most
  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
