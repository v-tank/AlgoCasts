function pigIt(str) {
  var splitString = str.split(" ");

  var translated = splitString.map(function (input) {
    if (!/[a-z]/i.test(input)) return input // keep non word elements as is

    return input.substring(1) + input.charAt(0) + "ay ";
  });

  return translated.join("");
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("Hello world !"));