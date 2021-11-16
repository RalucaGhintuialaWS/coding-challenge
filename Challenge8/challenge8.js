let input = "152632";

let letters = ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
// let letters = ["2", "3", "4", "5", "6", "7", "8", "9"];

let lettersFromDigit = [];
input.split("").map((digit) => {
  var group = letters[parseInt(digit - 2)];
  lettersFromDigit.push(group); //[abc, def]
});

//compute letters from input
const lettersFromDigitFunction = (input) => {
  var result = [];
  input.split("").map((digit) => {
    var group = letters[parseInt(digit - 2)];
    result.push(group);
  });
  return result;
};

//take all combinations of 3 from 2 digit inputs
const take2 = (lettersFromDigit) => {
  let arrToStartFrom = [];
  let first = lettersFromDigit[lettersFromDigit.length - 2]; //abc
  let second = lettersFromDigit[lettersFromDigit.length - 1]; //def

  let stringOfTwo = "";
  first.split("").map((letterFirst) => {
    second.split("").map((letterSecond) => {
      stringOfTwo = letterFirst.concat(letterSecond);
      arrToStartFrom.push(stringOfTwo);
    });
  });

  return arrToStartFrom;
};

//combines group of letters with array of groups
const combine2 = (group, array) => {
  var result = [];

  group.split("").map((letterFromGroup) => {
    array.map((letterOrGroup) => {
      let string = letterFromGroup.concat(letterOrGroup);
      result.push(string);
    });
  });

  return result;
};

let arrToStartFrom = [];

arrToStartFrom = take2(lettersFromDigit);

const letter_combinations = (input, inputLength) => {
  var result = [];

  if (inputLength === 2) {
    result = [...result, ...arrToStartFrom];
  } else {
    let arrayForRecursive = arrToStartFrom;
    let inputToComputeFurther = input.slice(0, -2);

    let counter = 0;
    while (inputToComputeFurther.length != 0) {
      if (counter === 0) {
        let group = lettersFromDigitFunction(
          inputToComputeFurther.slice(-1)
        )[0];
        result = combine2(group, arrayForRecursive);
      } else {
        let group = lettersFromDigitFunction(
          inputToComputeFurther.slice(-1)
        )[0];

        result = combine2(group, result);
      }

      counter++;
      inputToComputeFurther = inputToComputeFurther.slice(0, -1); //delete last character after computing it
    }
  }

  return result;
};


let inputText = document.querySelector(".input");
inputText.textContent = input;
let result = document.querySelector("#output_string");
let res = letter_combinations(input, input.length);
result.textContent = res;
