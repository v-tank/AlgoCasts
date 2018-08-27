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
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < (arr.length - i - 1); j++) {
  //     if (arr[j] > arr[j+1]) {
  //       swap(arr, j, j+1);
  //     }
  //   }
  // }

  var swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i+1]) {
        swap(arr, i, i+1);
        swapped = true;
      }
    }
  } while (swapped);

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

// Time Complexity: O(n*log(n)); Space Complexity: O(n)
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  var results = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

function quickSort(arr) {

  if(arr.length <= 1) {
    return arr;
  }

  var lower = [], greater = [];

  var pivot = arr.splice(Math.floor(arr.length / 2),1);

  for (var i = arr.length - 1 ; i >= 0; i--){
    if ( arr[i] <= pivot) {
      lower.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }

  var c = [];

  return c.concat(quickSort(lower), pivot, quickSort(greater));
};


module.exports = { bubbleSort, selectionSort, mergeSort, merge, quickSort };
