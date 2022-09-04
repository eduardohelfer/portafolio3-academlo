const menu = document.querySelector(".menu");
const menuOpenBtn = document.querySelector(".menu--open");
const menuCloseBtn = document.querySelector(".menu--close");

function toggleMenu(){
  menu.classList.toggle("menu--opener");
}

menuOpenBtn.addEventListener("click", toggleMenu);
menuCloseBtn.addEventListener("click", toggleMenu);
