// 121. Best Time to Buy and Sell Stock
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Brute Force Solution

function maxProfit(prices) {
  let globalProfit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];

      if (currentProfit > globalProfit) globalProfit = currentProfit;
    }
  }

  return globalProfit;
}

console.log(maxProfit(prices));

var maxProfitOptimize = function (prices) {
  let min = prices[0] || 0;
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    profit = Math.max(profit, prices[i] - min);
  }
  return profit;
};

console.log(maxProfitOptimize(prices));

// greedy algorythm 

// it will check first that if it' minimum valu then 
//it's check that currenct price minus  minimum value 
//and check which is maximum then return a  profit