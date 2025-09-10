function inorderRecursive(root, result = []) {
  if (root === null) return result;
  inorderRecursive(root.left, result);
  result.push(root.value);
  inorderRecursive(root.right, result);
  return result;
}

function inorderIterative(root) {
  const stack = [];
  const res = [];
  let curr = root;
  while (curr || stack.lenght > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
}
