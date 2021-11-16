// let input = [3, 4, -1, 1];
// let input = [0, 2, 3, 4];
// let input = [0, 1, 2, 3];
// let input = [0,  4, 5];

let input = [-5, -6, 0, 0, 1, 2, 10, 11, 12];

const challenge3 = (input) => {
  const sortedArray = [...new Set(input)]
    .filter((i) => i > 0)
    .sort((a, b) => a - b);

  let arrayOfZeros = new Array(sortedArray.length).fill(0);

  let result = 0;

  sortedArray.map((el, index) => {
    if (el === 1 && input.includes(el + 1)) arrayOfZeros[index] = 0;
    else {
      if (
        (el != 1 &&
          input.includes(el + 1) &&
          index != sortedArray.length - 1) ||
        index === sortedArray.length - 1
      )
        arrayOfZeros[index] = 0;
      else {
        if (index === sortedArray.length - 1) arrayOfZeros[index] = 0;
        else {
          arrayOfZeros[index] = el;
        }
      }
    }
  });

  if (
    arrayOfZeros.filter((j) => j != 0).length === 0 &&
    sortedArray.includes(1)
  ) {
    result = sortedArray[sortedArray.length - 1] + 1;
  } else {
    if (
      arrayOfZeros.filter((j) => j != 0).length === 0 &&
      !sortedArray.includes(1)
    )
      result = 1;
    else result = arrayOfZeros.filter((i) => i != 0)[0] + 1;
  }

  return result;
};
let inputText = document.querySelector("#input");
inputText.textContent = input;
let result = document.querySelector("#lowest-positive-integer");
let res = challenge3(input);
console.log(res);
result.textContent = res;
