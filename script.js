let zeroBtn = document.getElementById('zerobtn');
let oneBtn = document.getElementById('onebtn');
let twoBtn = document.getElementById('twobtn');
let threeBtn = document.getElementById('threebtn');
let fourBtn = document.getElementById('fourbtn');
let fiveBtn = document.getElementById('fivebtn');
let sixBtn = document.getElementById('sixbtn');
let sevenBtn = document.getElementById('sevenbtn');
let heightBtn = document.getElementById('heightbtn');
let nineBtn = document.getElementById('ninebtn');
let clearBtn = document.getElementById('clearbtn');
let minusplusBtn = document.getElementById('minusplus');
let divideBtn = document.getElementById('dividebtn');
let multBtn = document.getElementById('multbtn');
let minusBtn = document.getElementById('minusbtn');
let plusBtn = document.getElementById('plusbtn');
let egalBtn = document.getElementById('egalbtn');
let dotBtn = document.getElementById('dotbtn');
let displayjs = document.getElementById('display');
let displayValue = "";
let temporaryResult = "";
let array = 0;
let operator = "";
let len = "";
console.log(displayValue);
console.log(temporaryResult);

zeroBtn.addEventListener('click', function(e){
  if (displayValue == "" && temporaryResult == "") {
      displayValue = "";
      displayjs.textContent = "0";
    } else {
      displayValue = displayValue + "0";
      displayjs.textContent = displayValue;
    }
})

oneBtn.addEventListener('click', function(e){
  clickNumber("1");
  console.log(displayValue);
  console.log(temporaryResult);
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

fiveBtn.addEventListener('click', function(e){
  clickNumber("5");
})

sixBtn.addEventListener('click', function(e){
  clickNumber("6");
})

sevenBtn.addEventListener('click', function(e){
  clickNumber("7");
})

heightBtn.addEventListener('click', function(e){
  clickNumber("8");
})

nineBtn.addEventListener('click', function(e){
  clickNumber("9");
})

minusplusBtn.addEventListener('click', function(e){
    console.log("hop");
    console.log(temporaryResult);
    console.log(displayValue);
    if ((temporaryResult > 0 && displayValue < 0) || (displayValue == "" && temporaryResult < 0) || (displayValue < 0 && temporaryResult =="") || (displayValue < 0 && temporaryResult < 0) || (displayValue == "" && temporaryResult == "")) {
    minusplusBtn.disabled = true;
  } else if (displayjs.textContent == displayValue){
    displayValue = "-" + displayValue;
    displayjs.textContent = displayValue;
  } else if (displayjs.textContent == temporaryResult) {
    temporaryResult = "-" + temporaryResult;
    displayjs.textContent = temporaryResult;
  }
})

dotBtn.addEventListener('click', function(e){
  if (displayjs.textContent == "0" || displayjs.textContent == "" || displayValue == "") {
      displayValue = "0.";
      displayjs.textContent = displayValue;
    } else {
      displayValue = displayValue + ".";
      displayjs.textContent = displayValue;
    }
    dotBtn.disabled = true;

})

plusBtn.addEventListener('click', function(e){
  dotBtn.disabled = false;
  egal();
  operator = "+";
  console.log("operateur est : " + operator);
  add();
})

minusBtn.addEventListener('click', function(e){
  dotBtn.disabled = false;
  egal();
  operator = "-";
  console.log("operateur est : " + operator);
  subtract();
})

multBtn.addEventListener ('click', function(e){
  dotBtn.disabled = false;
  egal();
  operator = "*";
  console.log("operateur est : " + operator);
  multiply();
})

divideBtn.addEventListener ('click', function(e){
  dotBtn.disabled = false;
  egal();
  operator = "/";
  console.log("operateur est : " + operator);
  divide();
})

egalBtn.addEventListener('click', function(e){
  dotBtn.disabled = false;
  console.log(operator);
  egal();
  operator = "";
})

clearBtn.addEventListener('click', function(e){
  dotBtn.disabled = false;
  displayValue = "";
  temporaryResult = "";
  operator = "";
  displayjs.textContent = "";
})

function clickNumber(numberValue) {
  displayValue = displayValue + numberValue;
  displayjs.textContent = displayValue;
  minusplusBtn.disabled = false;
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
  } else if (operator == "/") {
    divide();
  }
}

function add() {
  displayValue = displayValue + " + " + temporaryResult;
  array = displayValue.split(" ");
  console.log(array);
  len = array.length;
    for (i = 0 ; i < len; i++) {
      if (array[2] == "") {
        temporaryResult = parseFloat(array[0]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else if (array[0] == "") {
        temporaryResult = parseFloat(array[2]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else {
        temporaryResult = parseFloat(array[0]) + parseFloat(array[2]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
    }
  }
}

function subtract() {
  displayValue = displayValue + " - " + temporaryResult;
  array = displayValue.split(" ");
  console.log(array);
  len = array.length;
    for (i = 0 ; i < len; i++) {
      if (array[2] == "") {
        temporaryResult = parseFloat(array[0]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else if (array[0] == "") {
        temporaryResult = parseFloat(array[2]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else {
        temporaryResult = parseFloat(array[2]) - parseFloat(array[0]);
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
          temporaryResult = parseFloat(array[0]);
          displayjs.textContent = temporaryResult;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
        } else if (array[0] == "") {
          temporaryResult = parseFloat(array[2]);
          displayjs.textContent = temporaryResult;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
        } else {
          temporaryResult = parseFloat(array[0]) * parseFloat(array[2]);
          displayjs.textContent = temporaryResult;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
      }
    }
}

function divide() {
  displayValue = displayValue + " / " + temporaryResult;
  array = displayValue.split(" ");
  console.log(array);
  len = array.length;
    for (i = 0 ; i < len; i++) {
      if (array[2] == "") {
        temporaryResult = parseFloat(array[0]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else if (array[0] == "") {
        temporaryResult = parseFloat(array[2]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      } else {
        temporaryResult = parseFloat(array[2]) / parseFloat(array[0]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      }
    }
}
