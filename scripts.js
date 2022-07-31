let currentNum = "0";
let prevNum = "";
let operator = "";
let isEquals = false;

const inputKeys = ["0","1","2","3","4","5","6","7","8","9","."];
const equalsKeys = ["=","Enter"];
const operatorKeys = ["+","-","*","/"];
window.addEventListener("keydown", (e) => {
  if (inputKeys.includes(e.key)) inputNumber(e.key);
  else if (equalsKeys.includes(e.key)) equals();
  else if (operatorKeys.includes(e.key)) {
    switch (e.key) {
      case "+":
        operate("ADD");
        return;
      case "-":
        operate("SUB");
        return;
      case "*":
        operate("MULT");
        return;
      case "/":
        operate("DIV");
        return;
    }
  }
  else if (e.key == "Backspace") back();
  else if (e.key == "Escape") wipe();
  console.log(e.key);
});



function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

function setDisplay(num) {
  if (num == "0") document.querySelector(".display").innerText = "0";
  else if (!isEquals) document.querySelector(".display").innerText = num;
  else document.querySelector(".display").innerText = num.slice(0,11).replace(/0+$/, "");
}

function operate(type) {
  if (operator != "") equals();
  prevNum = currentNum;
  currentNum = "0";
  operator = type;

  switch (type) {
    case "ADD":
      setDisplay("+");
      break;
    case "SUB":
      setDisplay("-");
      break;
    case "MULT":
      setDisplay("*");
      break;
    case "DIV":
      setDisplay("/");
      break;
  }
}

function equals() {
  switch (operator) {
    case "ADD":
      currentNum = add(prevNum, currentNum).toString();
      break;
    case "SUB":
      currentNum = subtract(prevNum, currentNum).toString();
      break;
    case "MULT":
      currentNum = multiply(prevNum, currentNum).toString();
      break;
    case "DIV":
      currentNum = divide(prevNum, currentNum).toString();
      break;
    default:
      return;
  }

  operator = "";
  prevNum = "";
  isEquals = true;
  setDisplay(currentNum);
}

function inputNumber(num) {
  if (isEquals) {
    wipe();
    isEquals = false;
  }
  if (currentNum == "0") currentNum = "";
  currentNum += num;
  setDisplay(currentNum);

  if (num == ".") document.querySelector(".decimal").disabled = true;
}

function wipe() {
  currentNum = "0";
  setDisplay(currentNum);
  document.querySelector(".decimal").disabled = false;
}

function back() {
  if (currentNum.slice(currentNum.length-1) == ".") document.querySelector(".decimal").disabled = false;
  currentNum = currentNum.slice(0, currentNum.length-1);
  setDisplay(currentNum);
}