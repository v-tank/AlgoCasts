function findMissingLetter(array) {
  array = array.map(el => el.charCodeAt(0));

  for (var i = 0; i < array.length; i++) {
    if (array[i] + 1 !== array[i + 1]) {
      return String.fromCharCode(array[i] + 1);
    }
  }

  return ' ';
}

console.log(findMissingLetter(['O', 'Q', 'R', 'S']));
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));