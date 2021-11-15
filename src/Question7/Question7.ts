class ListNode {
  readonly value: number
  next: ListNode | null = null

  constructor(value: number) {
    this.value = value
  }
}

class LinkedList {
  readonly head: ListNode
  tail: ListNode

  constructor(value: number) {
    this.head = new ListNode(value)
    this.tail = this.head
  }

  add(value: number) {
    const node = new ListNode(value)
    this.tail.next = node
    this.tail = node
    return this
  }
}

const reverseBetween = (head: ListNode, left: number, right: number) => {
  if(!head.next) return head
  if(left === right) return head

  let position = 1
  let currentNode: ListNode | null = head
  let start: ListNode | null = null

  while(currentNode && position < left) {
    start = currentNode
    currentNode = currentNode?.next
    position++
  }

  let tail: ListNode | null = null
  let prevNode: ListNode | null = null

  while(currentNode && position >= left && position <= right) {
    if(position === left) {
      tail = currentNode
    }

    let next: ListNode | null = currentNode.next
    currentNode.next = prevNode
    prevNode = currentNode

    if(position === right) {
      if(tail) tail.next = next

      if(start) {
        start.next = currentNode
        return head
      }

      return currentNode
    }

    currentNode = next
    position++
  }
}