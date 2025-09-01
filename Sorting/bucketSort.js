// Bucket Sort
function bucketSort(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);
  const range = max - min + 1;
  const bucketCount = new Array(range).fill(0);
  for (let num of array) {
    bucketCount[num - min]++;
  }
  let i = 0;
  for (let n = 0; n < bucketCount.length; n++) {
    for (let j = 0; j < bucketCount[n]; j++) {
      array[i] = n + min;
      i++;
    }
  }
  return array;
}

console.log(bucketSort([3, 6, 2, 8, 7, 4, 1, 5])); // [1,2,3,4,5,6,7,8]
