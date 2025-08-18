class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // use a dummy node, to avoid checks everytime.
    this.head = new ListNode(-1);
    this.tail = this.head;
  }
  insertEnd(val) {
    // add the newNode at the end of current tail

    this.tail.next = new ListNode(val);
    // update the tail
    this.tail = this.tail.next;
  }
  remove(index) {
    let curr = this.head;
    let i = 0;
    // traverse till you reach the node before index
    while (curr && i < index) {
      curr = curr.next;
      i++;
    }

    if (curr && curr.next) {
      // if the node after current is tail, set tail equal to the current node
      if (curr.next === this.tail) {
        this.tail = curr;
      }
      //   remove the next Node by setting the current's next to node after the index;
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
console.log(myList, "Initialize");
myList.insertEnd(1);
console.log(myList, "Insert 1");
myList.insertEnd(2);
console.log(myList, "Insert 2");
myList.insertEnd(3);
console.log(myList, "Insert 3");
myList.print();
myList.remove(0);
console.log(myList, "remove 0");
myList.print();
