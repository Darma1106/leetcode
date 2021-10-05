// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。

function longestConsecutive(nums: number[]): number {
  let res = 0
  const set = new Set(nums)
  for (let num of set) {
    let size = 0
    if (!set.has(num - 1)) {
      while (set.has(num)) {
        size++
        num++
      }
    }
    res = Math.max(res, size)
  }
  return res
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
