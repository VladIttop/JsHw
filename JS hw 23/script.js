const observer = (entries, observer) => {
  entries.forEach((img) => {
    if (img.isIntersecting) {
      img.target.src = img.target.dataset.src;
      img.target.unobserve(img)
    }
  });
};
const img = document.querySelectorAll("img");
const options = {
  root: null,
  threshold: 1,
};
const observerElement = new IntersectionObserver(observer, options);
img.forEach((img) => {
  observerElement.observe(img);
});
