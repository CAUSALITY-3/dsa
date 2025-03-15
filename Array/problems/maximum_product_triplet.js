/*
Maximum product of a triplet (subsequence of size 3) in array

Given an integer array, find a maximum product of a triplet in the array.

Examples: 

Input:  arr[ ] = [10, 3, 5, 6, 20]
Output: 1200
Explanation: Multiplication of 10, 6 and 20


Input:  arr[ ] =  [-10, -3, -5, -6, -20]
Output: -90


Input: arr[ ] =  [1, -4, 3, -6, 7, 0]
Output: 168

*/

// Hint - this is combination of third largest and second smallest problem

const input = [10, 3, 5, 6, 20];

function maxTriplet(arr) {
  let largest, secondLargest, thirdLargest, smallest, secondSmallest;
  for (const n of arr) {
    if (!smallest || n < smallest) {
      secondSmallest = smallest;
      smallest = n;
    } else if (!secondSmallest || n < secondSmallest) {
      secondSmallest = n;
    }
    if (!largest || n > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = n;
      continue;
    }
    if (!secondLargest || n > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = n;
      continue;
    }
    if (!thirdLargest || n > thirdLargest) {
      thirdLargest = n;
    }
  }
  console.log(
    largest,
    secondLargest,
    thirdLargest,
    smallest,
    secondSmallest,
    Math.max(
      largest * secondLargest * thirdLargest,
      largest * smallest * secondSmallest
    )
  );
  return Math.max(
    largest * secondLargest * thirdLargest,
    largest * smallest * secondSmallest
  );
}

console.log(maxTriplet(input));

/*
Time - O(n)
space - O(1)
*/
