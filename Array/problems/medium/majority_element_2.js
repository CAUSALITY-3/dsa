/*
Majority Element II – Elements occurring more than ⌊N/3⌋ times

Given an array arr[] consisting of n integers, the task is to find all the array elements which occurs more than floor(n/3) times.
Note: The returned array of majority elements should be sorted.

Examples:

Input: arr[] = {2, 2, 3, 1, 3, 2, 1, 1}
Output: {1, 2}
Explanation: The frequency of 1 and 2 is 3, which is more than floor n/3 (8/3 = 2).


Input: arr[] = {-5, 3, -5}
Output: {-5}
Explanation: The frequency of -5 is 2, which is more than floor n/3 (3/3 = 1).


Input: arr[] = {3, 2, 2, 4, 1, 4}
Output: { }
Explanation: There is no majority element.
*/

const input = [2, 2, 3, 1, 3, 2, 1, 1];

function majorityElement(arr) {
  const n = arr.length;

  // Initialize two candidates and their counts
  let ele1 = -1,
    ele2 = -1;
  let cnt1 = 0,
    cnt2 = 0;

  for (let ele of arr) {
    // Increment count for candidate 1
    if (ele1 === ele) {
      cnt1++;
    }

    // Increment count for candidate 2
    else if (ele2 === ele) {
      cnt2++;
    }

    // New candidate 1 if count is zero
    else if (cnt1 === 0) {
      ele1 = ele;
      cnt1++;
    }

    // New candidate 2 if count is zero
    else if (cnt2 === 0) {
      ele2 = ele;
      cnt2++;
    }

    // Decrease counts if neither candidate
    else {
      cnt1--;
      cnt2--;
    }
  }

  const res = [];
  cnt1 = 0;
  cnt2 = 0;

  // Count the occurrences of candidates
  for (let ele of arr) {
    if (ele1 === ele) cnt1++;
    if (ele2 === ele) cnt2++;
  }

  // Add to result if they are majority elements
  if (cnt1 > n / 3) res.push(ele1);
  if (cnt2 > n / 3 && ele1 != ele2) res.push(ele2);

  if (res.length === 2 && res[0] > res[1]) {
    [res[0], res[1]] = [res[1], res[0]];
  }
  return res;
}

console.log(majorityElement(input));

/*
Time - O(n)
space - O(1)
*/
