// Створити таймер, який буде починати відлік з 1 години та зменшувати час кожну хвилину. При досягненні 30 хвилин, таймер повинен відправляти повідомлення екран про те, що залишилось менше половини часу.
const timeText = document.getElementById("timer");

let timer;
let hours = 60;
timer = setInterval(() => {
  hours--;
  timeText.textContent = hours;

  if (hours === 0) {
    clearInterval(timerID);
    alert("Таймер закінчено!");
  }
}, 60000);

// Створити таймер, який буде починати відлік з 30 секунд та зменшувати час кожну мілісекунду. При досягненні 10 секунд, таймер повинен відтворювати якусь анімацію, а при досягненні 0 секунд — виконувати певну дію, наприклад, робити кнопку почати знову активною.

const btn = document.getElementById("btn");
let counter = 30000;
let timerID;

btn.addEventListener("click", () => {
  btn.disabled = true;
  timerID = setInterval(() => {
    counter--;

    if (counter <= 10000) {
      document.body.style.backgroundColor = "aqua";
    }

    if (counter === 0) {
      clearInterval(timerID);
      btn.disabled = false;
    }
    console.log(counter);
  }, 1);
});
