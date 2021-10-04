// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0,
    len = 0,
    sum = 0
  for (let right = 0; right < nums.length; right++) {
    // 窗口右侧右滑
    sum += nums[right]
    while (sum >= target) {
      // 更新len,窗口左侧右滑
      len = len == 0 ? right - left + 1 : Math.min(right - left + 1, len)
      sum -= nums[left]
      left++
    }
  }
  return len
}

console.log(minSubArrayLen(5, [1, 2, 3, 5, 1, 1, 1, 1]))
