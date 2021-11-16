let input = "Lazy brown fox jumped over a dog";
const middleLetter = (input) => {
  let output = [];
  input
    .split(" ")
    .map((word) =>
      word.length % 2 === 1
        ? output.push(
            word.slice(
              Math.floor(word.length / 2),
              Math.floor(word.length / 2 + 1)
            )
          )
        : output.push(word.slice(word.length / 2 - 1, word.length / 2 + 1))
    );
  return output.join(" ");
};

let inputText = document.querySelector("#input");
inputText.textContent = input;
let result = document.querySelector("#output_string");
let res = middleLetter(input);
result.textContent = res;

