"use script";

//* Завдання 1

//* "Порівняння кількох промісів"

//* Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.

// Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
// Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
// Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
// Обробіть результати вирішення промісів та виведіть їх у консоль.

const delayedPromise = function (value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
};

const promises = {
  promise1: delayedPromise(1, 1000),
  promise2: delayedPromise(2, 2000),
  promise3: delayedPromise(3, 3000),
  promise4: delayedPromise(4, 4000),
  promise5: delayedPromise(5, 5000),
};

Promise.all([
  promises.promise1,
  promises.promise2,
  promises.promise3,
  promises.promise4,
  promises.promise5,
]).then((value) => {
  console.log(value);
});

// Output: [1, 2, 3, 4, 5]

//* Завдання 2

//* "Змагання промісів"

//* Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.race і отримати результат найшвидшого проміса.

// Створіть функцію randomDelay, яка приймає значення і повертає проміс з випадковою затримкою (від 1000 до 5000 мілісекунд).
// Створіть масив з 5 промісів, використовуючи функцію randomDelay, із різними значеннями.
// Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
// Обробіть результат найшвидшого проміса та виведіть його у консоль.

const randomDelay = function (value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, Math.floor(Math.random() * 5000 + 1000));
  });
};

const randomDelayPromises = {
  promise1: randomDelay(1),
  promise2: randomDelay(2),
  promise3: randomDelay(3),
  promise4: randomDelay(4),
  promise5: randomDelay(5),
};

Promise.race([
  randomDelayPromises.promise1,
  randomDelayPromises.promise2,
  randomDelayPromises.promise3,
  randomDelayPromises.promise4,
  randomDelayPromises.promise5,
]).then((value) => {
  console.log(value);
});
