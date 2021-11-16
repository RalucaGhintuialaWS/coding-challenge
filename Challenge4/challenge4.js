// let input = [
//   [0, 1],
//   [0, 0],
//   [1, 0],
// ];
let input = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 0, 0],
  [1, 1, 0],
];
// let input = [
//   [0, 0, 0],
//   [1, 1, 0],
//   [1, 1, 0],
//   [1, 1, 0],
// ];
// let input = [
//   [0, 0, 1],
//   [0, 0, 1],
//   [1, 0, 0],
// ];
const challenge41 = (input) => {
  let result = 0;
  const oneArray = [];
  let m = input[0].length;
  let n = input.length;
  input.map((array) => array.map((line) => oneArray.push(line)));

  if (oneArray[0] != 0 || oneArray.slice(-1)[0] != 0) result = 0;
  for (let i = 0; i < oneArray.length; i++) {
    if (oneArray[i] === 0 && oneArray[i + 1] === 0 && (i + 2) % m != 0) {
      i++;
    }
    if (oneArray[i] === 0 && oneArray[i + 1] === 0 && (i + 2) % m === 0) {
      if (i >= oneArray.length - m && i < oneArray.length) {
        while (i >= oneArray.length - m) {
          if (i === oneArray.length - 1) {
            result++;
            break;
          } else {
            if (oneArray[i] === 0) {
              i++;
            } else {
              break;
            }
          }
        }
      }
      let j = i + m + 1;
      while (j < oneArray.length) {
        if (j === oneArray.length - 1) {
          result++;

          break;
        } else {
          if (oneArray[j] === 0) {
            j = j + m;
          } else {
            result = result;
            break;
          }
        }
      }
      i++;
    }

    if (oneArray[i] === 0 && oneArray[i + 1] != 0) {
      i = i + m;
    }
  }
  console.log(result);
  return result;
};

const challenge42 = (input) => {
  let result = 0;
  const oneArray = [];
  let m = input[0].length;
  let n = input.length;
  input.map((array) => array.map((line) => oneArray.push(line)));

  if (oneArray[0] != 0 || oneArray.slice(-1)[0] != 0) result = 0;
  for (let i = 0; i < oneArray.length; i++) {
    if (i < oneArray.length - m) {
      if (oneArray[i] === 0 && oneArray[i + m] === 0) {
        i = i + m;
      } else {
        i++;
      }
    } else {
      while (i >= oneArray.length - m) {
        if (i === oneArray.length - 1) {
          result++;
          break;
        } else {
          if (oneArray[i] === 0) {
            i++;
          } else {
            break;
          }
        }
      }
    }
  }
  console.log(result);
  return result;
};

let inputText = document.querySelector("#input");
input.map((i) => (inputText.innerHTML += `<p style="margin:0">${i}</p>`));
let result = document.querySelector("#number-of-ways");
let res1 = challenge41(input);
let res2 = challenge42(input);
result.textContent = res2 + res1;
