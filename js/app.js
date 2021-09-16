"use strict";

let user = prompt("Yo whats your name?");
alert("Your name is: " + user);

function gameBox() {
  let score = 0;
  let answer1 = prompt("Is Jordan from Maine?");
  if (answer1.toLowerCase() == "yes" || answer1.toLowerCase() == "y") {
    alert("Try again");
  } else if (answer1.toLowerCase() == "no") {
    alert("You're correct, I am from Indiana");
    score++;
  }
  let answer2 = prompt("Did Jordan sail around the world?");
  if (answer2.toLowerCase() == "yes") {
    alert("Only in my dreams");
  } else if (answer2.toLowerCase() == "no") {
    alert("You're correct, I'm not much for water");
    score++;
  }
  let answer3 = prompt("Did Jordan play Lacrosse in school?");
  if (answer3.toLowerCase() == "yes") {
    alert("Partner, I don't even know the rules of the game");
  } else if (answer3.toLowerCase() == "no") {
    alert("Obviously, You could tell Basketball was more my style");
    score++;
  }
  let answer4 = prompt("Can Jordan build a PC?");
  if (answer4.toLowerCase() == "yes") {
    alert("A fellow gamer I see");
    score++;
  } else if (answer4.toLowerCase() == "no") {
    alert("Your lack of faith disturbs me");
  }
  let answer5 = prompt("Is Jordan's dream job at Google?");
  if (answer5.toLowerCase() == "yes") {
    alert("Even after looking it up, you still got the answer wrong?!");
  } else if (answer5.toLowerCase() == "no") {
    alert("I am more of an Apple guy");
    score++;
  }
}

function numberBox() {
  for (let i = 4; i >= 1; i--) {
    let answer6 = +prompt("How many bones has Jordan broken?");
    console.log(answer6);
    let guess = 0;
    if (answer6 > guess) {
      alert("A little too high");
      answer6;
    } else if (answer6 === guess) {
      alert("You got it right");
      score++;
      break;
    }
  }
  for (let i = 6; i >= 1; i--) {
    let answer7 = prompt("What is my favorite NBA teams?").toLocaleLowerCase();
    console.log(answer7);
    let favteam = ["pacers", "raptors", "lakers"];
    if (
      answer7 === favteam[0] ||
      answer7 === favteam[1] ||
      answer7 === favteam[2]
    ) {
      alert("Correct, do you like them too?");
      score++;
      break;
    } else if (
      answer7 !== favteam[0] &&
      answer7 !== favteam[1] &&
      answer7 !== favteam[2]
    ) {
      alert("Keep guessing you got this");
    }
  }
}

//call games
gameBox();
numberBox();

//Goodbye message
alert("Thanks for playing along " + user + " Your score was " + score);
