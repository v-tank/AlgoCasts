// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort
function swap(arr, a, b) {
  let temp =  arr[b];
  arr[b] = arr[a];
  arr[a] = temp;

  return arr;
}

// Time Complexity: O(n^2); Space Complexity: O(1)
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

// Time Complexity: O(n^2); Space Complexity: O(1)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(arr, i , min);
    }
  }

  return arr;
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
