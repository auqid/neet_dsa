class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Given a binary tree where each node can have a value of 0 or 1,
// determine if there is a root-to-leaf path such that the sum of the values along the path is equal to 1.
// A leaf is a node with no children.

function canReachLeaf(root) {
  if (!root || root.val === 0) {
    return false;
  }
  if (root.left === null && root.right === null) {
    return true;
  }
  if (canReachLeaf(root.left)) {
    return true;
  }
  if (canReachLeaf(root.right)) {
    return true;
  }
  return false;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(0);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(1);
console.log(canReachLeaf(root)); // Output: true

// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(H) where H is the height of the tree

//  Leaf Path

function leafPath(root, path) {
  if (root === null || root.val === 0) return false;
  path.push(root.val);
  if (root.left === null && root.right === null) return true;
  if (leafPath(root.left, path)) return true;
  if (leafPath(root.right, path)) return true;
  path.pop();
  return false;
}

// Example usage:
const path = [];
console.log(leafPath(root, path)); // Output: true
console.log(path); // Output: [1, 1, 1]
// Time Complexity: O(N) where N is the number of nodes in the tree
// Space Complexity: O(H) where H is the height of the tree
