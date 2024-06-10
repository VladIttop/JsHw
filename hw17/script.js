"use strict";

const customers = [
  { name: "Vlad", eyeColor: "Brown", gender: "Male" },
  { name: "Zlata", eyeColor: "Blue", gender: "Female" },
  { name: "Max", eyeColor: "Green", gender: "Male" },
];

const getAllNames = customers.map((user) => user.name);

console.log(getAllNames);

const getBlueEye = customers.filter((user) => user.eyeColor === "Blue");
const getBrownEye = customers.filter((user) => user.eyeColor === "Brown");
const getGreenEye = customers.filter((user) => user.eyeColor === "Green");
console.log(getBlueEye);
console.log(getBrownEye);
console.log(getGreenEye);

//* Отримати масив імен користувачів за статтю (поле gender).

const customers1 = [
  { name: "Vlad", eyeColor: "Brown", gender: "Male" },
  { name: "Zlata", eyeColor: "Blue", gender: "Female" },
  { name: "Max", eyeColor: "Green", gender: "Male" },
];

const userByGender = function (arr, gender) {
  return arr.filter((user) => user.gender === gender, []);
};

console.log(userByGender(customers1, "Female"));

//* Отримати масив тільки неактивних користувачів (поле isActive).

const userInfo = [
  { name: "Vlad", age: 13, isActive: true },
  { name: "Zlata", age: 10, isActive: false },
  { name: "Max", age: 14, isActive: false },
];

const inActive = userInfo.filter((user) => user.isActive !== true);

console.log(inActive);

//* Отримати користувача (не масив) по email (поле email, він унікальний).

const users = [
  {
    email: "vlad@gmail.com",
    name: "Vlad",
    age: 13,
  },
  {
    email: "zlata@gmail.com",
    name: "Zlata",
    age: 10,
  },
  {
    email: "max@gmail.com",
    name: "Max",
    age: 14,
  }
];

const findUserByEmail = function (email, arr) {
    return arr.find((user) => user.email === email)
}

console.log(findUserByEmail("zlata@gmail.com", users));

//* Отримати масив користувачів, які потрапляють у вікову категорію від min до max років (поле age).

const getUserAgeFilter = function(arr, min, max) {
    return arr.filter((user) => user.age >= min && user.age <= max)
};

console.log(getUserAgeFilter(users, 9, 14));