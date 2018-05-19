function isPermutation(str1, str2){
  console.log(simplifyString(str1) === simplifyString(str2));
}

function simplifyString(str) {
  return str.toLowerCase().split("").sort().join("");
}

isPermutation("WhatisGoi nGon", "GoingoNWhatis ");