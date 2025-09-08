class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function insertIntoBST(root, val) {
  if (!root) {
    return new TreeNode(val);
  }
  if (val > root.value) {
    root.right = insertIntoBST(root.right, val);
  } else {
    root.left = insertIntoBST(root.left, val);
  }
  return root;
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
console.log(insertIntoBST(root, 5));
console.log(insertIntoBST(root, 6));
