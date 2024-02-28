// Створити розмітку з кнопкою та текстовим полем. За допомогою JavaScript отримати доступ до кнопки та текстового поля за їх ідентифікаторами та змінити текст на кнопці на значення текстового поля.
const input = document.getElementById("input");
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  button.innerText = input.value;
});
// Створити розмітку  зі списком елементів. За допомогою JavaScript отримати доступ до першого елемента списку та змінити його вміст на новий текст.
let list = document.getElementById("list");
list.firstElementChild.innerText = "Hello";
