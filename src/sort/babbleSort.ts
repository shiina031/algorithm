function babbleSort(n: number, array: number[]) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = n - 1; i < j; j--) {
      if (array[j - 1] > array[j]) {
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      }
    }
    const array1 = [...array];
    console.log(array1);
  }
}
