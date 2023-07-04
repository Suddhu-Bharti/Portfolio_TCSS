const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body");
const moonBtn = document.querySelector("#moon");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

hLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});

moonBtn.addEventListener("click", ()=>{
    body.classList.toggle("dark");
})