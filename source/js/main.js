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



const MIN_WC_SQUARE = 1;
const MAX_WC_SQUARE = 20;
const MIN_APPART_SQUARE = 1;
const MAX_APPART_SQUARE = 300;
const NEW__APP__VALUE = 8000;
const OLD__APP_VALUE = 6500;
const ELECTRICITY__YES = 300;
const ELECTRICITY__NO = 600;
const COSMETIC_REPAIR = 0;
const FULL_REPAIR = 1500;
const DESIGN__REPAIR = 3000;
const WC__REPAIR__YES = 13000;
const DOORS__YES = 8500;
const HEATED__FLOOR__YES = 200;

const typeOfBuilding = document.getElementById("type-of-building");
let squareOfBuilding = document.getElementById("square-of-building");
let electricityCost = document.getElementById("electricity");
let result = document.querySelector(".calculator__rate");



typeOfBuilding.addEventListener("change", getBuildingPrice);
electricityCost.addEventListener("change", getElectricityPrice);




const squareInputHandler = () => {
  const valueLength = squareOfBuilding.value;
  if (valueLength > MAX_APPART_SQUARE) {
    squareOfBuilding.value = MAX_APPART_SQUARE;
    squareOfBuilding.setCustomValidity(`Площадь квартиры от 1 до 300 м.`);
    } else {
    squareOfBuilding.setCustomValidity(``);
  }
  squareOfBuilding.reportValidity();
};

squareOfBuilding.addEventListener("input", squareInputHandler);

})();
