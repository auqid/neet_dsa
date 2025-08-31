// Quick Sort

// Quick sort is another divide and conquer algorithm used for sorting, similar to merge sort.
// Implementation

// The idea behind quicksort is to pick an index, which is called the pivot. We then partition the array such that every value to the left is less than or equal to the pivot and every value to the right is greater than the pivot.
// Picking a pivot value

// There are several ways to pick a pivot value. Some of the common ways are:

//     Pick the first index
//     Pick the last index
//     Pick the median (pick the first, last and the middle value and find their median and perform the split at the median)
//     Pick a random pivot

// Ideally we can pick a pivot that would divide the array into two roughly equal halves. This would result in the most efficient sorting scenario.

// // For simplicity, in this lesson we will pick the last element as the pivot.

function quickSort(array, s, e) {
  if (e - s + 1 >= 0) {
    return array;
  }

  const pivot = array[e];
  let left = s; // pointer for left side
  for (let i = s; i < e; i++) {
    if (array[i] < pivot) {
      let temp = array[i];
      array[i] = array[left];
      array[left] = temp;
      left++;
    }
  }
  array[e] = array[left];
  array[left] = pivot;
  quickSort(array, s, left - 1);
  quickSort(array, left + 1, e);
}
