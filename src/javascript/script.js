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
let tipPercentInputValue = 0;
let numberOfPeopleInputValue = 1;

let tipAmount = 0;
let totalAmount = 0;

/////////////////////////////////////////////////
//// FUNCTIONS
const calulateTip = function (billAmout, percentAmount) {
  tipAmount = Math.round(
    (billInputValue * tipPercentInputValue) / numberOfPeopleInputValue
  );
  displayTipAmount.textContent = `$${tipAmount}`;
};
const calulateTotal = function () {
  totalAmount = billInputValue + tipAmount;
  displayTotalAmount.textContent = `$${totalAmount}`;
};

const resetAll = function () {
  // Variable Reset
  billInputValue = 0;
  tipPercentInputValue = 0;
  numberOfPeopleInputValue = 1;

  tipAmount = 0;
  totalAmount = 0;
};

/////////////////////////////////////////////////
//// EVENT LISTENERS

inputBill.addEventListener("keyup", function (event) {
  if (event.key === "Enter" || (event.key === 13 && !isNaN(inputBill.value))) {
    billInputValue = Number(inputBill.value);

    if (billInputValue >= 0) {
      calulateTip();
      calulateTotal();
    } else {
      inputBill.classList.add("belowZero");
    }
  }
});

inputNumberOfPeople.addEventListener("keyup", function (event) {
  if (event.key === "Enter" || (event.key === 13 && !isNaN(inputBill.value))) {
    numberOfPeopleInputValue = Number(inputNumberOfPeople.value);
    console.log(numberOfPeopleInputValue);
    if (numberOfPeopleInputValue > 0) {
      inputNumberOfPeople.classList.remove("belowZero");
      calulateTip();
      calulateTotal();
      return;
    } else {
      inputNumberOfPeople.classList.add("belowZero");
      inputNumberOfPeople.value = "";
      inputNumberOfPeople.placeholder = "Must be at least 1";
    }
  }
});

btn5Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.05;
  calulateTip();
  calulateTotal();
});
btn10Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.1;
  calulateTip();
  calulateTotal();
});
btn15Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.15;
  calulateTip();
  calulateTotal();
});
btn25Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.25;
  calulateTip();
  calulateTotal();
});
btn50Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.5;
  calulateTip();
  calulateTotal();
});
btnCustomPercent.addEventListener("keyup", function (event) {
  if (
    event.key === "Enter" ||
    (event.key === 13 && !isNaN(btnCustomPercent.value))
  ) {
    tipPercentInputValue = Number(btnCustomPercent.value);
    calulateTip();
    calulateTotal();
  }
});
