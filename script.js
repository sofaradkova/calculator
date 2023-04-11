// operations functions
const add = (a, b) => parseInt(a) + parseInt(b);
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

// interface variables
let number1 = "";
let number2 = "";
let operation = "";
let result = "";

const operate = (a, b, operator) => {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-" :
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
};

// connect buttons to functions
const digitBtns = document.querySelectorAll(".digit");

digitBtns.forEach((button) => {
    button.addEventListener('click', function() {
        if (result !== "") {
            if (button.id === "+" || button.id === "-" || button.id === "*" || button.id === "/") {
                number1 = result;
                operation = button.innerHTML;
                number2 = "";
                result = "";
            }
            else if (button.innerHTML !== "=") {
                number1 = button.innerHTML;
                operation = "";
                number2 = "";
                result = "";
            }
        }
        else {
            if (number1 === "") {
                printDigit(button.innerHTML);
                number1 = button.innerHTML;
            }
            else if (operation === "") {
                printDigit(button.innerHTML);
                operation = button.innerHTML;
            }
            else if (number2 === "") {
                printDigit(button.innerHTML);
                number2 = button.innerHTML;
            }
        }
    });
});

// put digits on screen
const screenTop = document.querySelector("#top");

const printDigit = (number) => {
    var newDigit = document.createTextNode(number);
    screenTop.appendChild(newDigit);
}

//calculate when equals pressed
const equals = document.querySelector("#equals");
const resultScreen = document.querySelector('#bottom');

equals.addEventListener('click', function() {
    if (number1!=="" && number2!=="" && operation!=="") {
        resultScreen.textContent = operate(number1, number2, operation);
        result = operate(number1, number2, operation);
    }
});

