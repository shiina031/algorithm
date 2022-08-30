function insertSort(n: number, array: number[]) {
  for (let i = 0; i < n; i++) {
    let x = array[i];
    for (let j = i - 1; j >= 0; j--) {
      if (array[j] > x) {
        [array[j + 1], array[j]] = [array[j], array[j + 1]];
      } else {
        break;
      }
    }
    const array1 = [...array];
    console.log(array1);
  }
}
