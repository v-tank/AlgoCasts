function camelcase(s) {
  let counter = 0;

  if (s.length > 0) {
    for (let char of s) {
      if (char === char.toUpperCase()) {
          counter++;
      }
    }
    return counter + 1;
  }
  return counter;
}

const res = camelcase("saveChangesInTheEditor");
console.log(res);
