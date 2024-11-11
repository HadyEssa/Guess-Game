"use strict";
let HideenNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
const printMasseg = function (masseg) {
  document.querySelector(".message").textContent = masseg;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  // when no number

  if (!guess) {
    printMasseg("🙅‍♂️ No Number!");
    // wen player game win
  } else if (guess === HideenNumber) {
    // document.querySelector(".message").textContent = "🎉 correct number";
    printMasseg("🎉 correct number");
    document.querySelector(".number").textContent = HideenNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = highscore;
  } else if (guess !== HideenNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent = guess > HideenNumber
      // ? " This is hight Number 📈"
      //  : " This is Low Number 📉"
      // );
      printMasseg(
        guess > HideenNumber
          ? " This is hight Number 📈"
          : " This is Low Number 📉"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      printMasseg(" You Lost The Game😿");
      document.querySelector(".score").textContent = 0;
    }
  }
  //when guess is hight
  //   } else if (guess > HideenNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent =
  //         " This is hight Number 📈";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " You Lost The Game😿";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //     // when guess is Low
  //   } else if (guess < HideenNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = " This is Low Number 📉";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = " You Lost The Game😿";
  //       document.querySelector(".score").textContent = 0;
  //     }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  HideenNumber = Math.trunc(Math.random() * 20 + 1);
  // document.querySelector(".message").textContent = " Start Guessing ...";
  printMasseg(" Start Guessing ...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
