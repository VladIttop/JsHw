"use strict";

//* Отримати загальну суму балансу (поле balance) всіх користувачів.

const users = [
  { name: "Mango", balance: 100, friends: ["Poly"] },
  { name: "Poly", balance: 500, friends: ["Ajax", "Mango"] },
  { name: "Ajax", balance: 20, friends: ["Poly", "Mango"] },
];

const calculateBalance = users.reduce(
  (total, balance) => (total += balance.balance),
  0
);

console.log(calculateBalance);

//* Масив імен всіх користувачів у яких є друг із зазначеним ім'ям.

const getUsersWithFriend = (array, friendName) => {
  return array.reduce((acc, user) => {
    if (user.friends && user.friends.includes(friendName)) {
      acc.push(user.name);
    }
    return acc;
  }, []);
};
console.log(getUsersWithFriend(users, "Poly"));

//* Масив імен (поле name) людей, відсортованих в залежності від кількості їх друзів (поле friends)

const people = [
  { name: "Alice", friends: 5 },
  { name: "Bob", friends: 3 },
  { name: "Charlie", friends: 2 },
  { name: "David", friends: 10 },
  { name: "Eve", friends: 7 }
];

people.sort((a, b) => a.friends - b.friends);

console.log(people.map((person) => person.name));

//* Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const people2 = [
  { name: "Alice", skills: ["javascript", "html", "css"] },
  { name: "Bob", skills: ["python", "java", "javascript"] },
  { name: "Charlie", skills: ["csharp", "javascript", "css"] },
  { name: "David", skills: ["ruby", "javascript", "html"] },
  // інші користувачі
];

const allSkills = people2.reduce((acc, person) => {
  return acc.concat(person.skills);
}, []);

const uniqueSkills = allSkills.sort((a, b) => a.localeCompare(b));

console.log(uniqueSkills);
