"use strict";
//! Завдання 1
const input = document.getElementById("taskInput");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const savedValue = JSON.parse(localStorage.getItem("inputValue")) || [];
const elements = savedValue;

if (savedValue.length > 0) {
  savedValue.forEach((task) => {
    const item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);
  });
}

btn.addEventListener("click", () => {
  if (input.value !== "") {
    elements.push(input.value);
    localStorage.setItem("inputValue", JSON.stringify(elements));
    addTask(input.value);
    console.log(elements);
  } else {
    return null;
  }
});

const addTask = function (task) {
  const item = document.createElement("li");
  item.textContent = task;
  list.appendChild(item);
  input.value = "";
};
//! Завдання 2

const textInput = document.getElementById("textInput");
const btnSave = document.getElementById("btnSave");

const textValue = localStorage.getItem("text");

if (textValue) {
  textInput.value = JSON.parse(textValue);
}

btnSave.addEventListener("click", () => {
  const textJSON = JSON.stringify(textInput.value);
  console.log(textJSON);
  if (textInput.value !== "") {
    localStorage.setItem("text", textJSON);
  }
});

//! Завдання 4
const userName = document.getElementById("userName");
const userSurname = document.getElementById("userSurname");
const userNumber = document.getElementById("userNumber");
const userEmail = document.getElementById("userEmail");
const contactSave = document.getElementById("contactSave");
const userList = document.getElementById("userList");

const users = JSON.parse(localStorage.getItem("users")) || [];

const displayUsers = function () {
  userList.innerHTML = "";

  users.forEach((user, index) => {
    const addUserItem = document.createElement("li");
    addUserItem.innerHTML = `
      <p>Ім'я: ${user.name}</p>
      <p>Прізвище: ${user.surname} </p>
      <p>Номер телефону: ${user.number} </p>
      <p>Емейл: ${user.email} </p>
      <button type="button" class="deleteUser" data-index="${index}">Видалити</button>
    `;

    userList.appendChild(addUserItem);
  });

  const deleteButtons = document.querySelectorAll(".deleteUser");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const userIndex = this.getAttribute("data-index");
      deleteUser(userIndex);
    });
  });

  userName.value = "";
  userSurname.value = "";
  userNumber.value = "";
  userEmail.value = "";
};

const deleteUser = function (index) {
  users.splice(index, 1);
  localStorage.setItem("users", JSON.stringify(users));
  displayUsers();
};

const addUser = function () {
  const userNameValue = userName.value;
  const userSurnameValue = userSurname.value;
  const userNumberValue = userNumber.value;
  const userEmailValue = userEmail.value;

  const newUser = {
    name: userNameValue,
    surname: userSurnameValue,
    number: userNumberValue,
    email: userEmailValue,
  };

  users.push(newUser);

  localStorage.setItem("users", JSON.stringify(users));

  displayUsers();
};

contactSave.addEventListener("click", () => {
  addUser();
});

displayUsers();

// Створіть "закладки" — список посилань на важливі сторінки. Додавайте, видаляйте та редагуйте посилання в списку, зберігайте його в localStorage, щоб він залишався між сесіями.

const bookMark = document.getElementById("bookmark");
const addBookMark = document.getElementById("addBookMark");
const allBookMarks = JSON.parse(localStorage.getItem("bookmark")) || [];
const bookMarksList = document.getElementById("allBookMarks");
addBookMark.addEventListener("click", () => {
  addBookMarkFunction();
  displayBookMarks();
});

const addBookMarkFunction = function () {
  allBookMarks.push(bookMark.value);
  sessionStorage.setItem("bookmark", JSON.stringify(allBookMarks));
};

const displayBookMarks = function () {
  allBookMarks.forEach((bookmark) => {
    const createLink = document.createElement("a");
    createLink.href = bookmark;
    createLink.textContent = bookmark;
    bookMarksList.appendChild(createLink);
    bookMark.value = "";
  });
};
displayBookMarks();
