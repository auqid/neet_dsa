class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(val) {
    const newNode = new ListNode(val);
    // if queue is empty
    if (this.front === null) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = this.rear.next;
    }
  }
  dequeue() {
    if (this.front === null) {
      return;
    }
    const val = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null; // if queue becomes empty
    }

    return val;
  }
  print() {
    let current = this.front;
    let i = "";
    while (current) {
      i += current.value + "->";
      current = current.next;
    }
    console.log(i);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.dequeue();
queue.dequeue();
queue.print();
