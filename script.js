let oneBtn = document.getElementById('onebtn');
let twoBtn = document.getElementById('twobtn');
let threeBtn = document.getElementById('threebtn');
let fourBtn = document.getElementById('fourbtn');
let plusBtn = document.getElementById('plusbtn');
let minusBtn = document.getElementById('minusbtn');
let multBtn = document.getElementById('multbtn');
let displayjs = document.getElementById('display');
let egalBtn = document.getElementById('egalbtn');

console.log(twoBtn);
console.log(fourBtn);
console.log(displayjs);
let nbrA = 0;
let nbrB = 0
let displayValue = "";
let temporaryResult = "";
let array = 0;
let operator = "";
let len = "";

// ***** 1 BUTTON *****
oneBtn.addEventListener('click', function(e){
  displayValue = displayValue + "1";
//  temporaryResult = displayValue;
  displayjs.textContent = displayValue;
  console.log("displayValue : " + displayValue);
  console.log("operateur est : " + operator);
})

// ***** 2 BUTTON *****
twoBtn.addEventListener('click', function(e){
  displayValue = displayValue + "2";
  displayjs.textContent = displayValue;
  console.log("displayValue : " + displayValue);
  console.log("operateur est : " + operator);
})

// ***** 3 BUTTON *****
threeBtn.addEventListener('click', function(e){
  displayValue = displayValue + "3";
  displayjs.textContent = displayValue;
  console.log("displayValue : " + displayValue);
  console.log("operateur est : " + operator);
})

// ***** 4 BUTTON *****
fourBtn.addEventListener('click', function(e){
  displayValue = displayValue + "4";
  displayjs.textContent = displayValue;
  console.log("displayValue : " + displayValue);
  console.log("operateur est : " + operator);
})

// ***** + BUTTON *****
plusBtn.addEventListener('click', function(e){
  egal();
  operator = "+";
  console.log("operateur est : " + operator);
  displayValue = displayValue + " + " + temporaryResult;
  console.log("displayValue : " + displayValue);

  array = displayValue.split(" ");
    console.log(array);
    len = array.length;
    for (i = 0 ; i < len; i++) {
/*
      if (array[i] == "+") {
        temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
        displayjs.textContent = temporaryResult;
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      }
      */
      if (array[i] == "+") {
        temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
        displayjs.textContent = temporaryResult;
        console.log("displayValue : " + displayValue);
      //  temporaryResult = displayValue;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);

      }
      //else {
        //displayjs.textContent = displayValue;
        //console.log("displayValue : " + displayValue);
      //}

    }

})

// ***** - BUTTON *****
minusBtn.addEventListener('click', function(e){
  egal();
  operator = "-";
  console.log("operateur est : " + operator);
  displayValue = displayValue + " - " + temporaryResult;
  console.log("displayValue : " + displayValue);

  array = displayValue.split(" ");
    console.log(array);
    len = array.length;
    for (i = 0 ; i < len; i++) {
/*
      if (array[i] == "+") {
        temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
        displayjs.textContent = temporaryResult;
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
      }
      */
      if (array[2] == "") {
        temporaryResult = Math.floor(array[0]);
        displayjs.textContent = temporaryResult;
        console.log("displayValue : " + displayValue);
      //  temporaryResult = displayValue;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);

      } else {
        temporaryResult = Math.floor(array[2]) - Math.floor(array[0]);
        displayjs.textContent = temporaryResult;
        console.log("displayValue : " + displayValue);
      //  temporaryResult = displayValue;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);

      }
      //else {
        //displayjs.textContent = displayValue;
        //console.log("displayValue : " + displayValue);
      //}
    }
})



// ***** X BUTTON *****

multBtn.addEventListener ('click', function(e){
  operator = "*";
  multiply();
})



// ***** = BUTTON *****

egalBtn.addEventListener('click', function(e){
    console.log(operator);
    egal();
})






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
  //    if (array[i] == "+") {
        temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
        displayjs.textContent = temporaryResult;
        displayValue = "";
        console.log("temporaryResult : " + temporaryResult);
        console.log("displayValue : " + displayValue);
  //    }
    }
}

function subtract() {
  displayValue = displayValue + " - " + temporaryResult;
  array = displayValue.split(" ");
  console.log(array);
  len = array.length;
    for (i = 0 ; i < len; i++) {
      if (array[2] == "" || array[0] == "") {
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
/*
egalBtn.addEventListener('click', function egal(e){
  console.log("displayValue : " + displayValue);

   array = displayValue.split(" ");
    console.log(array);
//    console.log("array 0 nest pas un nombre :" + isNaN(array[1]));


    let len = array.length;
    for (i = 0 ; i < len; i++) {
      if (array[i] == "+") {
        temporaryResult = Math.floor(array[i-1]) + Math.floor(array[i+1]);
        displayjs.textContent = temporaryResult;
        console.log("temporaryResult : " +temporaryResult);
      }

//      else {let mathNumber = Math.floor(array[i]);
//      console.log(mathNumber);
//    console.log("mathNumber nest pas un nombre :" + isNaN(mathNumber));}

    }


//      let nbx = Math.floor(array[0]);
//      let nby = Math.floor(array[2]);
//      let result = nbx + nby;
//      console.log(nbx, nby);
//      console.log(result);


})
*/


egal0Btn.addEventListener('click', function(e){

    console.log("operateur est : " + operator);

    if (operator == "+") {
    displayValue = displayValue + " + " + temporaryResult;
    console.log("displayValue : " + displayValue);

    array = displayValue.split(" ");
      console.log(array);
      let len = array.length;
      for (i = 0 ; i < len; i++) {
  /*
        if (array[i] == "+") {
          temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
          displayjs.textContent = temporaryResult;
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
        }
        */
        if (array[i] == "+") {
          temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
          displayjs.textContent = temporaryResult;
          console.log("displayValue : " + displayValue);
        //  temporaryResult = displayValue;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);

        }
        //else {
          //displayjs.textContent = displayValue;
          //console.log("displayValue : " + displayValue);
        //}
      }
    } else if (operator == "-") {
    displayValue = displayValue + " - " + temporaryResult;
    console.log("displayValue : " + displayValue);

    array = displayValue.split(" ");
      console.log(array);
      let len = array.length;
      for (i = 0 ; i < len; i++) {
  /*
        if (array[i] == "+") {
          temporaryResult = Math.floor(array[0]) + Math.floor(array[2]);
          displayjs.textContent = temporaryResult;
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);
        }
        */
        if (array[i] == "-") {
          temporaryResult = Math.floor(array[2]) - Math.floor(array[0]);
          displayjs.textContent = temporaryResult;
          console.log("displayValue : " + displayValue);
        //  temporaryResult = displayValue;
          displayValue = "";
          console.log("temporaryResult : " + temporaryResult);
          console.log("displayValue : " + displayValue);

        }
        //else {
          //displayjs.textContent = displayValue;
          //console.log("displayValue : " + displayValue);
        //}
      }

    }

})
