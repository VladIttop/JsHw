// 1. Напиши скрипт який при кліку на кнопку буде виводити на екран повідомлення “Hello World!”. Використовуй колбек в вигляді стрілки

// const btnOne = document.querySelector(".btn--one");
// const showMessage = () => {
//   alert("Hello World!");
// };
// btnOne.addEventListener("click", showMessage);
// Створи програму, яка генерує випадкове число від 1 до 100. Користувач повинен вгадати число, введенням його в текстове поле. При кліку на кнопку "Перевірити" програма повинна повідомити користувача, чи є їх відповідь правильною.2
const generatedNumber = Math.floor(Math.random() * 100) + 1;
const guessField = document.getElementById("guessField");
let guessResult = document.getElementById("guessResult");
console.log(generatedNumber);
const checkGuess = function () {
  if (Number(guessField.value) === generatedNumber) {
    guessResult.innerHTML = `Правильно число було: ${generatedNumber}`;
  }
  if (Number(guessField.value) !== generatedNumber) {
    guessResult.innerHTML = `Не правильно число було: ${generatedNumber}`;
  }
};
// Створи програму, яка відображає повідомлення про те, скільки разів користувач клікнув на сторінці.

let clicker = 0;
const clickerMessage = document.getElementById("counter");

document.addEventListener("click", () => {
  clicker++;
  clickerMessage.innerHTML = `Кількість кліків: ${clicker}`;
});
// Напиши функцію, яка приймає масив чисел і колбек-функцію. Функція повинна застосовувати колбек-функцію до кожного елементу масиву та повертати новий масив, що містить результати застосування колбек-функції до кожного елементу.
const applyCallbackToEachElement = (arr, callback) => {
  const newArray = [];

  for (const num of arr) {
    const result = callback(num);
    newArray.push(result);
  }

  return newArray;
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); // [1, 4, 9, 16, 25]

// Розрахунок дисконтної ціни
// Створіть функцію, яка розраховує дисконтну ціну на товар з урахуванням знижки. Функція повинна приймати вартість товару та відсоток знижки як аргументи. Використайте стрілкову функцію та колбек.
const calculateDiscountedPrice = (price, discount, callback) => {
  const discountedPrice = price - (price * discount) / 100;
  callback(discountedPrice);
};

const showDiscountedPrice = (discountedPrice) => {
  console.log(`Знижка: ${discountedPrice}`);
};

calculateDiscountedPrice(100, 10, showDiscountedPrice); // Discounted price: 90
