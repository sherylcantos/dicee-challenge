var randomNumber1 = Math.floor(Math.random() * 6 + 1); //1-6

var randomDiceImg = "dice" + randomNumber1 + ".png"; //dice1.png - dic6.png

var randomImgSrc1 = "images/" + randomDiceImg; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImgSrc1);


var randomNumber2 = Math.floor(Math.random() * 6 + 1);

var randomImgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

 //if player wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "<em>🏆</em> Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! <em>🏆</em>";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


// document.getElementById("button").onclick = function() {location.reload()};
document.getElementById("button").onclick = function() {myFunction()};

function myFunction() {
  location.reload();
};


//if jQuery
// $("button").click(function(){
//   location.reload();
// });
