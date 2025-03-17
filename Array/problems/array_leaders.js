/*
Leaders in an array

Given an array arr[] of size n, the task is to find all the Leaders in the array. An element is a Leader if it is greater than or equal to all the elements to its right side.

Note: The rightmost element is always a leader.

Examples:

Input: arr[] = [16, 17, 4, 3, 5, 2]
Output: [17 5 2]
Explanation: 17 is greater than all the elements to its right i.e., [4, 3, 5, 2], therefore 17 is a leader. 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.


Input: arr[] = [1, 2, 3, 4, 5, 2]
Output: [5 2]
Explanation: 5 is greater than all the elements to its right i.e., [2], therefore 5 is a leader. 2 has no element to its right, therefore 2 is a leader.
*/

const input = [16, 17, 4, 3, 5, 2];

function arrayLeaders(arr) {
  if (arr.length < 2) return arr;
  const n = arr.length;
  let max = arr[n - 1];
  const res = [max];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > max) {
      max = arr[i];
      res.push(max);
    }
  }
  return res;
}

console.log(arrayLeaders(input));

/*
Time - O(n)
space - O(1)
*/
