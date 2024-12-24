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
PATCH(optionsToPatch);