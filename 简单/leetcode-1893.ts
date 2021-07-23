// 给你一个二维整数数组 ranges 和两个整数 left 和 right 。每个 ranges[i] = [starti, endi] 表示一个从 starti 到 endi 的 闭区间 。

// 如果闭区间 [left, right] 内每个整数都被 ranges 中 至少一个 区间覆盖，那么请你返回 true ，否则返回 false 。

// 已知区间 ranges[i] = [starti, endi] ，如果整数 x 满足 starti <= x <= endi ，那么我们称整数x 被覆盖了。
function isCovered(ranges: number[][], left: number, right: number): boolean {
  let l = left
  let r = right
  for (let i = 0; i < ranges.length; i++) {
    //特殊情况当ranges中的区间在left和right之间，将其分为两段开始递归计算
    if (l < ranges[i][0] && r > ranges[i][1]) {
      if (isCovered(ranges.slice(i + 1), l, ranges[i][0] - 1) && isCovered(ranges.slice(i + 1), ranges[i][1] + 1, r)) {
        return true
      } else {
        return false
      }
    }

    //正常情况计算
    if (ranges[i][0] <= l && l <= ranges[i][1]) {
      l = ranges[i][1] + 1
    }
    if (ranges[i][0] <= r && r <= ranges[i][1]) {
      r = ranges[i][0] - 1
    }
    if (l > r) {
      return true
    }
  }
  return false
}
