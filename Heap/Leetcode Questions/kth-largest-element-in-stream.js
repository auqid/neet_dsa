// 703. Kth Largest Element in a Stream
// Easy
// Topics
// premium lock iconCompanies

// You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.

// You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.

// Implement the KthLargest class:

//     KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
//     int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.

class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.minHeap = new MinPriorityQueue();
    this.k = k;

    for (const num of nums) {
      this.minHeap.enqueue(num);
    }

    while (this.minHeap.size() > k) {
      this.minHeap.dequeue();
    }
  }

  /**
   * @param {number} val
   * @return {number}
   */
  add(val) {
    this.minHeap.enqueue(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.dequeue();
    }
    return this.minHeap.front();
  }
}
