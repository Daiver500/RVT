"use strict"

const MAX_WC_SQUARE = 20;
const MAX_APPART_SQUARE = 300;
const NEW__APP__VALUE = 8000;
const OLD__APP__VALUE = 6500;
const ELECTRICITY__NO = 0;
const ELECTRICITY__YES = 300;
const ELECTRICITY__FULL = 600;
const FULL_REPAIR = 1500;
const DESIGN__REPAIR = 3000;
const NO__REPAIR = 0;
const ROOF__SIMPLE = 300;
const ROOF__IMPROVED = 450;
const ROOF__IMPROVED__2 =600;
const ROOF__NO = 0;
const WC__REPAIR__YES = 1300;
const WC__REPAIR__NO = 0;
const HEATED__FLOOR__YES = 200;
const HEATED__FLOOR__NO = 0;
const DOORS__YES = 8500;
const DOORS__NO = 0;
const MAINDOOR__YES = 0.05;
const MAINDOOR__NO = 0;

let result = document.querySelector(".calculator__rate");
const repairWC = document.getElementById("wc-repair");
const wcSquare = document.getElementById("wc-square");
const calculatorForm = document.querySelector(".calculator__form");
const typeOfBuilding = document.getElementById("type-of-building");
const squareOfBuilding = document.getElementById("square-of-building");
const electricityCost = document.getElementById("electricity");
const typeOfRepair = document.getElementById("type-of-repair");
const roof = document.getElementById("roof");
const heatedFloor = document.getElementById("heated-floor");
const doors = document.getElementById("doors");
const doorsQuantity = document.getElementById("doors-quantity");
const checkbobxInput = document.querySelector(".checkbox__input");
const checkboxButtons = document.querySelectorAll(".checkbox__text");
const checkboxLabel = document.querySelector(".checkbox__label");
const checkboxButton = document.querySelector(".checkbox__text");

// Клик на кнопку "Двери"

const checkboxClickHandler = () => {
  checkboxButtons.forEach((item) => {
    item.classList.toggle("checkbox__text--active");
  });
};

checkbobxInput.addEventListener("change", checkboxClickHandler);

// Фильтр

const getRepairSquarePrice = (max, min) => {
  if (typeOfBuilding.value === "Новостройка") {

    return max*squareOfBuilding.value;
  }
  if (typeOfBuilding.value === "Вторичка") {

    return min*squareOfBuilding.value;
  }
};

const getElectricityPrice = (max, min, no) => {
  if (electricityCost.value === "Новая") {

    return max*squareOfBuilding.value;
  }
  if (electricityCost.value === "Частичная") {

    return min*squareOfBuilding.value;
  }
  if (electricityCost.value === "Нет") {

    return no*squareOfBuilding.value;
  }
};

const getTypeOfRepairPrice = (max, min, no) => {
  if (typeOfRepair.value === "Дизайнерский") {

    return max*squareOfBuilding.value;
  }
  if (typeOfRepair.value === "Капитальный") {

    return min*squareOfBuilding.value;
  }
  if (typeOfRepair.value === "Косметический") {

    return no*squareOfBuilding.value;
  }
};

const getRoofPrice = (max, med, min, no) => {
   if (roof.value === "Натяжной") {

    return min*squareOfBuilding.value;
  }
  if (roof.value === "Гипсокартон") {

    return med*squareOfBuilding.value;
  }
  if (roof.value === "2 уровня гипсокартон") {

    return max*squareOfBuilding.value;
  }
  if (roof.value === "Нет") {

    return no*squareOfBuilding.value;
  }
};

const getRepairWcPrice = (yes, no) => {
  if (repairWC.value === "Да") {

   return yes*wcSquare.value;
 }
 if (repairWC.value === "Нет") {

   return no*wcSquare.value;
 }
};


const blockWcInput = () => {
  if (repairWC.value === "Да") {
    wcSquare.disabled = false;
    } else if (repairWC.value === "Нет") {
    wcSquare.disabled = true;
    wcSquare.value = ``;
    }
  };


  const getHeatedFloorPrice = (yes, no) => {
    if (heatedFloor.value === "Да") {

     return yes*squareOfBuilding.value;
   }
   if (heatedFloor.value === "Нет") {

     return no*squareOfBuilding.value;
   }
  };


  const getDoorsPrice = (yes, no) => {
    if (doors.value === "Да") {

     return yes*doorsQuantity.value;
   }
   if (doors.value === "Нет") {

     return no;
   }
  };

const resultOf = () => {
result.textContent = getRepairSquarePrice(NEW__APP__VALUE, OLD__APP__VALUE) + getElectricityPrice(ELECTRICITY__FULL, ELECTRICITY__YES, ELECTRICITY__NO) + getTypeOfRepairPrice(DESIGN__REPAIR,  FULL_REPAIR, NO__REPAIR)
+ getRoofPrice(ROOF__IMPROVED__2, ROOF__IMPROVED, ROOF__SIMPLE, ROOF__NO) + getRepairWcPrice(WC__REPAIR__YES, WC__REPAIR__NO) + getHeatedFloorPrice(HEATED__FLOOR__YES, HEATED__FLOOR__NO)
+ getDoorsPrice(DOORS__YES, DOORS__NO)  + ` руб`;
};

calculatorForm.addEventListener("input", resultOf);
repairWC.addEventListener("change", blockWcInput);


const squareAppartInputHandler = () => {
  if (squareOfBuilding.value > MAX_APPART_SQUARE) {
    squareOfBuilding.value = MAX_APPART_SQUARE;
    squareOfBuilding.setCustomValidity(`Площадь квартиры от 1 до 300 м.`);
    } else {
    squareOfBuilding.setCustomValidity(``);
  }
  squareOfBuilding.reportValidity();
};

const squareWcInputHandler = () => {
  if (wcSquare.value > MAX_WC_SQUARE) {
    wcSquare.value = MAX_WC_SQUARE;
    wcSquare.setCustomValidity(`Площадь санузла от 1 до 20 м.`);
    } else {
      wcSquare.setCustomValidity(``);
  }
  wcSquare.reportValidity();
};

squareOfBuilding.addEventListener("input", squareAppartInputHandler);
wcSquare.addEventListener("input", squareWcInputHandler);


