function maxProfit(prices: number[]): number {
  let curMin = prices[0]
  let sum = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < curMin) {
      curMin = prices[i]
      continue
    }
    sum = Math.max(prices[i] - curMin, sum)
  }
  return sum
}
