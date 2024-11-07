function sumArray(arr: number[]): number {
  let total = 0;
  for (let num of arr) {
    total = total + num;
  }
  return total;
}
const myArray = [1, 2, 3, 4, 5];
const output = sumArray(myArray);
