// 707. Design Linked List
// Solved
// Medium
// Topics
// premium lock iconCompanies

// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

//     MyLinkedList() Initializes the MyLinkedList object.
//     int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
//     void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
//     void addAtTail(int val) Append a node of value val as the last element of the linked list.
//     void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
//     void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

class ListNode {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Initialize dummy head and tail
    this.head = new ListNode(-1);
    this.tail = new ListNode(-1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  get(index) {
    if (index < 0) {
      return -1;
    }
    let curr = this.head.next;
    let i = 0;
    while (curr !== this.tail && i < index) {
      curr = curr.next;
      i++;
    }
    if (curr === this.tail) {
      // could have stopped at i === index in loop so we need to check again since tail is dummy it's invalid value to return.
      return -1;
    }
    console.log(curr.val, " is the value at index ", index);
    return curr.val;
  }
  addAtHead(val) {
    const newNode = new ListNode(val);
    newNode.next = this.head.next;
    newNode.prev = this.head;
    // link the node before the dummy head
    this.head.next.prev = newNode;
    this.head.next = newNode;
  }

  addAtTail(val) {
    const newNode = new ListNode(val);
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;
    // link the node before dummy tail
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }
  addAtIndex(index, val) {
    if (index < 0) {
      return;
    }
    let curr = this.head.next;
    let i = 0;
    while (curr !== this.tail && i < index) {
      curr = curr.next;
      i++;
    }
    if (i !== index) {
      // could have stopped at curr!== tail and index might be more so it could be out of bounds
      return;
    }
    const newNode = new ListNode(val);
    // link the newNode
    newNode.next = curr;
    newNode.prev = curr.prev;

    curr.prev.next = newNode;
    curr.prev = newNode;
  }

  deleteAtIndex(index) {
    if (index < 0) {
      return;
    }
    let curr = this.head.next;
    let i = 0;
    while (curr !== this.tail && i < index) {
      curr = curr.next;
      i++;
    }
    // if curr is tail, it means index was out of bounds since we could have stopped at i === index in loop
    if (curr === this.tail) {
      return;
    }
    // unlink the current node
    curr.prev.next = curr.next;
    curr.next.prev = curr.prev;
  }
  print() {
    let curr = this.head;
    let s = "";
    while (curr) {
      s += curr.val + " ";
      curr = curr.next;
    }
    console.log(s);
  }
}

const myList = new DoublyLinkedList();
myList.addAtHead(1);
myList.addAtTail(3);
myList.addAtIndex(1, 2);
myList.print();
myList.get(2);
