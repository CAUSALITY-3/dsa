const input = [4, 6, 2, 1, 7, 3, 5];

function mergeSort(arr) {
  const length = arr.length;
  //   console.log(arr);
  if (length <= 1) return arr;
  const middle = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  console.log(left, right);
  const result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i = i + 1;
    } else {
      result.push(right[j]);
      j = j + 1;
    }
  }
  const ret = [...result, ...left.slice(i), ...right.slice(j)];

  console.log("www", ret);

  return ret;
}

console.log(mergeSort(input));

// console.log(merge([4], [2, 6]));
