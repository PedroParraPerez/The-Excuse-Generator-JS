/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = ["before the class","right on time","when I finished","during my lunch","while I was praying"];

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

// Willy

// const UnArrayAleatorio1 = (array, array1, array2, array3) => {

//   let NumberRandom0 = Math.floor(Math.random() * array.length);

//   return console.log(`${array[NumberRandom0]} ${array1[NumberRandom0]} ${array2[NumberRandom0]} ${array3[NumberRandom0]}`);

// }

// UnArrayAleatorio1(who, action, what, when);
