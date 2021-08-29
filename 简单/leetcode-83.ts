// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

const node1 = new ListNode(3)
const node2 = new ListNode(3, node1)
const node3 = new ListNode(2, node2)
const node4 = new ListNode(1, node3)

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) return head
  let p1 = head
  let p2 = head.next
  while (p2) {
    if (p1.val === p2.val) {
      p1.next = p2.next
    } else {
      p1 = p2
    }
    p2 = p2.next
  }
  return head
}

console.log(deleteDuplicates(node4))
