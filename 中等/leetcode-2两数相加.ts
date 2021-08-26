/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const resultList = new ListNode()
  let current = resultList
  let re1 = 0
  // 同位相加 对十取模 取余
  // 模拟等长
  while (l1 || l2 || re1) {
    // 不知道l1 是否为null, l2 同
    const value1 = l1 === null ? 0 : l1.val
    const value2 = l2 === null ? 0 : l2.val

    const sum = value1 + value2 + re1

    // 取模 取整
    re1 = parseInt((sum / 10).toString())

    // 取余
    const re2 = sum % 10

    // 当前指针下next
    current.next = new ListNode(re2)

    // 变换指针，往后推
    current = current.next

    if (l2) {
      l2 = l2.next
    }

    if (l1) {
      l1 = l1.next
    }
  }

  return resultList.next
}

let node1 = new ListNode(2, null)
let node2 = new ListNode(0, node1)
let l1 = new ListNode(3, node2)

let node3 = new ListNode(3, null)
let node4 = new ListNode(2, node3)
let l2 = new ListNode(1, node4)

console.log(addTwoNumbers(l1, l2))

export {}
