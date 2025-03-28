/*
Insert an adjacent duplicate for all occurrences of a given element

Given an array arr[] of size n and an integer k, the task is to insert a duplicate of k adjacent to its every occurrence. Keep array’s original length same by removing the elements from the back.

Examples:  

Input: arr[] = [1, 0, 2, 3, 0, 4, 5, 0], K = 0 
Output: [1, 0, 0, 2, 3, 0, 0, 4]
Explanation: The given array [1, 0, 2, 3, 0, 4, 5, 0] is modified to [1, 0, 0, 2, 3, 0, 0, 4] after insertion of two 0’s and truncation of two extra elements.


Input: arr[] = [7, 5, 8], K = 8 
Output: [7, 5, 8] 
Explanation: After inserting an adjacent 8 into the array, it got truncated to restore the original size of the array. 
*/

const input = [7, 5, 8];

function insertDuplicate(arr, k) {
  let countK = 0;
  arr.forEach((item) => (item === k ? countK++ : null));
  const n = arr.length;
  let extend = n + countK - 1;

  for (let i = n - 1; i >= 0; i--) {
    if (extend < arr.length) {
      if (arr[i] === k) {
        arr[extend] = k;
        extend--;
        arr[extend] = k;
        extend--;
      } else {
        arr[extend] = arr[i];
        extend--;
      }
    } else {
      if (arr[i] === k) {
        extend = extend - 2;
      } else {
        extend--;
      }
    }
  }

  return arr;
}

console.log(insertDuplicate(input, 8));

/*
Time - O(n)
space - O(1)




[Expected Approach] – Using Two Pointer Technique- O(n) Time and O(1) Space
This approach first counts how many times k appears and then create two pointers ( curr, write_idx) where the first one points to the last index of the current array and the second one points to the sum of last index and the count of k. 


Then, starting from the last element, it copies each element to its new position and, if the element is k, places another k next to it. This avoids overwriting any elements that need to be preserved. 


Since each K needs to be updated with two K entries adjacent to each other, the array will increase in length by an amount equal to the number of K that are present in the original array arr[].
Find the total number of K to know the number of last elements to be removed.
Initialize a variable write_idx that will point to the index at the end of this imaginary array and another pointer curr at the end of the current array, which is arr[n-1].
Iterate from the end and for each element we assume that we are copying the element to its current position, but copy only if the write_idx < N, and keep updating the write_idx each time. For an element with a value of zero, write it twice.
*/
