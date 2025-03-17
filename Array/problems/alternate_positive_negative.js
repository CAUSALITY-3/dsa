/*
Rearrange Array Elements by Sign

Given an array arr[] of size n, the task is to rearrange it in alternate positive and negative manner without changing the relative order of positive and negative numbers. In case of extra positive/negative numbers, they appear at the end of the array.

Note: The rearranged array should start with a positive number and 0 (zero) should be considered as a positive number.

Examples: 

Input:  arr[] = [1, 2, 3, -4, -1, 4]
Output: arr[] = [1, -4, 2, -1, 3, 4]


Input:  arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
Output: arr[] = [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]
*/

const input = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8];

function rearrangeArray(arr) {
  const posi = [];
  const nega = [];

  for (const n of arr) {
    if (n < 0) {
      nega.push(n);
    } else {
      posi.push(n);
    }
  }

  let i = 0;
  const res = [];
  while (i < posi.length && i < nega.length) {
    res.push(posi[i]);
    res.push(nega[i]);
    i++;
  }
  while (i < posi.length) {
    res.push(posi[i++]);
  }
  while (i < nega.length) {
    res.push(nega[i++]);
  }
  return res;
}

console.log(rearrangeArray(input));

/*
Time - O(n)
space - O(n)
*/
