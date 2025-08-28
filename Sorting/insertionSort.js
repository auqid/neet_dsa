// Insertion Sort - Insert a value into a sorted array, assume the first element of array is sorted;

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
      console.log(arr, "sorting inside loop");
    }
  }
  console.log(arr);
}

insertionSort([2, 3, 4, 1, 5]);
