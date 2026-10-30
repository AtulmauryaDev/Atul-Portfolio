// Build a max-heap in O(n) time using bottom-up heapification.
function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function parent(index) {
  return Math.floor((index - 1) / 2);
}

function leftChild(index) {
  return 2 * index + 1;
}

function rightChild(index) {
  return 2 * index + 2;
}

function siftDown(arr, start, length) {
  let index = start;
  while (leftChild(index) < length) {
    let largerChild = leftChild(index);
    const right = rightChild(index);

    if (right < length && arr[right] > arr[largerChild]) {
      largerChild = right;
    }

    if (arr[index] >= arr[largerChild]) break;
    swap(arr, index, largerChild);
    index = largerChild;
  }
}

function makeHeap(arr) {
  for (let index = Math.floor(arr.length / 2) - 1; index >= 0; index -= 1) {
    siftDown(arr, index, arr.length);
  }
  return arr;
}

// Retained as a helper for compatibility with the original project.
function reheapifyDown(arr, length) {
  siftDown(arr, 0, Math.min(length, arr.length));
  return arr;
}
