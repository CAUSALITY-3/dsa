/*
Maximum Subarray Sum – Kadane’s Algorithm

Given an array arr[], the task is to find the subarray that has the maximum sum and return its sum.

Examples:

Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
Output: 11
Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.


Input: arr[] = {-2, -4}
Output: –2
Explanation: The subarray {-2} has the largest sum -2.


Input: arr[] = {5, 4, 1, 7, 8}
Output: 25
Explanation: The subarray {5, 4, 1, 7, 8} has the largest sum 25.
*/

const input = [5, 4, 1, 7, 8];

function maximumSubArray(arr) {
  let res = arr[0];
  let cum = arr[0];
  for (let i = 1; i < arr.length + 1; i++) {
    cum = Math.max(cum + arr[i], arr[i]);
    if (cum < 0) {
      cum = 0;
      if (res < arr[i]) {
        res = arr[i];
      }
    } else if (res < cum) {
      res = cum;
    }
  }
  return res;
}

console.log(maximumSubArray(input));

/*
Time - O(n)
space - O(1)
*/
