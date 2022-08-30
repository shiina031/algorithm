let count = 0;

function quickSort(array: number[], leftIndex: number, right: number) {
  if (leftIndex + 1 >= right) return;
  let pivot = array[right - 1];
  let insertIndex = leftIndex;
  for (let i = leftIndex; i < right - 1; i++) {
    if (array[i] < pivot) {
      [array[i], array[insertIndex]] = [array[insertIndex], array[i]];
      insertIndex++;
      count++;
    }
  }
  [array[right - 1], array[insertIndex]] = [
    array[insertIndex],
    array[right - 1]
  ];
  quickSort(array, leftIndex, insertIndex);
  quickSort(array, insertIndex + 1, right);
}

function executeQuickSort(array: number[], length: number) {
  quickSort(array, 0, length);
  console.log(count);
  console.log(array);
}

export { executeQuickSort };
