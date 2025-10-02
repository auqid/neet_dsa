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
  pop() {
    if (this.heap.length === 1) {
      return null;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    const res = this.heap[1];
    this.heap[1] = this.heap.pop();
    let i = 1;
    //percolate down
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i + 1] < this.heap[2 * i] &&
        this.heap[i] > this.heap[2 * i + 1]
      ) {
        //swap right child
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = temp;
        i = 2 * i + 1;
      } else if (this.heap[i] > this.heap[2 * i]) {
        //swap left child
        let temp = this.heap[i];
        this.heap[i] = this.heap[2 * i];
        this.heap[2 * i] = temp;
        i = 2 * i;
      } else {
        break;
      }
    }
    return res;
  }
  heapify(arr) {
    this.heap = [0, ...arr];
    let curr = Math.floor((this.heap.length - 1) / 2);
    while (curr > 0) {
      let i = curr;
      while (2 * i < this.heap.length) {
        if (
          2 * i + 1 < this.heap.length &&
          this.heap[2 * i + 1] < this.heap[2 * i] &&
          this.heap[i] > this.heap[2 * i + 1]
        ) {
          //swap right child
          let temp = this.heap[i];
          this.heap[i] = this.heap[2 * i + 1];
          this.heap[2 * i + 1] = temp;
          i = 2 * i + 1;
        } else if (this.heap[i] > this.heap[2 * i]) {
          //swap left child
          let temp = this.heap[i];
          this.heap[i] = this.heap[2 * i];
          this.heap[2 * i] = temp;
          i = 2 * i;
        } else {
          break;
        }
      }

      curr--;
    }
  }
}

const heap = new Heap();

heap.heapify([3, 1, 5, 2, 4]); // [1,2,5,3,4]
console.log(heap); // [0,1,2,5,3,4]
