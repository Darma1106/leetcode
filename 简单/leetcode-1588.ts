// 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。

// 子数组 定义为原数组中的一个连续子序列。

// 请你返回 arr 中 所有奇数长度子数组的和 。

function sumOddLengthSubarrays(arr: number[]): number {
  let sum = 0
  let n = arr.length
  for (let start = 0; start < n; start++) {
    for (let length = 1; start + length <= n; length += 2) {
      let end = start + length - 1
      for (let i = start; i <= end; i++) {
        sum += arr[i]
      }
    }
  }
  return sum
}
