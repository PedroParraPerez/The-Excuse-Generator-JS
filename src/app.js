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
// Dos formas de hacer el ejercicio, la primera "UnArrayAleatorio" con la imposibilidad de realizar testeos de la funcion ya que la funcion tiene dos funciones asignadas
// La segunda forma, dividimos la funcion en dos funciones (Una para cada tarea) de tal forma que podremos realizar testeos.
// Siempre tenemos que tratar que una funcion tenga como trabajo realziar UNA sola funcion.

const UnArrayAlea = (array) => {
  let NumberRandom0 = Math.floor(Math.random() * array.length);

  return array[NumberRandom0];
};

console.log(
  `${UnArrayAlea(who)} ${UnArrayAlea(action)} ${UnArrayAlea(
    what
  )} ${UnArrayAlea(when)}`
);

const RandomIndex = (arr) => Math.floor(Math.random() * arr.length);
const RandomItem = (arr, i) => arr[i];

console.log(
  `${RandomItem(who, RandomIndex(who))} ${RandomItem(
    action,
    RandomIndex(action)
  )} ${RandomItem(what, RandomIndex(what))} ${RandomItem(
    when,
    RandomIndex(when)
  )}`
);
