class Heap {
  constructor() {
    this.heap = new Array(0);
    this.heap.push(0);
  }
  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 1 && this.heap[i] < this.heap[Math.floor(i / 2)]) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = temp;
      i = Math.floor(i / 2);
    }
  }
}
