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
let secondInt = [];
let operator;

// display.innerText = "0";

numberBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.innerText += `${button.innerText}`;
    displayValue.push(button.innerText);
    if (firstInt) {
      secondInt += button.innerText;
    }
  });
});

operatorBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.innerText += `${button.innerText}`;
    operator = button.innerText;
    firstInt = displayValue.join("");
  });
});

equals.addEventListener("click", (e) => {
  display.innerText = operate(
    operator,
    parseInt(firstInt),
    parseInt(secondInt)
  );
  firstInt = display.innerText;
  operator = "";
  secondInt = [];
});
