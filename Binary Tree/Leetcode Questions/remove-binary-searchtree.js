class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function to find the minimum value node in a subtree

function minValue(root) {
  let curr = root;
  while (curr.left) {
    curr = curr.left;
  }
  return curr;
}

function remove(root, val) {
  // base case : not found
  if (root === null) return root;
  // search right
  if (val > root.value) {
    root.right = remove(root.right, val);
  } else if (val < root.value) {
    // search left
    root.left = remove(root.left, val);
  } else {
    // found the node
    if (root.left === null) {
      return root.right; //case 1 & 2: node with only right child or no child
    } else if (root.right === null) {
      return root.left; //case 2: node with only left child
    } else {
      // case 3: node with two children, get the inorder successor (smallest in the right subtree)
      let minNode = minValue(root.right);
      root.value = minNode.value; // copy the inorder successor's content to this node
      root.right = remove(root.right, minNode.value); // delete the inorder successor
    }
  }
  return root;
}

const root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);
console.log(remove(root, 3));
console.log(remove(root, 0));
console.log(remove(root, 5));
console.log(remove(root, 6));
console.log(remove(root, 4));

// Input: root = [5,3,6,2,4,null,7], key = 3
// Output: [5,4,6,2,null,null,7]
// Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
// One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
// Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.
