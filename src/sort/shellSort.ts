function shell(array: number[], length: number, interval: number) {
  let num_of_move = 0;
  for (let i = interval; i < length; i++) {
    let x = array[i];
    for (let j = i - interval; j >= 0; j -= interval) {
      if (array[j] > x) {
        [array[j + interval], array[j]] = [array[j], array[j + interval]];
        num_of_move++;
      } else {
        break;
      }
    }
  }
  console.log(num_of_move);
}

function shellSort(array: number[], length: number, intervalArray: number[]) {
  for (let i = 0; i < intervalArray.length; i++) {
    shell(array, length, intervalArray[i]);
  }
  console.log(array);
}

export { shellSort };
