let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); //Math is a predefined class -> Generates a random number between 0 to 1;
  //We multiply with 3to make the range from 0 to 3. So that it takes an random number between 0 to 3.
  //Math.floor helps to make the number to a whole number
  //Rock, Paper, Scissors
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was a Draw. Play Again!";
  msg.style.backgroundColor = " #081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;;
    msg.style.backgroundColor = "red ";
  }
};

const playGame = (userChoice) => {
  console.log("User Choice", userChoice);
  //Generate computer choice -> Modular
  const compChoice = genCompChoice();
  console.log("Computer Choice", compChoice);

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //Comp scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //Comp scissors or rock
      userWin = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      //Comp rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
