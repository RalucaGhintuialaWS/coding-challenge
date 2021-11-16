let input = "We're moving office at 09:15 to a25:49 25:49a 125:49 25:596 room 123:456 25:48 so we can hide away.";

const findHour = (input) => input.match(/[^(?!\d)\w]\d{2}:\d{2}[^(?!\d)\w]/gm);

console.log(findHour(input));

let inputText = document.querySelector(".input");
inputText.textContent = input;
let result = document.querySelector("#output_string");
let res = findHour(input);
result.textContent = res;
