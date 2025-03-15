/*
Reverse an Array in groups of given size

Given an array arr[] and an integer k, the task is to reverse every subarray formed by consecutive K elements.

Examples: 

Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8, 9], k = 3 
Output: 3, 2, 1, 6, 5, 4, 9, 8, 7


Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 5 
Output: 5, 4, 3, 2, 1, 8, 7, 6


Input: arr[] = [1, 2, 3, 4, 5, 6], k = 1 
Output: 1, 2, 3, 4, 5, 6


Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 10 
Output: 8, 7, 6, 5, 4, 3, 2, 1

*/

const input = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseGivenSize(arr, size) {
  let zeroIndexedSize = size - 1;
  for (let i = 0; i < arr.length; i++) {
    if (i + size > arr.length - 1) {
      zeroIndexedSize = arr.length - 1 - i;
    }
    let count = 0;
    for (let j = i + zeroIndexedSize; j > arr.length - size; j--) {
      const temp = arr[j];
      arr[j] = arr[i + count];
      arr[i + count] = temp;
      count++;
    }
    i = i + size;
  }
  return arr;
}

console.log(reverseGivenSize(input, 10));

/*
Time - O(n)
space - O(1)
*/
