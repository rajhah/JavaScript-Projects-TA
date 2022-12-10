var number1 = 4;
var number2 = 3;

function add() {
    var p = document.getElementById("answer");
    var result = number1 + number2;
    p.innerHTML = number1 + " + " + number2 + " = " + result;
};

function subtract() {
    var p = document.getElementById("answer");
    var result = number1 - number2;
    p.innerHTML = number1 + " - " + number2 + " = " + result;
};

function multiply() {
    var p = document.getElementById("answer");
    var result = number1 * number2;
    p.innerHTML = number1 + " * " + number2 + " = " + result;
};

function divide() {
    var p = document.getElementById("answer");
    var result = number1 / number2;
    p.innerHTML = number1 + " / " + number2 + " = " + result;
};

function mod() {
    var p = document.getElementById("answer");
    var result = number1 % number2;
    p.innerHTML = number1 + " % " + number2 + " = " + result;
};

function negative() {
    var p = document.getElementById("answer");
    var result = number1 + number2;
    p.innerHTML = "-(" + number1 + " + " + number2 + ") = " + -result;
};

function rand() {
    number1 = Math.trunc(Math.random() * 100);
    number2 = Math.trunc(Math.random() * 100);
    setNumbers();
};

function increment1(n) {
    number1 += n;
    setNumbers();
};

function decrement1(n) {
    number1 -= n;
    setNumbers();
};

function increment2(n) {
    number2 += n;
    setNumbers();
};

function decrement2(n) {
    number2 -= n;
    setNumbers();
};

function setNumbers() {
    var p = document.getElementById("currentNumbers");
    p.innerHTML = "Current Numbers: " + number1 + ", " + number2
};