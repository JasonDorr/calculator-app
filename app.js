const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (operator, a, b) => {
  switch (operator) {
    case "+":
      return addition(a, b);
    case "-":
      return subtraction(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      console.log("please select an operator");
  }
};

const calculate = () => {
  firstInt = operate(operator, parseInt(firstInt), parseInt(secondInt));
  secondInt = undefined;
  operator = undefined;
};

const clear = () => {
  display.innerText = "0";
  firstInt = undefined;
  secondInt = undefined;
  operator = undefined;
};

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");
const equals = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn");

let firstInt;
let secondInt;
let operator = undefined;
let previousValue;

display.innerText = "0";

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (firstInt && operator === undefined) {
      display.innerText = firstInt;
    } else if (firstInt) {
      secondInt = button.innerText;
      display.innerText += secondInt;
      calculate();
    } else {
      display.innerText = button.innerText;
      firstInt = button.innerText;
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (firstInt && secondInt && operator) {
      calculate();
    } else {
      display.innerText += button.innerText;
      operator = button.innerText;
    }
  });
});

equals.addEventListener("click", (e) => {
  if (!secondInt) {
    display.innerText = firstInt;
  } else {
    calculate();
    firstInt = display.innerText;
  }
});

clearBtn.addEventListener("click", () => {
  clear();
});
