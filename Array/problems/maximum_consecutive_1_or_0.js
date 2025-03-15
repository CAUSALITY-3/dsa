/*
Maximum consecutive one’s (or zeros) in a binary array

Given an array arr[] consisting of only 0’s and 1’s, the task is to find the count of a maximum number of consecutive 1’s or 0’s present in the array.

Examples : 

Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
Output: 4
Explanation: The maximum number of consecutive 1’s in the array is 4 from index 8-11.


Input: arr[] = {0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1}
Output: 2
Explanation: The maximum number of consecutive 0’s in the array is 2 from index 0-1.


Input: arr[] = {0, 0, 0, 0}
Output: 4
Explanation: The maximum number of consecutive 0’s in the array is 4.
*/

const input = [0, 1, 0];

function maxConsecutive(arr) {
  let maxCon = 1;
  for (let i = 0; i < arr.length; i++) {
    let j = 1;
    while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
      j++;
      if (maxCon < j) {
        maxCon = j;
      }
      i++;
    }
  }
  return maxCon;
}

console.log(maxConsecutive(input));

/*
Time - O(n)
space - O(1)
*/
