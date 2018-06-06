// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // RegEx checks if there is a match for any of the letters inside the square brackets; /g checks through the entire length instead of the first match; /i makes the check case-insensitive
  var counter = str.match(/[aeiou]/gi);
  // if there's a match, counter becomes an array with all the matches. If not, it returns null

  // checks if counter is truthy. If so, return the length of the array else send a 0.
  return counter ? counter.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   var counter = 0;

//   for (let char of str.toLowerCase()) {
//     if ("aeiou".includes(char)) {
//       counter++;
//     }
//   }

//   return counter;
// }