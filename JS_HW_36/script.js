"use strict";

const API_KEY = "33619626-890e926dfb3022064c95b6c8b";

const btn = document.querySelector("#btn");

let perPage = 8;
let page = 1;

const fetchFunction = function () {
  fetch(
    `https://pixabay.com/api/?key=${API_KEY}&per_page=${perPage}&page=${page}`
  )
    .then((response) => response.json())
    .then((data) => {
      const object = data.hits;
      console.log(object);
      object.forEach((element) => {
        const imageUrl = element.largeImageURL;
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.classList.add("img");
        img.src = imageUrl;
        li.appendChild(img);
        document.querySelector("#list").appendChild(li);
      });
    });
};
fetchFunction();
btn.addEventListener("click", () => {
  page++;
  fetchFunction();
});

