let bag = [
  [" ", 2, 0],
  ["A", 9, 1],
  ["B", 2, 3],
  ["C", 4, 2],
  ["D", 4, 2],
  ["E", 12, 1],
  ["F", 2, 4],
  ["G", 3, 2],
  ["H", 2, 4],
  ["I", 9, 1],
  ["J", 1, 8],
  ["K", 1, 5],
  ["L", 4, 1],
  ["M", 2, 3],
  ["N", 6, 1],
  ["O", 8, 1],
  ["P", 2, 3],
  ["Q", 1, 10],
  ["R", 6, 1],
  ["S", 4, 1],
  ["T", 6, 1],
  ["U", 4, 1],
  ["V", 2, 4],
  ["W", 2, 5],
  ["X", 1, 8],
  ["Y", 2, 4],
  ["Z", 1, 10],
];

let drawnLetters = []; //stores the 7 drawn tiles
let drawnLettersDetails = []; //stores the 7 drawn tiles with details
let inBag = bag.filter((tile) => tile[1] > 0);
const draw = (stillInBag) => {
  let resultBag = [];
  //executes 7 times
  for (var iteration = 1; iteration <= 7; iteration++) {
    var random = stillInBag[Math.floor(Math.random() * stillInBag.length)];
    stillInBag.map((tile) => {
      if (tile[0] === random[0]) tile[1] = tile[1] - 1;
    });

    //filter for availability = 0 <=> remove from bag once drawn
    stillInBag = stillInBag.filter((tile) => tile[1] > 0);
    resultBag = stillInBag;
    drawnLetters.push(random[0]);
    drawnLettersDetails.push(random);
  }
  inBag = resultBag;
};

//call  of the function draw
let call = draw(inBag);

let letterPoints = [
  [0, 11, 2],
  [0, 3, 2],
  [2, 6, 2],
  [2, 8, 2],
  [3, 0, 2],
  [3, 7, 2],
  [3, 14, 2],
  [6, 2, 2],
  [6, 6, 2],
  [6, 8, 2],
  [6, 12, 2],
  [8, 2, 2],
  [8, 6, 2],
  [8, 8, 2],
  [8, 12, 2],
  [7, 3, 2],
  [7, 11, 2],
  [11, 0, 2],
  [11, 7, 2],
  [11, 14, 2],
  [12, 6, 2],
  [12, 8, 2],
  [14, 11, 2],
  [14, 3, 2],
  [1, 5, 3],
  [1, 9, 3],
  [5, 1, 3],
  [5, 5, 3],
  [5, 9, 3],
  [5, 13, 3],
  [9, 1, 3],
  [9, 5, 3],
  [9, 9, 3],
  [9, 13, 3],
  [13, 5, 3],
  [13, 9, 3],
];

const letterScore = (boardPositionX, boardPositionY, letter) => {
  let res = 0;
  letterPoints.map((coordinates) => {
    if (coordinates[0] === boardPositionX && coordinates[1] === boardPositionY)
      res = res + coordinates[2] * letter[2];
  });
  return res;
};

let l = document.querySelector("#letter");
let x = document.querySelector("#x");
let y = document.querySelector("#y");

// let scoreFromLetter = letterScore(0,11,["D", 4, 2]); //D is in first line on the light blue left; should be double
// l.textContent = JSON.stringify(["D", 4, 2]);
// x.textContent = 0;
// y.textContent=11;

// let scoreFromLetter = letterScore(9, 1, ["E", 12, 1]); //E is on the scond last line on the dark blue right; should be triple
// l.textContent = JSON.stringify(["E", 12, 1]);
// x.textContent = 9;
// y.textContent=1;

let scoreFromLetter = letterScore(8, 8, ["F", 2, 4]); //F is on top right light blue of the center; should be double
l.textContent = JSON.stringify(["F", 2, 4]);
x.textContent = 8;
y.textContent = 8;

let final1 = document.querySelector("#output_string1");
let res1 = drawnLetters;
final1.textContent = res1;

let final2 = document.querySelector("#output_string2");
let res2 = scoreFromLetter;
final2.textContent = res2;
