var player1 = Math.ceil(Math.random()*6);
var player2 = Math.ceil(Math.random()*6);
console.log(player1);
console.log(player2);


document.getElementsByTagName("img")[0].setAttribute('src',"./images/dice" + player1.toString() + ".png");
document.getElementsByTagName("img")[1].setAttribute('src',"./images/dice" + player2.toString() + ".png");

if (player1>player2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if (player2>player1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!"
}