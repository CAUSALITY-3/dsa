/*
Stock Buy and Sell – Multiple Transaction Allowed

Given an array prices[] of size n denoting the cost of stock on each day, the task is to find the maximum total profit if we can buy and sell the stocks any number of times.

Note: We can only sell a stock which we have bought earlier and we cannot hold multiple stocks on any day.

Examples:

Input: prices[] = {100, 180, 260, 310, 40, 535, 695}
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210
                       Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655
                       Maximum Profit  = 210 + 655 = 865


Maximize-Profit--Graph
Input: prices[] = {4, 2, 2, 2, 4}
Output: 2
Explanation: Buy the stock on day 3 and sell it on day 4 => 4 – 2 = 2
Maximum Profit  = 2
*/

const input = [4, 2, 2, 2, 4];

function buyStock(arr) {
  let buy;
  let profit = 0;

  for (let n = 0; n < arr.length; n++) {
    if (!buy) {
      if (arr[n] < arr[n + 1]) {
        buy = arr[n];
      }
      continue;
    }
    if (arr[n] > arr[n + 1] || n + 1 === arr.length) {
      profit = profit + arr[n] - buy;
      buy = undefined;
    }
    console.log(arr[n]);
  }
  return profit;
}

console.log(buyStock(input));

/*
Time - O(n)
space - O(1)
*/
