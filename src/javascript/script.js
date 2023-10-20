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
let billInputValue = 142.55;
let tipPercentInputValue = 0.25;
let numberOfPeopleInputValue = 2;

let tipAmount = 0;
let totalAmount = 0;

const calulateTip = function (billAmout, percentAmount) {
  tipAmount = Math.round(
    (billInputValue * tipPercentInputValue) / numberOfPeopleInputValue
  );
  displayTipAmount.textContent = tipAmount;
};
const calulateTotal = function () {
  totalAmount = billInputValue + tipAmount;
  displayTotalAmount.textContent = totalAmount;
};

/////////////////////////////////////////////////
//// EVENT LISTENERS

const checkBillInput = function () {
  inputBill.addEventListener("keyup", function (event) {
    if (
      event.key === "Enter" ||
      (event.key === 13 && !isNaN(inputBill.value))
    ) {
      billInputValue = Number(inputBill.value);
      calulateTip();
      calulateTotal();

      console.log(`Bill Input Value: ${typeof billInputValue}`); // DEBUGGING
      console.log(`Bill Input Value: ${billInputValue}`); // DEBUGGING
    }
  });
};

const checkNumberOfPeopleInput = function () {
  inputNumberOfPeople.addEventListener("keyup", function (event) {
    if (
      event.key === "Enter" ||
      (event.key === 13 && !isNaN(inputBill.value))
    ) {
      numberOfPeopleInputValue = Number(inputNumberOfPeople.value);
      calulateTip();
      calulateTotal();

      console.log(`Number of people: ${numberOfPeopleInputValue}`); // DEBUGGING
    }
  });
};

btn5Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.05;
  calulateTip();
  calulateTotal();

  console.log(`Tip percent: ${tipPercentInputValue}`); // DEBUGGING
});
btn10Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.1;
  calulateTip();
  calulateTotal();

  console.log(`Tip percent: ${tipPercentInputValue}`); // DEBUGGING
});
btn15Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.15;
  calulateTip();
  calulateTotal();
  console.log(tipAmount, totalAmount); // DEBUGGING

  console.log(`Tip percent: ${tipPercentInputValue}`); // DEBUGGING
});
btn25Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.25;
  calulateTip();
  calulateTotal();

  console.log(`Tip percent: ${tipPercentInputValue}`); // DEBUGGING
});
btn50Percent.addEventListener("click", function (event) {
  tipPercentInputValue = 0.5;
  calulateTip();
  calulateTotal();
  console.log(`Tip percent: ${tipPercentInputValue}`); // DEBUGGING
});
btnCustomPercent.addEventListener("keyup", function (event) {
  if (
    event.key === "Enter" ||
    (event.key === 13 && !isNaN(btnCustomPercent.value))
  ) {
    tipPercentInputValue = Number(btnCustomPercent.value);
    calulateTip();
    calulateTotal();

    console.log(`Custom tip percent: ${tipPercentInputValue}`); // DEBUGGING
  }
});

checkBillInput();
// checkTipAmountInput();
checkNumberOfPeopleInput();

const updateTipUI = function () {
  displayTipAmount.textContent = `$${tipAmount}`;
};

updateTipUI();
