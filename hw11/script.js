"use strict";
// Вивести на екран всі числа від 1 до 10 за допомогою циклу while.
let i = 0;
while (i < 10) {
  i++;
  console.log(i);
}
// Вивести на екран всі парні числа від 2 до 20 за допомогою циклу for. Якщо число парне, пропустити його за допомогою continue.
for (let i = 2; i < 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}
// Вивести на екран таблицю множення числа 7 за допомогою циклу for.
for (let i = 1; i < 10; i++) {
  console.log(`7 * ${i} = ${7 * i}`);
}
//   Створити масив з числами від 1 до 5. Вивести на екран кожен елемент масиву за допомогою циклу while
const arr = [1, 2, 3, 4, 5];
let o = 0;

while (o < arr.length) {
  console.log(arr[o]);
  o++;
}

// Створити масив із числами від 1 до 10. За допомогою циклу for пройтися по масиву та вивести на екран всі числа, крім числа 7. Якщо зустрінете число 7, закінчити виконання циклу за допомогою оператора break.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  if (array[i] === 7) {
    break;
  }
  console.log(array[i]);
}
// Створити скрипт, який виводить на екран всі числа , які менші за n. Якщо зустрічається число, що більше або дорівнює n, цикл повинен бути закінчений за допомогою break.
const n = 5;

for (let i = 1; i <= n; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}
// За допомогою циклу while вивести на екран всі числа від 1 до 20, крім чисел, кратних 3. Якщо зустрінете число, кратне 3, цикл повинен продовжити виконання за допомогою оператора continue.
let j = 1;

while (j <= 20) {
  if (j % 3 === 0) {
    j++;
    continue;
  }

  console.log(j);
  j++;
}