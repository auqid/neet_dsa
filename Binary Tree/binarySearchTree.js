class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function searchBST(root, val) {
  if (!root) {
    return false;
  }
  if (val > root.value) {
    return searchBST(root.right, val);
  } else if (val < root.value) {
    return searchBST(root.left, val);
  } else {
    return true;
  }
}

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

console.log(searchBST(root, 2)); // true
console.log(searchBST(root, 5)); // false
