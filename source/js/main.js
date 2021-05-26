"use strict"

// Меню

const navigationMenu = document.querySelector(".navigation__menu");
const navigationToggleMobile = document.querySelector(".navigation__toggle-mobile");

navigationMenu.classList.add("hidden");

const navigationToggleClickhandler = () => {
  navigationToggleMobile.classList.toggle("navigation__toggle--active");
  navigationMenu.classList.toggle("hidden");
  navigationMenu.classList.toggle("animation");
};

navigationToggleMobile.addEventListener("click", navigationToggleClickhandler);


