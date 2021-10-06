// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。

function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map = new Map()
  for (let i = 0, n = nums.length; i < n; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      return true
    }
    map.set(nums[i], i)
  }
  return false
}

console.log(containsNearbyDuplicate([1, 1], 2))
