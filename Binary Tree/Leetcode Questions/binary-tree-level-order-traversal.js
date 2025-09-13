// 102. Binary Tree Level Order Traversal
// Solved
// Medium
// Topics
// premium lock iconCompanies
// Hint

// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

var levelOrder = function (root) {
  let res = [];
  if (!root) {
    return res;
  }
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let level = [];
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      level.push(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    res.push(level);
  }
  return res;
};

// Example usage:
const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);
console.log(levelOrder(root)); // Output: [[3], [9, 20], [15, 7]]
