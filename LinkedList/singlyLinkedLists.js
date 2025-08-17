class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new ListNode(-1);
    this.tail = this.head;
  }
  insertEnd(val) {
    this.tail.next = new ListNode(val);
    this.tail = this.tail.next;
  }
  remove(index) {
    let curr = this.head;
    let i = 0;
    while (curr && i < index) {
      curr = curr.next;
      i++;
    }
    if (curr && curr.next) {
      if (curr.next === this.tail) {
        this.tail = curr;
      }
      curr.next = curr.next.next;
    }
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

const myList = new LinkedList();
myList.insertEnd(1);
myList.insertEnd(2);
myList.insertEnd(3);
myList.print();
myList.remove(1);
myList.print();
