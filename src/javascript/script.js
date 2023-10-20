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

/////////////////////////////////////////////////
//// CALCULATE TOTAL TIPS PER PERSON
const calulateTip = function (billAmout, percentAmount) {
  tipAmount = Math.round(
    (billInputValue * tipPercentInputValue) / numberOfPeopleInputValue
  );
  displayTipAmount.textContent = `$${tipAmount}`;
};

/////////////////////////////////////////////////
//// CALCULATE TOTAL BILL PER PERSON
const calulateTotal = function () {
  totalAmount = billInputValue / numberOfPeopleInputValue + tipAmount;
  displayTotalAmount.textContent = `$${totalAmount}`;
};

/////////////////////////////////////////////////
//// RUN TIP, TOTAL, CAL FUNCTION TO GENERATE NEW BILL BALANCE WHEN USER PRESSES ENTER OR CLICKS OFF INPUT FIELD
const calcBill = function () {
  if (billInputValue > 0) {
    inputBill.classList.remove("belowZero");
    calulateTip();
    calulateTotal();
  } else {
    inputBill.classList.add("belowZero");
    inputBill.value = "";
    inputBill.placeholder = "Must exceed 1";
  }
};
const calcBillEnter = function () {
  if (event.key === "Enter" || (event.key === 13 && !isNaN(inputBill.value))) {
    billInputValue = Number(inputBill.value);
    calcBill();
  }
};
const calcBillBlur = function () {
  billInputValue = Number(inputBill.value);
  calcBill();
};

/////////////////////////////////////////////////
//// RUN TIP, TOTAL, CAL FUNCTION TO GENERATE NEW NUMBER OF PEOPLE WHEN USER PRESSES ENTER OR CLICKS OFF INPUT FIELD
const calcNumberOfPeople = function () {
  if (numberOfPeopleInputValue > 0) {
    cantBeZero.classList.add("hide");
    calulateTip();
    calulateTotal();
  } else {
    cantBeZero.classList.remove("hide");
  }
};
const calcNumberOfPeopleEnter = function () {
  if (event.key === "Enter" || (event.key === 13 && !isNaN(inputBill.value))) {
    numberOfPeopleInputValue = Number(inputNumberOfPeople.value);
    calcNumberOfPeople();
  }
};
const calcNumberOfPeopleBlur = function () {
  if (
    Number(inputNumberOfPeople.value) > 0 &&
    !isNaN(inputNumberOfPeople.value)
  ) {
    numberOfPeopleInputValue = Number(inputNumberOfPeople.value);
    calcNumberOfPeople();
  }
};

/////////////////////////////////////////////////
//// RUN TIP, TOTAL, CAL FUNCTION TO GENERATE CUSTOMER TIP PERCENT WHEN USER PRESSES ENTER OR CLICKS OFF INPUT FIELD
const calcCustomPercent = function (event) {
  tipPercentInputValue = Number(btnCustomPercent.value) / 100;
  calulateTip();
  calulateTotal();
};
const calcCustomPercentEnter = function (event) {
  if (
    event.key === "Enter" ||
    (event.key === 13 && !isNaN(btnCustomPercent.value))
  ) {
    calcCustomPercent();
  }
};
const calcCustomPercentBlur = function (event) {
  if (btnCustomPercent.value > 0 && !isNaN(btnCustomPercent.value)) {
    calcCustomPercent();
  }
};

/////////////////////////////////////////////////
//// ALLOW USER TO RESET THE CALCULATOR
const resetAll = function () {
  // reset variables
  billInputValue = 0;
  tipPercentInputValue = 0;
  numberOfPeopleInputValue = 1;
  tipAmount = 0;
  totalAmount = 0;

  // hide cantBeZero incase it was not hidden already
  cantBeZero.classList.add("hide");

  // reset all input fields
  inputBill.value = "";
  inputNumberOfPeople.value = "";
  displayTipAmount.textContent = "$0";
  displayTotalAmount.textContent = "$0";
};
/////////////////////////////////////////////////
//// EVENT LISTENERS

/////////////////////////////////////////////////
//// CALCULATOR INPUTS - LISTEN FOR INPUTS AND ASSIGN CORRECT VALUES
inputBill.addEventListener("keyup", function () {
  calcBillEnter();
});

inputBill.addEventListener("blur", function () {
  calcBillBlur();
});

inputNumberOfPeople.addEventListener("keyup", function () {
  calcNumberOfPeopleEnter();
});

inputNumberOfPeople.addEventListener("blur", function () {
  calcNumberOfPeopleBlur();
});

/////////////////////////////////////////////////
//// CALCULATOR BUTTONS - ASSIGN TIP PERCENTS AND CALCULATE VALUES
btn5Percent.addEventListener("click", function () {
  tipPercentInputValue = 0.05;
  calulateTip();
  calulateTotal();
});
btn10Percent.addEventListener("click", function () {
  tipPercentInputValue = 0.1;
  calulateTip();
  calulateTotal();
});
btn15Percent.addEventListener("click", function () {
  tipPercentInputValue = 0.15;
  calulateTip();
  calulateTotal();
});
btn25Percent.addEventListener("click", function () {
  tipPercentInputValue = 0.25;
  calulateTip();
  calulateTotal();
});
btn50Percent.addEventListener("click", function () {
  tipPercentInputValue = 0.5;
  calulateTip();
  calulateTotal();
});
btnCustomPercent.addEventListener("keyup", function () {
  calcCustomPercentEnter();
});
btnCustomPercent.addEventListener("blur", function () {
  calcCustomPercentBlur();
});

/////////////////////////////////////////////////
//// ALLOW USER TO RESET THE CALCULATOR TO DEFAULT
btnRest.addEventListener("click", function () {
  resetAll();
});
