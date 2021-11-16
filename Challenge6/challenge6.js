// let input = "ddsodddd"; // 4
// let input = "iiisdoso"; //  8,64
// let input = "aaaa"; // -
// let input = "aaaaao"; // 0
// let input = "siizzzo"; // 2
// let input = "oooio"; // 0,0,0,1

const parseDeadfish = (input) => {
  let output = [0];
  input
    .split("")
    .map((letter) =>
      letter === "i"
        ? output[output.length - 1]++
        : letter === "d"
        ? output[output.length - 1]--
        : letter === "s"
        ? (output[output.length - 1] = Math.pow(output[output.length - 1], 2))
        : letter === "o"
        ? output.push(output[output.length - 1])
        : ""
    );
  return output.slice(0, -1);
};

let inputText = document.querySelector("#input");
inputText.textContent = input;
let result = document.querySelector("#output_string");
let res = parseDeadfish(input);
result.textContent = res;
