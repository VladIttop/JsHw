const drinkSelect = document.getElementById("drinkSelect");
let text = document.getElementById("selectedDrinkMessage");

drinkSelect.addEventListener("change", function () {
  switch (drinkSelect.value) {
    case "coffee":
      text.innerText = "Ви обрали каву!";
      break;
    case "tea":
      text.innerText = "Ви обрали чай!";
      break;
    case "juice":
      text.innerText = "Ви обрали сік!";
      break;
    default:
      text.innerText = "Виберіть напій!";
      break;
  }
});

// Створити розмітку  з полем введення, що приймає рядок та кнопкою. При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.), виводити відповідне повідомлення про робочий день або вихідний.
const dayInput = document.getElementById("day--input");
const btnCheck = document.getElementById("btn--check");

btnCheck.addEventListener("click", () => {
  switch (dayInput.value.toLowerCase()) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
      alert("Це робочий день.");
      break;
    case "субота":
    case "неділя":
      alert("Це вихідний день.");
      break;
    default:
      alert("Недійсний день.");
  }
});
// Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.
const numberInput = document.getElementById("number");
const checkBtn = document.getElementById("check--number");

checkBtn.addEventListener("click", () => {
  switch (+numberInput.value) {
    case 1:
    case 2:
    case 11:
      alert("Зима");
      break;

    case 3:
    case 4:
    case 5:
      alert("Весна");
      break;

    case 6:
    case 7:
    case 8:
      alert("Літо");
      break;

    case 9:
    case 10:
    case 11:
      alert("Осінь");
      break;

    default:
      alert("Введіть правильну властивість");
      break;
  }
});
//Створити розмітку  з полем введення, що приймає номер місяця та кнопкою. При натисканні на кнопку виводити кількість днів у цьому місяці.
const numberMonth = document.getElementById("number--month");
const monthCheck = document.getElementById("month--check");

monthCheck.addEventListener("click", () => {
  switch (+numberMonth.value) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 9:
    case 11:
      alert("31");
      break;

    case 4:
    case 6:
    case 10:
      alert("30");
      break;
    case 2:
      alert("у невисокосні роки – 28, у високосні роки – 29");
      break;
    default:
      alert("Введіть правильну ");
      break;
  }
});
//   Створити розмітку  з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою. При натисканні на кнопку виводити відповідне повідомлення про дію: якщо це "червоний" - "стоп", якщо "зелений" - "йти", якщо "жовтий" - "чекати".
const colorInput = document.getElementById("color--input");
const colorBtn = document.getElementById("color--check");

colorBtn.addEventListener("click", () => {
  switch (colorInput.value) {
    case "зелений":
      alert("йди!");
      break;

    case "жовтий":
      alert("зачекай!");
      break;

    case "червоний":
      alert("стоп!");
      break;

    default:
      alert("Введіть правильну властивість")
      break;
  }
});
// Створити розмітку  з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій: "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами. Користувач повинен бути попереджений про можливість ділення на нуль.
document.querySelector('button').addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const result = document.getElementById("result");

  switch (operation) {
      case "+":
          result.innerText = `Результат: ${num1 + num2}`;
          break;
      case "-":
          result.innerText = `Результат: ${num1 - num2}`;
          break;
      case "*":
          result.innerText = `Результат: ${num1 * num2}`;
          break;
      case "/":
          if (num2 === 0) {
              result.innerText = "Помилка: ділення на нуль!";
          } else {
              result.innerText = `Результат: ${num1 / num2}`;
          }
          break;
      default:
          result.innerHTML = "Невідома операція!";
  }
});
