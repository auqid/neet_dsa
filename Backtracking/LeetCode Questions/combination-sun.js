// 39. Combination Sum
// Medium
// Topics
// premium lock iconCompanies

// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

function combinationSum(candidates, target) {
  const result = [];
  const curr = [];

  function dfs(i, curr, total) {
    if (total === target) {
      result.push([...curr]);
      return;
    }
    if (total > target || i >= candidates.length) {
      return;
    }
    // include the number
    curr.push(candidates[i]);
    dfs(i, curr, total + candidates[i]);
    curr.pop();
    // exclude the number
    dfs(i + 1, curr, total);
  }

  dfs(0, curr, 0);
  return result;
}

combinationSum([2, 3, 6, 7], 7); // [[2,2,3],[7]]
combinationSum([2, 3, 5], 8); // [[2,2,2,2],[2,3,3],[3,5]]
