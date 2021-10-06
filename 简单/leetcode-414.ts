// 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。

function thirdMax(nums: number[]): number {
  let newArr = [...new Set(nums)].sort((a, b) => b - a)
  return newArr[2] ?? newArr[0]
}
