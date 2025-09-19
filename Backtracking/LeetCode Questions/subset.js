function subset(nums) {
  const res = [];
  const subset = [];
  function dfs(nums, subset, i, res) {
    if (i >= nums.length) {
      return res.push(subset);
    }
    subset.push(nums[i]);
    dfs(nums, subset, i + 1, res);
    subset.pop();
    dfs(nums, subset, i + 1, res);
  }
  dfs(nums, subset, 0, res);
  return res;
}

console.log(subset([1, 2, 3])); // [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
// Output: [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
// Explanation: The solution set must not contain duplicate subsets. The subsets can be in any order.
// Example 1:
console.log(subset([0])); // [[], [0]]
// Output: [[], [0]]
// Explanation: The only possible subset is the empty set and the set containing 0.
// Example 2:
console.log(subset([1, 2, 2])); // [[], [2], [2, 2], [1], [1, 2], [1, 2, 2]]
// Output: [[], [2], [2, 2], [1], [1, 2], [1, 2, 2]]
// Explanation: The solution set must not contain duplicate subsets. The subsets can be in any order.
