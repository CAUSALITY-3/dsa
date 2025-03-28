/*
Remove duplicates from Sorted Array

Given a sorted array arr[] of size n, the goal is to rearrange the array so that all distinct elements appear at the beginning in sorted order. Additionally, return the length of this distinct sorted subarray.

Note: The elements after the distinct ones can be in any order and hold any value, as they don’t affect the result.

Examples: 

Input: arr[] = [2, 2, 2, 2, 2]
Output: [2]
Explanation: All the elements are 2, So only keep one instance of 2.


Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
Output: [1, 2, 3, 4, 5]

Input: arr[] = [1, 2, 3]
Output: [1, 2, 3]
Explanation : No change as all elements are distinct.
*/

const input = [1, 2, 3];

function removeDuplicates(arr) {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[j] = arr[i];
    while (arr[i] === arr[i + 1]) {
      i++;
    }
    j++;
  }
  return arr.slice(0, j);
}

console.log(removeDuplicates(input));

/*
Time - O(n)
space - O(1)
*/
