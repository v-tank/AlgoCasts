String.prototype.camelCase = function () {
  return this.length === 0 ? "" : this.trim().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
}

console.log(camelCase(" camel case "));
console.log(camelCase(" camel case word"));