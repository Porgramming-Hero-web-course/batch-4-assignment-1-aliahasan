function removeDuplicates(array: number[]): number[] {
  let newArray: number[] = [];
  for (let number of array) {
    if (!newArray.includes(number)) {
      newArray.push(number);
    }
  }
  return newArray;
}
const numberArray = [1, 2, 2, 3, 4, 4, 5];
const output2 = removeDuplicates(numberArray);
