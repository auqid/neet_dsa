// Binary Search (Search an Array)

// Binary search is an efficient way of searching for elements within a sorted array. Typically we are given an array, and a target element to search for.

// The idea behind binary search is similar to how we would search for a word in a dictionary. We would open the dictionary in the middle and determine if the word we are looking for is in the left or right half. We would then repeat this process until we find the word or determine that it doesn't exist in the dictionary.

// Similarly, binary search divides a given array by the middle index, called mid and compares the value at mid to the target value. If the target is greater than the mid value, we will search the right half of the array. If the target is less than the mid value, we will search the left half of the array.

// In interviews and algorithmic problems, there are two common variations of binary search problems:

//     Search Array - a sorted array, and a target is given and the task is to determine if the target is found in the array.
//     Search Range - a range of numbers is given rather than an array, without a specific target.
// Time and Space Complexity

// The work being done is very similar to that of the merge-sort algorithm where we are dividing the array in half until we reach an array of size 11.

// Thus we end up with the same formula where xx is the number of times we can divide the array in half until we reach an array of size 11.

// 1=n/2x1=n/2x

// After solving for xx, we get x=log2(n)x=log2​(n).

// Thus, the time complexity for binary search will be O(log n)O(log n).

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target > arr[mid]) {
      left = mid + 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
