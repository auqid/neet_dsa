// 105. Construct Binary Tree from Preorder and Inorder Traversal

class TreeNode {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  const rootValue = preorder[0];
  const root = new TreeNode(rootValue);
  const mid = inorder.indexOf(rootValue);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
}

// Example usage:
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const treeRoot = buildTree(preorder, inorder);
console.log(treeRoot);
