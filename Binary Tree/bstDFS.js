class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function inorder(root) {
  if (root === null) return;
  inorder(root.left);
  console.log(root.value);
  inorder(root.right);
}
function preorder(root) {
  if (root === null) return;
  console.log(root.value);
  preorder(root.left);
  preorder(root.right);
}
function postorder(root) {
  if (root === null) return;
  postorder(root.left);
  postorder(root.right);
  console.log(root.value);
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
console.log("Inorder:");
inorder(root);
console.log("Preorder:");
preorder(root);
console.log("Postorder:");
postorder(root);
