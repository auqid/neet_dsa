// 875. Koko Eating Bananas
// Solved
// Medium
// Topics
// premium lock iconCompanies

// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.

// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.

// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.

// Return the minimum integer k such that she can eat all the bananas within h hours.

function minEatingSpeed(piles, h) {
  let l = 0;
  let r = Math.max(...piles);
  let res = r;
  while (l <= r) {
    const k = Math.floor((l + r) / 2);
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / k);
    }
    if (hours <= h) {
      res = k;
      r = k - 1;
    } else {
      l = k + 1;
    }
  }
  return res;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
