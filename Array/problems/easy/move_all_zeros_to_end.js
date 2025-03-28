/*
Move all zeros to end of array

Given an array of integers arr[], the task is to move all the zeros to the end of the array while maintaining the relative order of all non-zero elements.

Examples: 

Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
Output: arr[] = [1, 2, 4, 3, 5, 0, 0, 0]
Explanation: There are three 0s that are moved to the end.


Input: arr[] = [10, 20, 30]
Output: arr[] = [10, 20, 30]
Explanation: No change in array as there are no 0s.

Input: arr[] = [0, 0]
Output: arr[] = [0, 0]
Explanation: No change in array as there are all 0s.
*/

const input = [0, 0];

function moveZeros(arr) {
  let startZero;
  let endZero;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (!startZero) {
        startZero = i;
        endZero = i;
      } else {
        endZero = i;
      }
    } else if (!isNaN(startZero)) {
      arr[startZero] = arr[i];
      arr[i] = 0;
      startZero++;
      endZero++;
    }
    console.log(arr);
  }
  return arr;
}

console.log(moveZeros(input));

// JavaScript Program to move all zeros to end using two traversals

// Function which pushes all zeros to end of an array
function pushZerosToEnd(arr) {
  // Count of non-zero elements
  let count = 0;

  // If the element is non-zero, replace the element at
  // index 'count' with this element and increment count
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) arr[count++] = arr[i];
  }

  // Now all non-zero elements have been shifted to
  // the front. Make all elements 0 from count to end.
  while (count < arr.length) arr[count++] = 0;
}

// Driver Code
const arr = [1, 2, 0, 4, 3, 0, 5, 0];
pushZerosToEnd(arr);
console.log(arr.join(" "));

/*
Time - O(n)
space - O(1)
*/
