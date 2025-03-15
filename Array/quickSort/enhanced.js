function quickSort(arr, i = -1, j = 0, pivotIndex = arr.length - 1) {
  if (pivotIndex <= j) return; //Base case

  for (j; j <= pivotIndex; j++) {
    //Main logic
    if (arr[j] <= arr[pivotIndex]) {
      i++;
      if (i === j) continue;
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  //Recursion
  quickSort(arr, -1, 0, i - 1);
  quickSort(arr, i, i + 1, pivotIndex);
}

const input = [7, 3, 3, 2, 8, 4, 5];

function qs(arr) {
  quickSort(arr);
  console.log(arr);
}
qs(input);
