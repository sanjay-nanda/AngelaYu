var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var img1 = "images/dice" + String(randomNumber1) + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src", img1);

var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var img2 = "images/dice" + String(randomNumber2) + ".png";
document.getElementsByClassName("img2")[0].setAttribute("src", img2);

console.log(randomNumber1);
console.log(randomNumber2);

if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins";
}
else{
  document.querySelector("h1").textContent = "Draw";
}
