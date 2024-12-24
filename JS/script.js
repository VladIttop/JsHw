//! Реалізуйте функцію, яка виводить всіх студентів з бази даних. Використайте HTTP-метод GET і адресу /movies.

const buttons = document.querySelectorAll("[data-action]");
const box = document.querySelector("#box");
let id = 0;
const GET = function () {
  fetch("http://localhost:3000/movies")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((movie) => {
        id++;
      });
      console.log(data);
    })
    .catch((error) => console.log(error));
};

//! Реалізуйте функцію, яка додає новий фільм до бази даних. Використайте HTTP-метод POST і адресу /movies. Передайте дані нового фільму відповідному форматі.

const postBox = function () {
  box.innerHTML = `
      <label for="title">Title:</label>
  <input type="text" id="title" name="title"><br><br>
  
  <label for="genre">Genre:</label>
  <input type="text" id="genre" name="genre"><br><br>
  
  <label for="director">Director:</label>
  <input type="text" id="director" name="director"><br><br>
  
  <label for="year">Year:</label>
  <input type="number" id="year" name="year"><br><br>
  <button type="submit" id="submit">Submit</button>
      `;

  const submitBtn = document.getElementById("submit");
  //* Inputs
  const titleInput = document.getElementById("title");
  const genreInput = document.getElementById("genre");
  const directorInput = document.getElementById("director");
  const yearInput = document.getElementById("year");

  submitBtn.addEventListener("click", () => {
    const toAdd = {
      title: titleInput.value,
      genre: genreInput.value,
      director: directorInput.value,
      year: yearInput.value,
    };

    const optionsToAdd = {
      method: "POST",
      body: JSON.stringify(toAdd),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    const POST = function (options) {
      fetch("http://localhost:3000/movies", options)
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    };
    POST(optionsToAdd);
  });
};

//! Реалізуйте функцію, яка оновлює інформацію про фільм за його ідентифікатором. Використайте HTTP-метод PUT і адресу /movies/:id, де :id — ідентифікатор фільму.
const PUT = function (options) {
  fetch(`http://localhost:3000/movies/${toUpdate.id}`, options)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

const updateBox = function () {

  box.innerHTML = `
        <label for="title">ID:</label>
  <input type="text" id="idInput" name="id"><br><br>
      <label for="title">Title:</label>
  <input type="text" id="title" name="title"><br><br>
  
  <label for="genre">Genre:</label>
  <input type="text" id="genre" name="genre"><br><br>
  
  <label for="director">Director:</label>
  <input type="text" id="director" name="director"><br><br>
  
  <label for="year">Year:</label>
  <input type="number" id="year" name="year"><br><br>
  <button type="submit" id="submitBtn">Submit</button>
      `;
  const idInput = document.getElementById("idInput");
  const submitBtn = document.getElementById("submitBtn");

  const titleInput = document.getElementById("title");
  const genreInput = document.getElementById("genre");
  const directorInput = document.getElementById("director");
  const yearInput = document.getElementById("year");

  submitBtn.addEventListener("click", (e) => {
    const updatedData = {
      title: titleInput.value,
      genre: genreInput.value,
      director: directorInput.value,
      year: yearInput.value,
    };
    const optionsToUpdate = {
      method: "PUT",
      body: JSON.stringify(updatedData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    e.preventDefault();
    const id = idInput.value;
    fetch(`http://localhost:3000/movies/${id}`, optionsToUpdate)
      .then((response) => response.json())
      .catch((error) => console.log(error));
  });
};

//! Реалізуйте функцію, яка частково оновлює інформацію про фільм за його ідентифікатором. Використайте HTTP-метод PATCH і адресу /movies/:id, де :id — ідентифікатор фільму.

const toPatch = {
  id: 1,
  title: "UPDATE BY PATCH",
};

const optionsToPatch = {
  method: "PATCH",
  body: JSON.stringify(toPatch),
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

const PATCH = function (options) {
  fetch(`http://localhost:3000/movies/${toPatch.id}`, options)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
// PATCH(optionsToPatch);

const smthBox = function () {
  box.innerHTML = `
    <label for="id">ID:</label>
    <input type="text" id="idInput" name="id"><br><br>
    <label for="title">Title:</label>
    <input type="text" id="titleInput" name="title"><br><br>
    <label for="genre">Genre:</label>
    <input type="text" id="genreInput" name="genre"><br><br>
    <label for="director">Director:</label>
    <input type="text" id="directorInput" name="director"><br><br>
    <label for="year">Year:</label>
    <input type="number" id="yearInput" name="year"><br><br>
    <button type="submit" id="submitBtn">Submit</button>
  `;

  const idInput = document.getElementById("idInput");
  const titleInput = document.getElementById("titleInput");
  const genreInput = document.getElementById("genreInput");
  const directorInput = document.getElementById("directorInput");
  const yearInput = document.getElementById("yearInput");
  const submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = idInput.value;
    const toPatch = {};

    if (titleInput.value) {
      toPatch.title = titleInput.value;
    }
    if (genreInput.value) {
      toPatch.genre = genreInput.value;
    }
    if (directorInput.value) {
      toPatch.director = directorInput.value;
    }
    if (yearInput.value) {
      toPatch.year = yearInput.value;
    }

    const optionsToPatch = {
      method: "PATCH",
      body: JSON.stringify(toPatch),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    fetch(`http://localhost:3000/movies/${id}`, optionsToPatch)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  });
};

//! Реалізуйте функцію, яка видаляє фільм за його ідентифікатором. Використайте HTTP-метод DELETE і адресу /movies/:id, де :id — ідентифікатор фільму.

const DELETE = function (id) {
  fetch(`http://localhost:3000/movies/${id}`, {
    method: "DELETE",
  })
    .then(console.log("DELETED"))
    .catch((error) => console.log(error));
};

const deleteBox = function () {
  box.innerHTML = `
            <label for="id">ID:</label>
<input type="text" id="id">
  <button type="submit" id="submit">Submit</button>
    `;

  const idInput = document.getElementById("id");
  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", () => {
    const id = idInput.value;
    DELETE(id);
  });
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const btn = button;
    switch (btn.dataset.action) {
      case "getStudents":
        GET();
        break;
      case "addStudent":
        postBox();
        break;
      case "updateStudent":
        updateBox();
        break;
      case "updateSmth":
        smthBox();
        break;
      case "deleteStudent":
        deleteBox();
        break;
    }
  });
});
