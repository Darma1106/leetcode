// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

function twoSum(nums: number[], target: number): number[] {
  if (!nums) return []
  // 创建字典表
  const m = new Map()
  // 遍历nums数组
  for (let i = 0; i < nums.length; i++) {
    // 获取当前值
    const n = nums[i]
    // 获取对当前与该值匹配的数值
    const n2 = target - nums[i]
    // 判断目标值是否在字典中
    if (m.has(n2)) {
      // 是，在返回目标值的坐标和当前数值的坐标
      return [m.get(n2), i]
    }
    // 不在字典中，则放入字典，key为数值，value为下标
    m.set(n, i)
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
