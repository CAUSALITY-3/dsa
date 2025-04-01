/*
Minimize the Heights II

Given an array arr[] denoting heights of N towers and a positive integer K.

For each tower, you must perform exactly one of the following operations exactly once.

Increase the height of the tower by K
Decrease the height of the tower by K
Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.

Examples :

Input: k = 2, arr[] = {1, 5, 8, 10}
Output: 5
Explanation: The array can be modified as {1+k, 5-k, 8-k, 10-k} = {3, 3, 6, 8}.The difference between the largest and the smallest is 8-3 = 5.
Input: k = 3, arr[] = {3, 9, 12, 16, 20}
Output: 11
Explanation: The array can be modified as {3+k, 9+k, 12-k, 16-k, 20-k} -> {6, 12, 9, 13, 17}.The difference between the largest and the smallest is 17-6 = 11.

Constraints
1 ≤ k ≤ 107
1 ≤ n ≤ 105
1 ≤ arr[i] ≤ 107
*/

const input = [1, 5, 8, 10];

// JavaScript program to minimize the maximum difference
// between heights using Sorting

function getMinDiff(arr, k) {
  const n = arr.length;
  arr.sort((a, b) => a - b);

  // If we increase all heights by k or decrease all
  // heights by k, the result will be arr[n - 1] - arr[0]
  let res = arr[n - 1] - arr[0];

  // For all indices i, increment arr[0...i-1] by k and
  // decrement arr[i...n-1] by k
  for (let i = 1; i < arr.length; i++) {
    // Impossible to decrement height of ith tower by k,
    // continue to the next tower
    if (arr[i] - k < 0) continue;

    // Minimum height after modification
    let minH = Math.min(arr[0] + k, arr[i] - k);

    // Maximum height after modification
    let maxH = Math.max(arr[i - 1] + k, arr[n - 1] - k);

    // Store the minimum difference as result
    res = Math.min(res, maxH - minH);
  }
  return res;
}

const k = 6;
const arr = [12, 6, 4, 15, 17, 10];

const ans = getMinDiff(arr, k);
console.log(ans);

/*
Time - O(nlogn)
space - O(1)
*/
