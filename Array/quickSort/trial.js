const input = [1, 6, 5, 2, 3, 4, 7];

function quickSort(arr) {
  console.log(arr);
  if (arr.length < 2) return arr; //Base case

  const pivot = arr[arr.length - 1];
  let i;
  let j = 0;
  while (j < arr.length - 1) {
    //Main logic
    if (arr[j] <= pivot) {
      if (!isNaN(i)) {
        i++;
      } else {
        i = 0;
      }
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    j++;
  }

  // pivot swap
  if (!isNaN(i)) {
    i++;
  } else {
    i = 0;
  }
  let temp = arr[i];
  arr[i] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;

  const a1 = arr.slice(0, i);
  const a2 = arr.slice(i + 1);

  return [...quickSort(a1), arr[i], ...quickSort(a2)];
}

console.log(quickSort(input));
