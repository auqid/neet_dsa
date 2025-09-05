// Search a 2D Matrix

// You are given an m x n 2-D integer array matrix and an integer target.

//     Each row in matrix is sorted in non-decreasing order.
//     The first integer of every row is greater than the last integer of the previous row.

// Return true if target exists within matrix or false otherwise.

// Can you write a solution that runs in O(log(m * n)) time?

// Example 1:

// Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

// Output: true

// brute force solution

function searchTwoD(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === target) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  searchTwoD(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ],
    10
  )
);

//binary search

function binarySearch2D(matrix, target) {
  const ROWS = matrix.length;
  const COLUMNS = matrix[0].length;

  let top = 0;
  let bottom = ROWS - 1;

  while (top <= bottom) {
    const row = Math.floor((top + bottom) / 2);
    if (target > matrix[row][COLUMNS - 1]) {
      top = row + 1;
    } else if (target < matrix[row][0]) {
      bottom = row - 1;
    } else {
      break;
    }
  }
  if (top > bottom) {
    return false;
  }
  const row = Math.floor((top + bottom) / 2);
  let l = 0;
  let r = COLUMNS - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if (target > matrix[row][mid]) {
      l = mid + 1;
    } else if (target < matrix[row][mid]) {
      r = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

console.log(
  binarySearch2D(
    [
      [1, 2, 4, 8],
      [10, 11, 12, 13],
      [14, 20, 30, 40],
    ],
    40
  )
);
