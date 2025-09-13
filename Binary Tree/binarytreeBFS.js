class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function bfs(root) {
  let queue = [];
  if (root) {
    queue.push(root);
  }
  let level = 0;
  while (queue.length > 0) {
    console.log("level " + level + ": ");
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let curr = queue.shift();
      console.log(curr.value + " ");
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
    level++;
    console.log();
  }
}
// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);
bfs(root);
