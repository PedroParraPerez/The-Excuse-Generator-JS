const excuseDOM = document.querySelector("#excusa");

window.onload = function() {
  excuseDOM.innerHTML = excuseGenerator(dataset);
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let dataset = [who, action, what, when];

const RandomIndex = arr => Math.floor(Math.random() * arr.length);
const RandomItem = (arr, i) => arr[i];
const GetString = arr => `${RandomItem(arr, RandomIndex(arr))} `;
const excuseGenerator = arr => {
  let str = "";
  for (let d of arr) {
    str += GetString(d);
  }
  return str;
};
