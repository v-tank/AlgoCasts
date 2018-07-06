function pickPeaks(arr) {
  var result = {
    pos: [],
    peaks: []
  }

  var plateau = false;
  var possibleMax;
  var possibleMaxIndex;

  for (let i = 1; i < arr.length - 1; i++) {
    if ((arr[i] > arr[i-1]) && (arr[i] > arr[i+1])) {
      result.pos.push(i);
      result.peaks.push(arr[i]);
    }

    if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
      plateau = true;
      possibleMax = arr[i];
      possibleMaxIndex = i;
    }

    if (arr[i] === arr[i-1] && arr[i] > arr[i+1] && plateau) {
      result.pos.push(possibleMaxIndex);
      result.peaks.push(possibleMax);
    }
  }

  return(result);
}

pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]);
pickPeaks([1, 2, 2, 2, 1]);

