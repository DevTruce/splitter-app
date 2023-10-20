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
const cantBeZero = document.querySelector(".cantBeZero");
const hide = document.querySelector(".hide");

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
  console.log(`current tip amount is ${tipAmount}`);
  console.log(`current bill Input is ${billInputValue}`);
  console.log(`current tip percent is ${tipPercentInputValue}`);
  console.log(`current number of people is ${numberOfPeopleInputValue}`);
};

const calulateTotal = function () {
  totalAmount = billInputValue / numberOfPeopleInputValue + tipAmount;
  displayTotalAmount.textContent = `$${totalAmount}`;
  console.log(`current total amount is ${totalAmount}`);
  console.log(`current bill Input is ${billInputValue}`);
  console.log(`current tip amount is ${tipAmount}`);
  console.log(`current number of people is ${numberOfPeopleInputValue}`);
};

const resetAll = function () {
  // Variable Reset
  billInputValue = 0;
  tipPercentInputValue = 0;
  numberOfPeopleInputValue = 1;

  tipAmount = 0;
  totalAmount = 0;

  // Reset Inputs
  inputBill.value = "";
  inputNumberOfPeople.value = "";
  displayTipAmount.textContent = "$0";
  displayTotalAmount.textContent = "$0";
};

const calcBillEnter = function () {
  if (event.key === "Enter" || (event.key === 13 && !isNaN(inputBill.value))) {
    billInputValue = Number(inputBill.value);

    if (billInputValue > 0) {
      inputBill.classList.remove("belowZero");
      calulateTip();
      calulateTotal();
    } else {
      inputBill.classList.add("belowZero");
      inputBill.value = "";
      inputBill.placeholder = "Must be exceed 1";
    }
  }
};

const calcBillBlur = function () {
  billInputValue = Number(inputBill.value);

  if (billInputValue > 0) {
    inputBill.classList.remove("belowZero");
    calulateTip();
    calulateTotal();
  } else {
    inputBill.classList.add("belowZero");
    inputBill.value = "";
    inputBill.placeholder = "Must be exceed 1";
  }
};

const calcNumberOfPeopleEnter = function () {
  if (event.key === "Enter" || (event.key === 13 && !isNaN(inputBill.value))) {
    numberOfPeopleInputValue = Number(inputNumberOfPeople.value);
    if (numberOfPeopleInputValue > 0) {
      cantBeZero.classList.add("hide");
      calulateTip();
      calulateTotal();
    } else {
      cantBeZero.classList.remove("hide");
    }
  }
};

const calcNumberOfPeopleBlur = function () {
  numberOfPeopleInputValue = Number(inputNumberOfPeople.value);

  if (numberOfPeopleInputValue > 0) {
    cantBeZero.classList.add("hide");
    calulateTip();
    calulateTotal();
    console.log(`working`);
  } else {
    cantBeZero.classList.remove("hide");
    console.log(`less than 0`);
  }
};

/////////////////////////////////////////////////
//// EVENT LISTENERS

inputBill.addEventListener("keyup", function (event) {
  calcBillEnter();
});

inputBill.addEventListener("blur", function (event) {
  calcBillBlur();
});

inputNumberOfPeople.addEventListener("keyup", function (event) {
  calcNumberOfPeopleEnter();
});

inputNumberOfPeople.addEventListener("blur", function (event) {
  calcNumberOfPeopleBlur();
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
    tipPercentInputValue = Number(btnCustomPercent.value) / 100;
    calulateTip();
    calulateTotal();
  }
});

btnRest.addEventListener("click", function (event) {
  resetAll();
});
