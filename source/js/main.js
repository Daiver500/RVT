(function () {
const navigationMenu = document.querySelector(".navigation__menu");
const navigationToggleMobile = document.querySelector(".navigation__toggle-mobile");

navigationMenu.classList.add("hidden");

const navigationToggleClickhandler = () => {
  navigationToggleMobile.classList.toggle("navigation__toggle--active");
  navigationMenu.classList.toggle("hidden");
  navigationMenu.classList.toggle("animation");
};

navigationToggleMobile.addEventListener("click", navigationToggleClickhandler);

const repairWC = document.getElementById("wc-repair");
const wcSquare = document.getElementById("wc-square");

const blockWcInput = () => {
if (repairWC.value === "Да") {
  wcSquare.disabled = false;
  } else if (repairWC.value === "Нет") {
  wcSquare.disabled = true;
  }
};

repairWC.addEventListener("change", blockWcInput);
repairWC.addEventListener("change", function() {
	console.log(this.value);
});

const checkbobxInput = document.querySelector(".checkbox__input");
const checkboxButtons = document.querySelectorAll(".checkbox__text");

const checkboxClickHandler = () => {
  checkboxButtons.forEach((item) => {
    item.classList.toggle("checkbox__text--active");
  });
};

checkbobxInput.addEventListener("change", checkboxClickHandler);

let result = document.querySelector(".calculator__rate");
result.textContent = 111;


const MIN_WC_SQUARE = 1;
const MAX_WC_SQUARE = 20;
const MIN_APPART_SQUARE = 1;
const MAX_APPART_SQUARE = 300;



})();
