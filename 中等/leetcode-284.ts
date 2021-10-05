// 请你设计一个迭代器，除了支持 hasNext 和 next 操作外，还支持 peek 操作。

// 实现 PeekingIterator 类：

// PeekingIterator(int[] nums) 使用指定整数数组 nums 初始化迭代器。
// int next() 返回数组中的下一个元素，并将指针移动到下个元素处。
// bool hasNext() 如果数组中存在下一个元素，返回 true ；否则，返回 false 。
// int peek() 返回数组中的下一个元素，但 不 移动指针。

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation
 * class Iterator {
 *      hasNext(): boolean {}
 *
 *      next(): number {}
 * }
 */

namespace LC284 {
  interface Iterator {
    data: number[]
  }

  class PeekingIterator {
    private iterator: number[]
    private current = -1
    constructor(iterator: Iterator) {
      this.iterator = iterator.data
    }

    peek(): number {
      let flag = this.current!
      return this.iterator[flag + 1]
    }

    next(): number {
      this.current++
      return this.iterator[this.current]
    }

    hasNext(): boolean {
      let flag = this.current!
      return flag + 1 < this.iterator.length
    }
  }
}
