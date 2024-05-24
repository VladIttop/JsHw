"use strict";
//* Напиши скрипт, який, для об'єкта user, послідовно:

//* додає поле mood зі значенням 'happy'
//* замінює значення hobby на 'skydiving'
//* замінює значення premium на false
//* виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of

const user = {
  hobby: "Football",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const keys = Object.entries(user);

for (const entry of keys) {
  let key1 = entry[0];
  let value = entry[1];

  console.log(`${key1}: ${value}`);
  // hobby: skydiving
  // premium: false
  // mood: happy
}

//* Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.

const count = {
  name: "Vlad",
  age: 13,
  isAdmin: true,
};

const countProps = function (obj) {
  const counter = Object.keys(obj).length;
  console.log(`В обєкті є ${counter} властивостей!`);
};

countProps(count); //В обєкті є 3 властивостей

const workers = {
  Vlad: 10,
  Max: 15,
  Zlata: 30,
};

const findBestEmployee = function (employees) {
  const employeesArray = [];
  const workersValues = Object.values(employees);
  const workersName = Object.keys(employees);

  for (let value of workersValues) {
    employeesArray.push(value);
  }
  const mostProductive = Math.max(...employeesArray);
  return mostProductive;
};

//* Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".

const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  const keys = Object.keys(employees);
  let total = 0;

  for (const value of values) {
    total += value;
  }

  const lastEmployeeName = keys[keys.length - 1];

  return `${lastEmployeeName}:${total}`;
};

console.log(countTotalSalary({})); // undefined:0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // alfred:330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // chelsy:400

//* Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  const values = [];
  for (const value of arr) {
    values.push(value[prop]);
  }
  return values;
};

console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

console.log(getAllPropValues(products, "category")); // []
//* Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).

const products1 = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let total = 0;
  for (let product of allProdcuts) {
    if (product.name === productName) {
      total = product.price * product.quantity;
      break;
    }
  }
  return total;
};

console.log(calculateTotalPrice(products1, "Радар")); // 5200

console.log(calculateTotalPrice(products1, "Дроїд")); // 2800

//! 17

const { hobby, premium } = user;

console.log(hobby);

const { name, age, isAdmin } = count;

console.log(name, age, isAdmin);

// const workers = {
//   Vlad: 10,
//   Max: 15,
//   Zlata: 30,
// };

const { vlad, max, zlata } = workers;

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

const [
  { name: itemName, price: itemPrice, quantity: itemQuantity },
  { name: itemName1, price: itemPrice1, quantity: itemQuantity1 },
  { name: itemName2, price: itemPrice2, quantity: itemQuantity2 },
  { name: itemName3, price: itemPrice3, quantity: itemQuantity3 },
] = products;
