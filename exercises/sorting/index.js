// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
function swap(arr, a, b) {
  let temp =  arr[b];
  arr[b] = arr[a];
  arr[a] = temp;

  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }

  return arr;
}

function selectionSort(arr) {

}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
