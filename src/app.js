/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];

const UnArrayAleatorio = (word0, word1, word2, word3) => {

  let NumberRandom0 = Math.floor(Math.random() * word0.length);
  let NumberRandom1 = Math.floor(Math.random() * word1.length);
  let NumberRandom2 = Math.floor(Math.random() * word2.length);
  let NumberRandom3 = Math.floor(Math.random() * word3.length);

  return console.log(
    `${word0[NumberRandom0]} ${word1[NumberRandom1]} ${word2[NumberRandom2]} ${word3[NumberRandom3]}`
  );
};

UnArrayAleatorio(who, action, what, when);

// OPTIMIZATION ()

const UnArrayAleatorio1 = (word0, word1, word2, word3) => {
  let NumberRandom = Math.floor(Math.random() * word3.length);

  return console.log(
    `${word0[NumberRandom]} ${word1[NumberRandom]} ${word2[NumberRandom]} ${word3[NumberRandom]}`
  );
};

UnArrayAleatorio1(who, action, what, when);
