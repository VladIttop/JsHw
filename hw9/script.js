//   Створити розмітку з двома текстовими полями та кнопкою. При натисканні на кнопку перевіряти, чи обидва поля містять значення, якщо так, то виводити повідомлення "Обидва поля заповнені", якщо ні - "Не всі поля заповнені".
const btnCheck = document.getElementById("btn-check");
btnCheck.addEventListener("click", () => {
  const inputCheck = document.querySelector(".input").value;
  const inputCheck2 = document.querySelector(".input2").value;

  if (inputCheck === "" || inputCheck2 === "") {
    alert("Не всі поля заповнені");
  } else {
    alert("Обидва поля заповнені");
  }
});
// Створити розмітку  з двома числовими полями та кнопкою. При натисканні на кнопку перевіряти, чи сума значень полів більша за 10, якщо так, то виводити повідомлення "Сума більша за 10", якщо ні - "Сума менша або дорівнює 10".
const number1 = document.querySelector(".number1");
const number2 = document.querySelector(".number2");
const buttonCheck = document.querySelector(".check");

buttonCheck.addEventListener("click", () => {
  const sum = Number(number1.value) + Number(number2.value);
  if (sum > 10) {
    alert("Сума більша за 10");
  } else {
    alert("Сума менша або дорівнює 10");
  }
});
// Створити розмітку  з текстовим полем та кнопкою. При натисканні на кнопку перевіряти, чи введений текст містить слово "JavaScript", якщо так, то виводити повідомлення "Текст містить слово JavaScript", якщо ні - "Текст не містить слово JavaScript
const btnCheckInclude = document.querySelector(".btn-check");

btnCheckInclude.addEventListener("click", () => {
  const inputInclude = document.getElementById("input").value;
  if (inputInclude.includes("JavaScript")) {
    alert("Текст містить слово JavaScript");
  } else {
    alert("Текст не містить слово JavaScript");
  }
});
// Створити розмітку  з формою з полями введення та кнопкою. При натисканні на кнопку перевіряти, чи введене число більше за 10 та менше за 20, якщо так, то виводити повідомлення "Число входить в діапазон від 10 до 20", якщо ні - "Число не входить в діапазон від 10 до 20".
const buttonCheckValue = document.getElementById("button--check");

buttonCheckValue.addEventListener("click", () => {
  const inputCheckValue = document.getElementById("input--check").value;
  const number = Number(inputCheckValue);
  if (number >= 10 && number < 20) {
    alert("Число входить в діапазон від 10 до 20");
  } else {
    alert("Число не входить в діапазон від 10 до 20");
  }
});
//
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const btnValidate = document.getElementById("btn-validate");

btnValidate.addEventListener("click", () => {
  if (name.length <! 3) {
    alert("Імя має мати більше ніж 3 букви");
  } else if (email.contains("@.")) {
    alert("Імя має містити @. ");
  } else if (password.length < 6) {
    alert("Імя має мати більше ніж 6 букв");
  }
});
