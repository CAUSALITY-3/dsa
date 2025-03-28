/*
Third largest element in an array of distinct elements

Given an array of n integers, the task is to find the third largest element. All the elements in the array are distinct integers. 

Examples : 

Input: arr[] = {1, 14, 2, 16, 10, 20}
Output: 14
Explanation: Largest element is 20, second largest element is 16 and third largest element is 14

Input: arr[] = {19, -10, 20, 14, 2, 16, 10}
Output: 16
Explanation: Largest element is 20, second largest element is 19 and third largest element is 16 
*/

const input = [1, 14, 2, 16, 10, 20];

function thirdLargestElement(arr) {
  let largest, secondLargest, thirdLargest;
  for (const n of arr) {
    console.log(largest, secondLargest, thirdLargest, n);
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
  return thirdLargest;
}

console.log(thirdLargestElement(input));

/*
Time - O(n)
space - O(1)
*/
