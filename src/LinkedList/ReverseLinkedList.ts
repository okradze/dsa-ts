import { LinkedList, LinkedListNode } from "./LinkedList"

const reverseLinkedList = <T>(list: LinkedList<T>): LinkedListNode<T> | null => {
  if(!list.head.next) return list.head

  let currentNode: LinkedListNode<T> | null = list.head
  let lastNode: LinkedListNode<T> | null = null

  while(currentNode) {
    let nextNode: LinkedListNode<T> | null = currentNode.next
    currentNode.next = lastNode
    lastNode = currentNode
    currentNode = nextNode
  }

  return lastNode
}

const list = new LinkedList<number>(1)
list.add(2).add(3).add(4).add(5)
reverseLinkedList<number>(list)