// Merge K Sorted Linked Lists
// Solved

// You are given an array of k linked lists lists, where each list is sorted in ascending order.

// Return the sorted linked list that is the result of merging all of the individual linked lists.

// Example 1:

// Input: lists = [[1,2,4],[1,3,5],[3,6]]

// Output: [1,1,2,3,3,4,5,6]

// Example 2:

// Input: lists = []

// Output: []

// Example 3:

// Input: lists = [[]]

// Output: []

// Constraints:

//     0 <= lists.length <= 1000
//     0 <= lists[i].length <= 100
//     -1000 <= lists[i][j] <= 1000

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Solution {
  mergeKLists(lists) {
    if (lists.length === 0) {
      return null;
    }
    for (let i = 1; i < lists.length; i++) {
      lists[i] = this.mergeLists(lists[i], lists[i - 1]);
    }
    return lists[lists.length - 1];
  }
  mergeLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    if (l1) {
      tail.next = l1;
    }
    if (l2) {
      tail.next = l2;
    }
    return dummy.next;
  }
}

console.log(
  new Solution().mergeKLists([
    [1, 2, 4],
    [1, 3, 5],
    [3, 6],
  ])
);
