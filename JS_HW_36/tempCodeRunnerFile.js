"use strict";

const API_KEY = "33619626-890e926dfb3022064c95b6c8b";

fetch(`https://pixabay.com/api/?key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => console.log(data));
