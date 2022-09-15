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
  // secondInt = undefined;
  // operator = undefined;
  return operate(operator, parseInt(firstInt), parseInt(secondInt)).toString();
};

const clear = () => {
  display.innerText = "0";
  firstInt = "";
  secondInt = "";
  operator = undefined;
};

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");
const equals = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn");

let firstInt = "";
let secondInt = "";
let operator = undefined;
let previousValue;

display.innerText = "0";

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (previousValue && !operator) {
      clear();
      firstInt += button.innerText;
      display.innerText = firstInt;
    } else if (firstInt && operator === undefined) {
      firstInt += button.innerText;
      display.innerText = firstInt;
      console.log({ firstInt });
      console.log({ secondInt });
      console.log("if");
    } else if (firstInt) {
      secondInt += button.innerText;
      display.innerText += button.innerText;
      console.log({ firstInt });
      console.log({ secondInt });
      console.log("else if");
    } else {
      display.innerText = button.innerText;
      firstInt += button.innerText;
      console.log({ firstInt });
      console.log({ secondInt });
      console.log("else");
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (firstInt && secondInt && operator) {
      firstInt = calculate();
      display.innerText += button.innerText;
      secondInt = "";
      operator = button.innerText;
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
    firstInt = calculate();
    display.innerText = firstInt;
    secondInt = "";
    operator = undefined;
    previousValue = firstInt;
  }
});

clearBtn.addEventListener("click", () => {
  clear();
});
