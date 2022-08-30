function selectSort(n: number, array: number[]) {
  for (let i = 0; i < n - 1; i++) {
    let minV = array[i];
    let index = i;
    for (let j = i + 1; j < n; j++) {
      if (array[j] < minV) {
        minV = array[j];
        index = j;
      }
    }
    [array[i], array[index]] = [array[index], array[i]];
    const array1 = [...array];
    console.log(array1);
  }
}
