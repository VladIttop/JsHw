//* Створіть об'єкт "bankAccount" з властивостями "ownerName", "accountNumber", "balance". Додайте до об'єкту метод "deposit", який дозволяє додавати гроші на рахунок, та метод "withdraw", який дозволяє знімати гроші з рахунку. Методи повинні зпрацьовувати при натисканні на кнопки “поповнити рахунок” та отримати ‘готівку’ відповідно. Після проведення операції виводити повідомлення про залишок на рахунку.

const bankAccount = {
  ownerName: "Vlad",
  accountNumber: "123456789",
  balance: 1000,

  deposit(value) {
    this.balance += value;
  },

  withdraw(value) {
    this.balance -= value;
  },
};

const depositBtn = document.getElementById("deposit--btn");
const withdrawBtn = document.getElementById("withdraw--btn");

depositBtn.addEventListener("click", () => {
  let value = +prompt("Скільки коштів ви хочете перевести на свій рахунок?");
  bankAccount.balance += value;
  alert(`Ваш баланс: ${bankAccount.balance}`);
});

withdrawBtn.addEventListener("click", () => {
  let value = +prompt("Введіть суму яку ви хочите зняти");
  if (value <= bankAccount.balance) {
    bankAccount.withdraw(value);
    alert(`Ваш баланс: ${bankAccount.balance}`);
  }
  if (value > bankAccount.balance) {
    alert("Не достатньо коштів!");
  }
});

//* Створіть об'єкт "weather" з властивостями "temperature", "humidity", "windSpeed". Додайте до об'єкту метод, який повертає "true", якщо температура нижче 0 градусів Цельсія, та "false", якщо температура вище або рівна 0 градусів Цельсія. Температуру потрібно отримати з інпуту на сторінці. Якщо метод повернув "true" вивести повідомлення “температура нижче 0 градусів Цельсія” і навпаки.
const inputTemparature = document.getElementById("input--temparature");
const weather = {
  temperature: 0,
  humidity: 0,
  windSpeed: 0,

  isTemparatureBelow0() {
    if (this.temperature <= 0) {
      alert("температура нижче 0 градусів Цельсія");
      return false;
    }
    if (this.temperature > 0) {
      alert("температура вище 0 градусів Цельсія");
      return true;
    }
  },
};

inputTemparature.addEventListener("blur", () => {
  weather.temperature = +inputTemparature.value;
  weather.isTemparatureBelow0();
});

//* Створіть об’єкт "user", якbq буде мати властивості "name", "email", "password". Додайте метод "login", який буде перевіряти правильність введеного email та password. Використайте інпути для запису значень властивостей в об’єкт.
const inputEmail = document.getElementById("input--email");

const user = {
  name: "Vlad",
  email: inputEmail,
  password: "",

  login() {
    if (this.email.value.includes("@") && this.email.value.includes(".")) {
      inputEmail.style.borderColor = "green";
    } else {
      inputEmail.style.borderColor = "red";
    }
    if (this.email.value === "@." || this.email.value === ".@") {
      inputEmail.style.borderColor = "red";
    }
  },
};
inputEmail.addEventListener("blur", () => {
  user.login();
});
//* Створіть об'єкт "movie" з властивостями "title", "director", "year", "rating". Додайте до об'єкту метод, який повертає "true", якщо рейтинг фільму вище 8, та "false", якщо рейтинг фільму 8 або нижче. Вивести значення властивостей на сторінку. Якщо метод повернув "true" то змінити колір тексту поля title на зелений.
const title = document.getElementById("title");
const movie = {
  title: title,
  director: "John Ford",
  year: 1994,
  rating: 8,

  isRating8() {
    if (this.rating >= 8) {
      return true, (title.style.color = "green");
    } else {
      return false, (title.style.color = "red");
    }
  },
};
movie.isRating8();

