export class LinkedListNode<T> {
  readonly value: T
  next: LinkedListNode<T> | null = null

  constructor(value: T) {
    this.value = value
  }
}

export class LinkedList<T> {
  readonly head: LinkedListNode<T>
  tail: LinkedListNode<T>

  constructor(value: T) {
    this.head = new LinkedListNode(value)
    this.tail = this.head
  }

  add(value: T) {
    const node = new LinkedListNode<T>(value)
    this.tail.next = node
    this.tail = node
    return this
  }
}