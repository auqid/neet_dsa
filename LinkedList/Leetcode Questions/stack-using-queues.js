// Implement Stack Using Queues
// Solved

// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

//     void push(int x) Pushes element x to the top of the stack.
//     int pop() Removes the element on the top of the stack and returns it.
//     int top() Returns the element on the top of the stack.
//     boolean empty() Returns true if the stack is empty, false otherwise.

// Notes:

//     You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
//     Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.

// Example 1:

// Input: ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]

// Output: [null, null, null, 2, 2, false]

// Explanation:
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class MyStack {
  constructor() {
    this.head = null;
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    const newNode = new ListNode(x);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.head === null) {
      return null;
    }
    const val = this.head.val;
    this.head = this.head.next;
    return val;
  }

  /**
   * @return {number}
   */
  top() {
    if (this.head === null) return null;
    return this.head.val;
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.head === null;
  }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
