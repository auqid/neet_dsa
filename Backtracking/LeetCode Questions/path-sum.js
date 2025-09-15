// 112. Path Sum
// Solved
// Easy
// Topics
// premium lock iconCompanies

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

function pathSum(root, targetSum) {
  if (!root) return false;
  function dfs(node, currSum) {
    currSum += node.val;
    if (!node.left && !node.right) {
      return currSum === targetSum;
    }
    return dfs(node.left, currSum) || dfs(node.right, currSum);
  }
  return dfs(root, 0);
}

// Example usage:
const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: { val: 4, left: null, right: { val: 1, left: null, right: null } },
  },
};
const targetSum = 22;
console.log(pathSum(root, targetSum)); // Output: true
