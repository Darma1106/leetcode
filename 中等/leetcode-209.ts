// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

function minSubArrayLen(target: number, nums: number[]): number {
  let i = 0,
    sum = 0,
    len = 0
  for (let j = 0; j < nums.length; j++) {
    sum += nums[j]
    while (sum >= target) {
      len = len == 0 ? j - i + 1 : Math.min(len, j - i + 1)
      sum -= nums[i++]
    }
  }
  return len
}

console.log(minSubArrayLen(15, [1, 2, 3, 4, 5]))
