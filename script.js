let twoBtn = document.getElementById('twobtn');
let fourBtn = document.getElementById('fourbtn');
let plusBtn = document.getElementById('plusbtn');
let displayjs = document.getElementById('display');
let egalBtn = document.getElementById('egalbtn');

console.log(twoBtn);
console.log(fourBtn);
console.log(displayjs);
let nbrA = 0;
let nbrB = 0
let displayValue = "";

//quand on clique sur 2, le 2 apparait dans le display.
//Aussi display value vaut 2
twoBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = displayValue + 2;
})

//quand on clique sur 4, le 4 apparait dans le display.
//Aussi display value vaut 4
fourBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = displayValue + 4;
})

plusBtn.addEventListener('click', function(e){
  displayValue = displayjs.textContent = displayValue + "+";
})

egalBtn.addEventListener('click', function(e){
  console.log(displayValue);

  let array = displayValue.split("+");
    console.log(array);

      let nbx = Math.floor(array[0]);
      let nby = Math.floor(array[1]);
      let result = nbx + nby;
      console.log(nbx, nby);
      console.log(result);


})
