function dirReduc(arr) {
  for (var i = 0; i < arr.length; i++) {
    if ((arr[i] === 'NORTH' && arr[i + 1] === 'SOUTH') || (arr[i] === 'SOUTH' && arr[i + 1] === 'NORTH')) {
      arr.splice(i, 2);
      dirReduc(arr);
    }
    if ((arr[i] === 'EAST' && arr[i + 1] === 'WEST') || (arr[i] === 'WEST' && arr[i + 1] === 'EAST')) {
      arr.splice(i, 2);
      dirReduc(arr);
    }
  }

  return (arr);
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]));
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]));