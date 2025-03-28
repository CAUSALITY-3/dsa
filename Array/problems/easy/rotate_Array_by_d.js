/*
Rotate an Array by d – Counterclockwise or Left

Given an array of integers arr[] of size n, the task is to rotate the array elements to the left by d positions.

Examples:

Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}


Input: arr[] = {1, 2, 3}, d = 4
Output: {2, 3, 1}
Explanation: The array is rotated as follows:


After first left rotation, arr[] = {2, 3, 1}
After second left rotation, arr[] = {3, 1, 2}
After third left rotation, arr[] = {1, 2, 3}
After fourth left rotation, arr[] = {2, 3, 1}
*/

const input = [1, 2, 3, 4, 5, 6];

function rotateArray(arr, d) {
  d %= arr.length;

  console.log(d);
  const dArray = arr.slice(0, d);
  console.log(dArray);
  let i = 0;
  while (i + d < arr.length) {
    arr[i] = arr[i + d];
    i++;
  }
  console.log(arr);

  let j = 0;
  while (j < d) {
    arr[j + i] = dArray[j];
    j++;
  }
  return arr;
}

console.log(rotateArray(input, 2));

/*
Time - O(n)
space - O(n)
*/

//Better one

// JavaScript Code to left rotate an array using Reversal Algorithm

// Function to rotate an array by d elements to the left
function rotateArr(arr, d) {
  let n = arr.length;

  // Handle the case where d > size of array
  d %= n;

  // Reverse the first d elements
  reverse(arr, 0, d - 1);

  // Reverse the remaining n-d elements
  reverse(arr, d, n - 1);

  // Reverse the entire array
  reverse(arr, 0, n - 1);
}

// Function to reverse a portion of the array
function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

const arr = [1, 2, 3, 4, 5, 6];
const d = 2;

rotateArr(arr, d);

console.log(arr.join(" "));
