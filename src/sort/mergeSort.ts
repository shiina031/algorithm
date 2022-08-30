let count = 0;

function merge(array1: number[], array2: number[]) {
  const nl = array1.length;
  const nr = array2.length;

  array1[nl] = 1000000001;
  array2[nr] = 1000000001;

  let sortedArray = [];

  let lIndex = 0;
  let rIndex = 0;

  for (let i = 0; i < nl + nr; i++) {
    if (array1[lIndex] < array2[rIndex]) {
      sortedArray.push(array1[lIndex]);
      lIndex++;
    } else {
      sortedArray.push(array2[rIndex]);
      rIndex++;
      count++;
    }
  }
  return sortedArray;
}

function mergeSort(array: number[]) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let left: number[] = mergeSort(array.slice(0, mid));
  let right: number[] = mergeSort(array.slice(mid));
  return merge(left, right);
}

function executeMergeSort(array: number[], length: number) {
  array = mergeSort(array);
  console.log(array);
  console.log(count);
}

export { executeMergeSort };
