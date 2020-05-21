let twoBtn = document.getElementById('twobtn');
let fourBtn = document.getElementById('fourbtn');

console.log(twoBtn);
console.log(fourBtn);

twoBtn.addEventListener('click', function(e){
  let nbrA = 2;
  console.log(nbrA);
})

fourBtn.addEventListener('click', function(e){
  let nbrB = 4;
  console.log(nbrB);
})

function add() {
  nbrA + nbrB;
}
