function mergeSort(arr, l, r) {
  if (l < r) {
    // base case when l === r which means we have only 1 element left
    // l is the start of the array and r is the end of the array
    // example for [5,1,2,4] l will be = 0 and r = 3;

    // Find the middle point of the array
    //  for [5,1,2,4] m will be = 0+3/2 = 1 (since we are using floor)
    let m = Math.floor((l + r) / 2);

    mergeSort(arr, l, m); // sort left half (divide)
    mergeSort(arr, m + 1, r); // sort right half(divide)
    merge(arr, l, m, r); // merge sorted halfs(conquer)
  }
  return arr;
}
// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
function merge(arr, l, m, r) {
  // Find lengths of two subarrays to be merged
  let length1 = m - l + 1;
  let length2 = r - m;
  // Create temp arrays
  let L = new Array(length1);
  let R = new Array(length2);
  // Copy the sorted left & right halfs to temp arrays
  for (let i = 0; i < length1; i++) {
    L[i] = arr[l + i];
  }
  for (let j = 0; j < length2; j++) {
    R[j] = arr[m + 1 + j];
  }
  // initial indexes of left and right sub-arrays
  let i = 0; // index for left
  let j = 0; // index for right
  let k = l; // Initial index of merged subarray array

  // Merge the two sorted halfs leto the original array
  while (i < length1 && j < length2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }
  // One of the halfs will have elements remaining
  while (i < length1) {
    arr[k] = L[i];
    i++;
    k++;
  }
  while (j < length2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}
let arr = [38, 27, 43, 3, 9, 82, 10];
mergeSort(arr, 0, arr.length - 1);
console.log(arr);
