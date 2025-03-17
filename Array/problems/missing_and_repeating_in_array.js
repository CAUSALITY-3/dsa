/*
Missing and Repeating in an Array

Given an unsorted array of size n. Array elements are in the range of 1 to n. One number from set {1, 2, …n} is missing and one number occurs twice in the array. The task is to find these two numbers.

Examples: 

Input: arr[] = {3, 1, 3}
Output: 3, 2
Explanation: In the array, 2 is missing and 3 occurs twice.


Input: arr[] = {4, 3, 6, 2, 1, 1}
Output: 1, 5
Explanation: 5 is missing and 1 is repeating.
*/

const input = [4, 3, 6, 2, 1, 1];

function missingRepeating(arr) {
  let repeated;
  let missing;
  for (let i = 0; i < arr.length; i++) {
    const idx = Math.abs(arr[i]);
    if (arr[idx - 1] < 0) {
      repeated = -arr[i];
      continue;
    }
    arr[idx - 1] = -arr[idx - 1];
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      missing = i + 1;
      break;
    }
  }

  return [repeated, missing];
}

console.log(missingRepeating(input));

/*
Time - O(n)
space - O(1)
*/
