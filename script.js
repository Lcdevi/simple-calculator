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
  nbr = 2;
  console.log(nbr);
})

fourBtn.addEventListener("click", function(){
  nbr = 4;
  console.log(nbr);
})

plusBtn.addEventListener("click", function(){
  operator = "+";
  newNbrA = nbr;
  newNbrB = nbr;
  console.log(operator);
})

egalBtn.addEventListener("click", function(){
  let sum = add(newNbrA, newNbrB);
  console.log(sum);

})

function add(a,b){
  return a + b;
}
