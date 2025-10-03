// 215. Kth Largest Element in an Array
// Solved
// Medium
// Topics
// premium lock iconCompanies

// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?

var findKthLargest = function (nums, k) {
  const minHeap = new MinPriorityQueue();
  for (let num of nums) {
    minHeap.enqueue(num);
    if (minHeap.size() > k) {
      minHeap.dequeue();
    }
  }
  return minHeap.front();
};

findKthLargest([3, 2, 1, 5, 6, 4], 2); // 5
findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4); // 4
