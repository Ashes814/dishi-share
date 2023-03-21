// const nav = document.querySelector(".nav");
// window.addEventListener("scroll", fixNav);

// function fixNav() {
//   if (window.scrollY > nav.offsetHeight + 150) {
//     nav.classList.add("active");
//   } else {
//     nav.classList.remove("active");
//   }
// }

const start = document.querySelector(".start");
const start2 = document.querySelector(".start2");
const hero = document.querySelector(".container1");
const main = document.querySelector(".container2");

start.addEventListener("click", () => {
  hero.classList.toggle("hide");
  main.classList.toggle("hide");
});
start2.addEventListener("click", () => {
  hero.classList.toggle("hide");
  main.classList.toggle("hide");
});
