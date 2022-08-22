/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//arrays:

window.onload = () => {
  document.querySelector("#listener").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

let excuseGenerator = () => {
  let who = [" a dog", " my granma", "a turtle", " a bird", " some nerd"];
  let action = ["eat", "pissed", "crushed", "broked", "stole my"];
  let things = ["my notes", "shoes", "heart", "dirty clothes"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  //random funtions

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let thingsIndex = Math.floor(Math.random() * things.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return (
    who[whoIndex] +
    " " +
    action[actionIndex] +
    " " +
    things[thingsIndex] +
    " " +
    when[whenIndex]
  );
};
