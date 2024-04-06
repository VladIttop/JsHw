// Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// for
const friends = ["Mango", "Poly", "Kiwi", "Ajax"];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i]);
}
// join
let string = friends.join();
console.log(string);
// Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)
const cards = [
  "Карточка-1",
  "Карточка-2",
  "Карточка-3",
  "Карточка-4",
  "Карточка-5",
];
cards.splice(2, 1);
console.log(cards);
cards.splice(5, 0, "Карточка-6");
console.log(cards);
cards.splice(3, 1, "Карточка-4 (2)");
console.log(cards);