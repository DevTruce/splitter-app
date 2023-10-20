"use strict";

/////////////////////////////////////////////////
//// ELEMENTS
const inputBill = document.querySelector(".billInput");
const inputNumberOfPeople = document.querySelector(".numberOfPeopleInput");
const btn5Percent = document.querySelector(".tipPercentButton5P");
const btn10Percent = document.querySelector(".tipPercentButton10P");
const btn15Percent = document.querySelector(".tipPercentButton15P");
const btn25Percent = document.querySelector(".tipPercentButton25P");
const btn50Percent = document.querySelector(".tipPercentButton50P");
const btnCustomPercent = document.querySelector(".tipPercentButtonCustomP");
const btnRest = document.querySelector(".resetButton");

const displayTipAmount = document.querySelector(".totalTip");
const displayTotalAmount = document.querySelector(".totalAmount");

/////////////////////////////////////////////////
//// VARIABLES
let billInputValue = 0;
let tipPercent = 0;

/////////////////////////////////////////////////
//// EVENT LISTENERS

const checkBillInput = function () {
  inputBill.addEventListener("keyup", function (event) {
    if (
      event.key === "Enter" ||
      (event.key === 13 && !isNaN(inputBill.value))
    ) {
      billInputValue = Number(inputBill.value);

      console.log(`Bill Input Value: ${typeof billInputValue}`); // DEBUGGING
      console.log(`Bill Input Value: ${billInputValue}`); // DEBUGGING
    }
  });
};

const checkTipAmount = function () {
  btn5Percent.addEventListener("click", function (event) {
    tipPercent = 0.05;
    console.log(tipPercent);
  });
  btn10Percent.addEventListener("click", function (event) {
    tipPercent = 0.1;
    console.log(tipPercent);
  });
  btn15Percent.addEventListener("click", function (event) {
    tipPercent = 0.15;
    console.log(tipPercent);
  });
  btn25Percent.addEventListener("click", function (event) {
    tipPercent = 0.25;
    console.log(tipPercent);
  });
  btn50Percent.addEventListener("click", function (event) {
    tipPercent = 0.5;
    console.log(tipPercent);
  });
  btnCustomPercent.addEventListener("keyup", function (event) {
    if (
      event.key === "Enter" ||
      (event.key === 13 && !isNaN(btnCustomPercent.value))
    ) {
      tipPercent = Number(btnCustomPercent.value);
      console.log(tipPercent);
    }
  });
};

checkBillInput();
checkTipAmount();
