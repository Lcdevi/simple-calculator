/*
let nbrA = Math.floor(prompt("Choose a number between 1 and 4"));
let nbrB = Math.floor(prompt("Choose a number between 1 and 4"));
let operator = prompt("choose an operator");

console.log(nbrA, nbrB, operator);

if (operator === "+") {
 let sum = nbrA + nbrB;
 console.log(sum);
}
*/

let twoBtn = document.querySelector("#twobtn");
let fourBtn = document.querySelector("#fourbtn");
let plusBtn = document.querySelector("#plusbtn");
let egalBtn = document.querySelector("#egalbtn");
let nbrB = 0;
let nbrA = 0;

twoBtn.addEventListener("click", function(){
  nbrA = 2;
  console.log(nbrA);
})

fourBtn.addEventListener("click", function(){
  nbrB = 4;
  console.log(nbrB);
})

plusBtn.addEventListener("click", function(){
  operator = "+";
  newNbrA = nbrA;
  newNbrB = nbrB;
  console.log(operator);
})

egalBtn.addEventListener("click", function(){
  let sum = newNbrA + newNbrB;
  console.log(sum);

})

function add(a,b){
  return a + b;
}
