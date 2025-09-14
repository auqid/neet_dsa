// 199. Binary Tree Right Side View

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var rightSideView = function (root) {
  const res = [];
  const queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let rightSide = null;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node) {
        rightSide = node;
        queue.push(node.left);
        queue.push(node.right);
      }
    }
    if (rightSide) {
      res.push(rightSide.value);
    }
  }
  return res;
};

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
console.log(rightSideView(root)); // Output: [1, 3, 4]

// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(D) where D is the maximum width of the tree
// Did this code successfully run on Leetcode : Yes
// Any problem you faced while coding this : No
