/*
Adding one to number represented as array of digits

Given a non-negative number represented as an array of digits. The is to add 1 to the number (increment the number represented by the digits by 1). The digits are stored such that the most significant digit is the first element of the array.

Examples :

Input : [1, 2, 4]
Output : 125
Explanation: 124 + 1 = 125 


Input : [9, 9, 9]
Output: 1000
Explanation: 999 + 1 = 1000 
*/

const input = [9, 9, 9];

function plusOne(arr) {
  const n = arr.length - 1;

  let result = 1;
  for (let i = 0; i <= n; i++) {
    result = result + arr[i] * 10 ** (n - i);
  }
  return result;
}

console.log(plusOne(input));

/*
Time - O(n)
space - O(1)
*/
