function maxSubArray(nums: number[]): number {
  let max = -Infinity
  let val = 0
  for (let pos in nums) {
    val += nums[pos]
    max = Math.max(val, max)
    val = Math.max(0, val)
  }
  return max
}
