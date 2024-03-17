const open = document.querySelector('[data-action="open-modal"]');
const modal = document.querySelector(".js-backdrop");
const close = document.querySelector('[data-action="close-modal"]');
const body = document.body;

open.addEventListener("click", () => {
  body.classList.toggle("show-modal");
});

close.addEventListener("click", () => {
  body.classList.remove("show-modal");
});

modal.addEventListener("click", () => {
  body.classList.remove("show-modal");
});

//Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.
const input = document.getElementById("name-input");
let text = document.getElementById("name-output");
input.addEventListener("input", () => {
  if (text.value === "") {
    text.textContent = "незнайомець";
  } else {
    text.textContent = input.value;
  }
});
// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
const inputCheck = document.getElementById("validation-input");
inputCheck.addEventListener("blur", () => {
  if (inputCheck.value.length === 6) {
    inputCheck.classList.remove("invalid");
    inputCheck.classList.toggle("valid");
  } else {
    inputCheck.classList.remove("valid");
    inputCheck.classList.toggle("invalid");
  }
});
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size.
const inputChange = document.getElementById("font-size-control");
let textChange = document.getElementById("text");
inputChange.addEventListener("input", () => {
  textChange.style.fontSize = inputChange.value + "px";
});

