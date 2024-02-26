//   Створити розмітку  з заголовком та зображенням. За допомогою JavaScript отримати доступ до зображення та змінити значення атрибута "src" на шлях до іншого зображення.
let chelseaImage = document.getElementById("chelsea");
chelseaImage.addEventListener("click", () => {
  chelseaImage.src = "https://picsum.photos/seed/picsum/500/700";
});
//  Створити розмітку  з посиланням та зображенням. За допомогою JavaScript отримати доступ до посилання та змінити значення атрибута "href" на нову URL-адресу. Також отримати доступ до зображення та додати новий атрибут "alt" з описом зображення.
let link = document.getElementById("link");
link.addEventListener("click", () => {
  link.href = "https://deepai.org/chat";
  chelseaImage.alt = "new alt";
});
