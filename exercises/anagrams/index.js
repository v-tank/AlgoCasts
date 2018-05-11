// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {  
  return cleanupString(stringA) === cleanupString(stringB);
}

function cleanupString(str){
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


module.exports = anagrams;


// function anagrams(stringA, stringB) {

//   var objectifiedA = objectifyString(stringA);
//   var objectifiedB = objectifyString(stringB);

//   if (Object.keys(objectifiedA).length !== Object.keys(objectifiedB).length) {
//     return false;
//   } else {
//     for (let char in objectifiedA) {
//       if (objectifiedA[char] !== objectifiedB[char]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// function objectifyString(string) {
//   const chars = {};

//   for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
//     !chars[char] ? (chars[char] = 1) : chars[char]++;
//   }
//   return chars;
// }