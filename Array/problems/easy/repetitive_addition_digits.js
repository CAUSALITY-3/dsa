/*
Finding sum of digits of a number until sum becomes single digit

Given an integer n, we need to repeatedly find the sum of its digits until the result becomes a single-digit number.

Examples:
Input: n = 1234 
Output: 1 
Explanation:
Step 1: 1 + 2 + 3 + 4 = 10 
Step 2: 1 + 0 = 1


Input: n = 5674
Output: 4
Explanation: 
Step 1: 5 + 6 + 7 + 4 = 22 
Step 2: 2 + 2 = 4
*/

const input = 1234;

function repetitiveAddition(n) {
  if (n / 10 < 1) return n;
  let cum = 0;
  let i = 0;
  while (n >= 1) {
    cum = cum + (n % 10);
    n = (n - (n % 10)) / 10;
    i++;
  }
  return repetitiveAddition(cum);
}
console.log(repetitiveAddition(input));

/*
Time - O(n)
space - O(1)
*/
