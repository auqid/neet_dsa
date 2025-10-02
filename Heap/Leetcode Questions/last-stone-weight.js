// 1046. Last Stone Weight
// Solved
// Easy
// Topics
// premium lock iconCompanies
// Hint

// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

//     If x == y, both stones are destroyed, and
//     If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.

// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.
var lastStoneWeight = function (stones) {
  const maxHeap = new MaxPriorityQueue();
  for (let num of stones) {
    maxHeap.push(num);
  }

  while (maxHeap.size() > 1) {
    let stone1 = maxHeap.dequeue();
    let stone2 = maxHeap.dequeue();
    if (stone1 !== stone2) {
      let stone3 = stone1 - stone2;
      maxHeap.enqueue(stone3);
    }
  }
  return maxHeap.size() === 1 ? maxHeap.dequeue() : 0;
};
