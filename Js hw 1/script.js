// Task 1
const name = prompt("Як тебе звати?", "Влад");
console.log(name)
// Task 2
const action = confirm("Підтвердити?");
console.log(action);
// task 3 варіант 1
const danger = [];
danger[0] = alert("Дія небезпечна!");
danger[1] = confirm("Підтвердити дію?");
console.log(danger[1]);
// Варіант 2
const thing = alert("Дія небезпечна!");
const danger = confirm("Підтвердити дію?")
console.log(danger);
