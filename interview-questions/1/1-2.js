function permutationChecker(str1, str2){
  return (cleanupString(str1) === cleanupString(str2));
}

function cleanupString(str){
  return str.toLowerCase().split("").sort().join("");
}


console.log(permutationChecker("raceCAR ", "   RACEcar"));