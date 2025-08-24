// 206. Reverse Linked List
// Solved
// Easy
// Topics

// Given the head of a singly linked list, reverse the list, and return the reversed list.

//  Reverse a linked list with recursion
function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let newHead = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
}

//  Reverse a linked list with iteration
function reverseIterative(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

// test cases
let head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
console.log(reverse(head)); // { value: 3, next: { value: 2, next: { value: 1, next: null } } } }
console.log(reverseIterative(head)); // { value: 3, next: { value: 2, next: { value: 1, next: null } } } }
