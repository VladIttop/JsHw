"use strict";
// Напишіть скрипт зміни кольору кнопки при натискані на неї.
let btn = document.getElementById("color--btn");

function changeColor() {
  btn.style.backgroundColor = "yellow";
}
btn.addEventListener("click", changeColor);
// Напиши скрипт реалізації додавання класу до заголовка при кліку на кнопку ‘Додати стилі’.
const button = document.querySelector(".btn");
const heading = document.querySelector(".heading");

button.addEventListener("click", () => {
  heading.classList.toggle("h2");
});
// Написати програму яка буде виводити данні введені в інпут в інтерфейс сторінки.
const input = document.getElementById("input").value;
const p = document.getElementById("p");

p.textContent = "Value: " + input;