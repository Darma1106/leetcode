// 给定一个正整数数组 w ，其中 w[i] 代表下标 i 的权重（下标从 0 开始），请写一个函数 pickIndex ，它可以随机地获取下标 i，选取下标 i 的概率与 w[i] 成正比。

// 例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。

// 也就是说，选取下标 i 的概率为 w[i] / sum(w) 。

class Solution {
  arr: number[] = []
  sum = 0
  constructor(w: number[]) {
    this.arr[0] = w[0]
    for (let i = 1; i < w.length; i++) {
      this.arr[i] = this.arr[i - 1] + w[i]
    }
    this.sum = w.reduce((pre, cur) => {
      return pre + cur
    }, 0)
  }

  pickIndex(): number | undefined {
    let cur = Math.random() * this.sum
    let left = 0
    let right = this.arr.length - 1
    if (cur < this.arr[0]) return 0
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      if (this.arr[mid - 1] <= cur && this.arr[mid] > cur) {
        return mid
      } else if (this.arr[mid] < cur) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
}

const ac = new Solution([1])

console.log(ac.pickIndex())
