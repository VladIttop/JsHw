//* Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let counter = 0;

setInterval(() => {
  if (counter < 5) {
    counter++;
    console.log(`Counter: ${counter}`);
  }
}, 1000);

//* Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.

const box = document.getElementById("box");
const colors = ["green", "red", "blue", "grey", "purple"];

setInterval(() => {
  const generateNumber = Math.floor(Math.random() * colors.length);
  const generatedColor = colors[generateNumber];
  box.style.backgroundColor = generatedColor;
}, 1000);

//* Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

let score = 0;
let gameInterval;

const gameArea = document.getElementById("game-area");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start-btn");

function startGame() {
  score = 0;
  scoreDisplay.textContent = score;
  startButton.disabled = true;

  gameInterval = setInterval(spawnTarget, 1000);

  setTimeout(endGame, 30000);
}

function endGame() {
  clearInterval(gameInterval);
  alert(`Гра закінчена! Ваші очки: ${score}`);
  startButton.disabled = false;
}

function spawnTarget() {
  gameArea.innerHTML = "";
  const target = document.createElement("div");
  target.classList.add("target");

  const x = Math.random() * (gameArea.clientWidth - 50);
  const y = Math.random() * (gameArea.clientHeight - 50);
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  gameArea.appendChild(target);

  target.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    target.remove();
  });
}

startButton.addEventListener("click", startGame);

//* Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

const toShow = document.getElementById("toShow");
const time = document.getElementById("time");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
const timeMs = time.value * 1000;
    setTimeout(() => {
        alert(toShow.value);
    }, timeMs);
});