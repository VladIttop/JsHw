
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
