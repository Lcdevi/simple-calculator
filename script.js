let oneBtn = document.getElementById('onebtn');
let twoBtn = document.getElementById('twobtn');
let threeBtn = document.getElementById('threebtn');
let fourBtn = document.getElementById('fourbtn');
let plusBtn = document.getElementById('plusbtn');
let minusBtn = document.getElementById('minusbtn');
let multBtn = document.getElementById('multbtn');
let displayjs = document.getElementById('display');
let egalBtn = document.getElementById('egalbtn');
let displayValue = "";
let temporaryResult = "";
let array = 0;
let operator = "";
let len = "";

oneBtn.addEventListener('click', function(e){
  clickNumber("1");
})

twoBtn.addEventListener('click', function(e){
  clickNumber("2");
})

threeBtn.addEventListener('click', function(e){
  clickNumber("3");
})

fourBtn.addEventListener('click', function(e){
  clickNumber("4");
})

plusBtn.addEventListener('click', function(e){
  egal();
  operator = "+";
  console.log("operateur est : " + operator);
  add();
})

minusBtn.addEventListener('click', function(e){
  egal();
  operator = "-";
  console.log("operateur est : " + operator);
  subtract();
})

multBtn.addEventListener ('click', function(e){
  egal();
  operator = "*";
  console.log("operateur est : " + operator);
  multiply();
})

egalBtn.addEventListener('click', function(e){
    console.log(operator);
    egal();
    operator = "";
})

function clickNumber(numberValue) {
  displayValue = displayValue + numberValue;
  displayjs.textContent = displayValue;
    if (operator == "") {
      temporaryResult = "";
    }
}

function egal() {
  if (operator == "+") {
    add();
  } else if (operator == "-") {
    subtract();
  } else if (operator == "*") {
    multiply();
  }
}

function add() {
  displayValue = displayValue + " + " + temporaryResult;
  array = displayValue.split(" ");
  console.log(array);
  len = array.length;
    for (i = 0 ; i < len; i++) {
        temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
    }
}

function subtract() {
  displayValue = displayValue + " - " + temporaryResult;
  array = displayValue.split(" ");
  console.log(array);
  len = array.length;
    for (i = 0 ; i < len; i++) {
      if (array[2] == "") {
        temporaryResult = Math.floor(array[0]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else if (array[0] == "") {
        temporaryResult = Math.floor(array[2]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else {
        temporaryResult = Math.floor(array[2]) - Math.floor(array[0]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      }
    }
}

function multiply() {
  displayValue = displayValue + " * " + temporaryResult;
  array = displayValue.split(" ");
  console.log(array);
  len = array.length;
    for (i = 0; i < len; i++) {
        if (array[2] == "") {
          temporaryResult = Math.floor(array[0]);
          displayjs.textContent = temporaryResult;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
        } else if (array[0] == "") {
          temporaryResult = Math.floor(array[2]);
          displayjs.textContent = temporaryResult;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
        } else {
          temporaryResult = Math.floor(array[0]) * Math.floor(array[2]);
          displayjs.textContent = temporaryResult;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
      }
    }
}
