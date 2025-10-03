// 973. K Closest Points to Origin
// Solved
// Medium
// Topics
// premium lock iconCompanies

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in)

var kClosest = function (points, k) {
  const minHeap = new MinPriorityQueue((x) => x[0]);
  for (let [x, y] of points) {
    let dist = x ** 2 + y ** 2;
    minHeap.enqueue([dist, x, y]);
  }
  const res = [];
  for (let i = 0; i < k; i++) {
    let [dist, x, y] = minHeap.dequeue();
    res.push([x, y]);
  }
  return res;
};

kClosest(
  [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  2
); // [[3,3],[-2,4]]
