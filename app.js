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

const numberBtns = document.querySelectorAll(".number-btn");
const operatorBtns = document.querySelectorAll(".operator-btn");
const display = document.querySelector(".display");
const equals = document.querySelector(".equal-btn");

let displayValue = [];
let firstInt;
let secondInt;
let operator = null;

display.innerText = "0";

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (firstInt && operator === null) {
      display.innerText = firstInt;
    }
    if (firstInt && secondInt && operator) {
      firstInt = operate(operator, parseInt(firstInt), parseInt(secondInt));
      // secondInt = null;
      console.log(`firstInt: ${firstInt}`);
      console.log(`secondInt: ${secondInt}`);
      console.log(operator);
      display.innerText += button.innerText;
      // operator = null;
    } else if (firstInt) {
      secondInt = button.innerText;
      display.innerText += secondInt;
      // console.log(`firstInt: ${firstInt}`);
      // console.log(`secondInt: ${secondInt}`);
      // console.log(operator);
    } else {
      display.innerText = button.innerText;
      firstInt = button.innerText;
      // console.log(`firstInt: ${firstInt}`);
      // console.log(`secondInt: ${secondInt}`);
      // console.log(operator);
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.innerText += button.innerText;
    operator = button.innerText;
    console.log(`firstInt: ${firstInt}`);
    console.log(`secondInt: ${secondInt}`);
    console.log(operator);
  });
});

equals.addEventListener("click", (e) => {
  if (secondInt === null) {
    display.innerText = firstInt;
    console.log(`firstInt: ${firstInt}`);
    console.log(`secondInt: ${secondInt}`);
    console.log(operator);
  } else {
    display.innerText = operate(
      operator,
      parseInt(firstInt),
      parseInt(secondInt)
    );

    firstInt = display.innerText;
    operator = null;
    secondInt = null;
    console.log(`firstInt: ${firstInt}`);
    console.log(`secondInt: ${secondInt}`);
    console.log(operator);
  }
});
