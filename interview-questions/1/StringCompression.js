function compress(str){
  let compressed = "";
  var consecutive = 0;

  for (let i = 0; i < str.length; i++) {
    consecutive++;

    if (str.charAt(i) !== str.charAt(i+1)) {
      compressed += str.charAt(i) + consecutive;
      consecutive = 0;
    }
  }

  return compressed;
}

console.log(compress("aabcccccaaa"));