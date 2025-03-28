/*
Majority Element
Given an array arr. Find the majority element in the array. If no majority exists, return -1. A majority element in an array is an element that appears strictly more than arr.size() / 2 times in the array.

Examples : 

Input : arr[] = {1, 1, 2, 1, 3, 5, 1}
Output : 1
Explanation: Note that 1 appear 4 times which is more than  7 / 2 times 


Input : arr[] = {3, 3, 4, 2, 4, 4, 2, 4}
Output :  -1 
Explanation: There is no element whose frequency is greater than the half of the size of the array size.


Input : arr[] = {3}
Output : 3
Explanation: Appears more than n/2 times
*/

const input = [34];

function majorityElement(arr) {
  const n = arr.length;
  let candidate = -1;
  let count = 0;

  // Find a candidate - find a number that present morethan any other number in a majority array
  for (const num of arr) {
    if (count === 0) {
      candidate = num;
      count = 1;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  count = 0;
  for (const num of arr) {
    if (num === candidate) count++;
  }

  if (count > n / 2) return candidate;
  return -1;
}

console.log(majorityElement(input));

/*
Time - O(n)
space - O(1)
*/
