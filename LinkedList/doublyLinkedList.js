class ListNode {
  constructor(val) {
    this.prev = null;
    this.val = val;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // use a dummy head and tail to avoid checks
    this.head = new ListNode(-1);
    this.tail = new ListNode(-1);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  insertEnd(val) {
    const newNode = new ListNode(val);
    // link newNode to dummy Tail
    newNode.next = this.tail;
    newNode.prev = this.tail.prev;
    // link newNode to real tail
    this.tail.prev.next = newNode;
    this.tail.prev = newNode;
  }

  insertionFront(val) {
    // keep in mind we have a dummy Head
    const newNode = new ListNode(val);
    //  link newNode to dummy node
    newNode.next = this.head.next;
    newNode.prev = this.head;
    //link the real head to the newNode
    this.head.next.prev = newNode;
    this.head.next = newNode;
  }
  removeFront() {
    // The node after head (keep in mind we have a dummy node)
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
  }
  removeEnd() {
    // the node before tail (keep in mind we have a dummy tail)
    this.tail.prev.prev.next = this.tail;
    this.tail.prev = this.tail.prev.prev;
  }
  print() {
    let curr = this.head;
    let s = "";
    while (curr) {
      s += curr.val + "->";
      curr = curr.next;
    }
    console.log(s);
  }
}

const myList = new DoublyLinkedList();
myList.insertEnd(2);
myList.insertEnd(3);
myList.insertionFront(-2);
myList.removeEnd();
myList.removeFront();
myList.print();
console.log(myList);
