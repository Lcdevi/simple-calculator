let zeroBtn = document.getElementById('zerobtn');
let oneBtn = document.getElementById('onebtn');
let twoBtn = document.getElementById('twobtn');
let threeBtn = document.getElementById('threebtn');
let fourBtn = document.getElementById('fourbtn');
let plusBtn = document.getElementById('plusbtn');
let minusBtn = document.getElementById('minusbtn');
let divideBtn = document.getElementById('dividebtn');
let displayjs = document.getElementById('display');
let resultjs = document.getElementById('result');
let egalBtn = document.getElementById('egalbtn');
let clearBtn = document.getElementById('clearbtn');

//console.log(twoBtn);
//console.log(fourBtn);
//console.log(displayjs);
//let nbrA = 0;
//let nbrB = 0
let displayValue = "";
let resultValue = "";

zeroBtn.addEventListener('click', function(e){
  if (displayValue > 0) {
    displayValue = displayjs.textContent = displayValue + 0;
  }
})

oneBtn.addEventListener('click', function(e){
    displayValue = displayjs.textContent = displayValue + 1;
})

//quand on clique sur 2, le 2 apparait dans le display.
//Aussi display value vaut 2
twoBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = displayValue + 2;
})

threeBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = displayValue + 3;
})

//quand on clique sur 4, le 4 apparait dans le display.
//Aussi display value vaut 4
fourBtn.addEventListener('click', function(e){
  if (resultValue > 0 || resultValue < 0) {
    displayValue = displayjs.textContent = resultValue + 4;
  } else {displayValue = displayjs.textContent = displayValue + 4;}
})

plusBtn.addEventListener('click', function(e){
  if (resultValue === "") {
    displayValue = displayjs.textContent = displayValue + " + ";
  } else if (resultValue > 0 || resultValue < 0) {
    displayValue = displayjs.textContent = resultValue + " + ";
  }
})

minusBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = displayValue + " - ";
})

divideBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = displayValue + " / ";
})

egalBtn.addEventListener('click', function(e){
  resultValue = eval(displayValue);
  displayValue = displayjs.textContent = displayValue + " = " + resultValue;
  displayValue = "";
})

clearBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = "";
})
