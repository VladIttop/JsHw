"use strict";

const name = document.getElementById("name");
const surname = document.getElementById("surname");
const age = document.getElementById("age");
const course = document.getElementById("course");
const facultet = document.getElementById("facultet");
const allCorse = document.getElementById("allCorse");
const btn = document.getElementById("btn");
const list = document.getElementById("infoList");

const toJSON = function () {
  const studentInfo = {
    name: name.value,
    surname: surname.value,
    age: age.value,
    course: course.value,
    facultet: facultet.value,
    allCorse: allCorse.value,
  };

  displayUserInfo(JSON.stringify(studentInfo));
};

const displayUserInfo = function (userObject) {
  const parsedUserObject = JSON.parse(userObject);
  const li = document.createElement("li");
  li.textContent = `Ім'я: ${parsedUserObject.name}, Прізвище: ${parsedUserObject.surname}, Вік: ${parsedUserObject.age}, Курс: ${parsedUserObject.course}, Факультет: ${parsedUserObject.facultet}, Всі курси: ${parsedUserObject.allCorse}`;
  list.appendChild(li);
  console.log(parsedUserObject);
};

btn.addEventListener("click", () => {
  toJSON();
});

