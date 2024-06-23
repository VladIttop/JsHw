"use strict";

const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");

console.log(`У списку ${items.length} категорії.`);

// Завдання 2

// В HTML є пустий список ul#ingredients.

// В JS є масив рядків.

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li, після чого вставить всі li за одну операцію в список ul.ingredients. Для створення DOM-вузлів використовуй document.createElement().
const ul = document.getElementById("ingredients");
for (const item of ingredients) {
  const newElement = document.createElement("li");
  newElement.textContent = item;
  ul.appendChild(newElement);
}

// Напиши скрипт для створення галереї зображень по масиву даних.

// В HTML є список ul#gallery.

// Використовуй масив об'єктів images для створення тегів img вкладених в li. Для створення розмітки використовуй шаблонні рядки і insertAdjacentHTML().

// Всі елементи галереї повинні додаватися в DOM за одну операцію вставки.
// Додай мінімальне оформлення галереї флексбоксами або грід через   css-класи.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.getElementById("gallery");

for (const item in images) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = images[item].url;
  img.alt = images[item].alt;
  img.style.width = 200 + "px";
  list.appendChild(li);
  li.appendChild(img);
}

// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.

// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу

let counterValue = 0;
const buttons = document.querySelectorAll("[data-action]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnAction = button.dataset.action;
    if (btnAction === "decrement") {
      counterValue--;
    } else if (btnAction === "increment") {
      counterValue++;
    }
    document.getElementById("value").innerText = counterValue;
  });
});

//* Напиши скрипт який, при наборі тексту в інпут input#name-input (подія
//* input), підставляє його поточне значення в span#name-output. якщо інпут
//* порожній, в спані повинен відображатися рядок 'незнайомець'.

const nameInput = document.getElementById("name-input");
const nameSpan = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    nameSpan.textContent = "незнайомець";
  } else {
    nameSpan.textContent = nameInput.value;
  }
});

// Напиши скрипт, який би при втраті фокуса на інпут, перевіряв його вміст на правильну кількість символів.
// Скільки символів має бути в інпут, вказується в його атрибуті data-length.
// Якщо введена відповідна кількість, то border інпут стає зеленим,   якщо неправильне - червоним.
// Для додавання стилів, використовуй CSS-класи valid і invalid.

const passwordInput = document.getElementById("validation-input");
const validation = function () {
  const passwordLength = passwordInput.dataset.length;
  const isValid = passwordInput.value.length >= passwordLength;

  if (isValid) {
    passwordInput.classList.add("valid");
    passwordInput.classList.remove("invalid");
  } else {
    passwordInput.classList.add("invalid");
    passwordInput.classList.remove("valid");
  }
};

passwordInput.addEventListener("blur", () => {
  validation();
});

// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value;
  textSpan.style.fontSize = `${fontSize}px`;
});