/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // for (let i = 0; i < prices.length; i++) {
  //     for (let j = i; j < prices.length; j++) {
  //         if (prices[j] - prices[i] > max) {
  //             max = prices[j] - prices[i];
  //         }
  //     }
  // }
  // runs in theta(n^2) time with space comp. of theta(n)

  if (prices.length == 0) return 0;

  var min = prices[0];
  var profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    } else {
      if (prices[i] - min > profit) {
        profit = prices[i] - min;
      }
    }
  }

  return profit;
};
