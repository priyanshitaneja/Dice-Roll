// 1st dice
var randomNumber1= Math.random();
randomNumber1*=6;
randomNumber1=Math.floor(randomNumber1)+1; 
// Random no. btw 1 & 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png to dice6.png

var randomImageSource= "images/" + randomDiceImage; //images/dice1.png to images/dice6.png

// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute('src',randomImageSource);

document.getElementsByClassName('img1')[0].setAttribute('src',randomImageSource);


// 2nd dice
var randomNumber2= Math.floor(Math.random()*6)+1;
 
var randomImageSource2= "images/dice" + randomNumber2 + ".png";

document.getElementsByClassName('img2')[0].setAttribute('src',randomImageSource2);

if(randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
} else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
} else {
    document.querySelector("h1").innerHTML="DRAW !";
}