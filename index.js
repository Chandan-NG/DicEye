var num = Math.floor(Math.random()*6) + 1;

document.querySelector(".dice").src = `./images/dice${num}.png`;

document.querySelector(".number").innerHTML = num;

