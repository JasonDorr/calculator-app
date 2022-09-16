// Functions

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
      if (b == 0) {
        return (display.innerText = "YOU CANNOT DIVIDE BY 0!");
      } else {
        return divide(a, b);
      }
    default:
      console.log("please select an operator");
  }
};

const calculate = () =>
  operate(operator, parseInt(firstInt), parseInt(secondInt)).toString();

const reset = () => {
  firstInt = "";
  secondInt = "";
  operator = undefined;
};

const clear = () => {
  display.innerText = "0";
  reset();
};

// Query selectors

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");
const equals = document.querySelector(".equal-btn");
const clearBtn = document.querySelector(".clear-btn");

// Variables

let firstInt = "";
let secondInt = "";
let operator = undefined;
let previousValue;
let space = " ";

display.innerText = "0";

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Resets operation if number is pressed while a result is being displayed.
    if (previousValue && !operator && !firstInt) {
      clear();
      firstInt += button.innerText;
      display.innerText = firstInt;
    }
    // Enters more than a single digit for first operand.
    else if (firstInt && operator === undefined) {
      firstInt += button.innerText;
      display.innerText = firstInt;
    }
    // Enters additional digits in second operand and prevents a space from being entered between numbers in second operand.
    else if (firstInt && secondInt) {
      secondInt += button.innerText;
      display.innerText += button.innerText;
    }
    // Adds first digit to second operand and enters a space after the operator.
    else if (firstInt) {
      secondInt += button.innerText;
      display.innerText += ` ${button.innerText}`;
    }
    // Enters first digit of first operand.
    else {
      display.innerText = button.innerText;
      firstInt += button.innerText;
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Calculates equation when a string of operations is entered.
    if (firstInt && secondInt && operator) {
      firstInt = calculate();
      display.innerText = firstInt;
      display.innerText += ` ${button.innerText}`;
      secondInt = "";
      operator = button.innerText;
    }
    // Enters first operator. Only runs after page load or after clear function.
    else {
      display.innerText += ` ${button.innerText}`;
      operator = button.innerText;
    }
  });
});

equals.addEventListener("click", (e) => {
  // Prevents calculation from occuring when there is no second operand.
  if (!secondInt) {
    display.innerText = firstInt;
    operator = undefined;
  }
  // Runs calculation and resets variable values.
  else {
    previousValue = calculate();
    display.innerText = previousValue;
    reset();
  }
});

clearBtn.addEventListener("click", clear);
