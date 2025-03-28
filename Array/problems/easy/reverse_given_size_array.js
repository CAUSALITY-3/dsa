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
  let k = size - 1;
  for (let i = 0; i < arr.length - 1; i = i + k) {
    if (i + k > arr.length - 1) {
      k = arr.length - 1 - i;
    }

    let left = i,
      right = i + k;

    console.log(left, k, right);
    while (left < right) {
      console.log(left, right);
      // [(arr[left], arr[right])] = [
      //   arr[right],
      //   arr[left],
      // ];

      const temp = arr[right];
      arr[right] = arr[left];
      arr[left] = temp;
      left++;
      right--;
    }
    console.log(arr);
  }
  return arr;
}

console.log(reverseGivenSize(input, 5));

/*
Time - O(n)
space - O(1)
*/
