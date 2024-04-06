//   Створити масив з трьох чисел. Змінити значення другого елемента масиву на 10.
const arr = [1, 2, 3];

arr[1] = 10;
console.log(arr);
// Створити масив із трьох рядків. Додати до масиву ще одну рядків.
const Arr = ["Chelsea", "Mudryk", "Ten"];
Arr[3] = "LW";
console.log(Arr);
// Створити скрипт який поверне суму всіх чисел в масиві.
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
// Створити масив з 5-ти чисел. Вивести на екран всі елементи масиву за допомогою циклу for
const Numbers = [1, 2, 3];

for (let i = 0; i < Numbers.length; i++) {
  console.log(Numbers[i]);
}
// Створити масив із 5-ти рядків. Вивести на екран кожен рядокз масиву, який містить більше 5-ти символів.
const names = ["Chelsea", "Liverpool", "Arsenal"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// Створити масив з 10-ти чисел. Знайти та вивести на екран максимальне значення з масиву.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let max = num[0];

for (let i = 1; i < num.length; i++) {
  if (num[i] > max) {
    max = num[i];
  }
}

console.log(max);
// Створити масив з 10-ти чисел. Знайти всі парні числа в масиві та вивести їх на екран.
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numb.length; i++) {
  if (numb[i] % 2 === 0) {
    console.log(numb[i]);
  }
}
