const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#msg");
const youscore = document.querySelector("#you");
const compscore = document.querySelector("#computer");
let userscore = 0;
let computerscore = 0;
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    console.log("choice was clicked", userchoice);
    playgame(userchoice);
  });
});

const playgame = (userchoice) => {
  console.log("user choice is =", userchoice);
  let computerchoice = getcompchoice();
  console.log("comp choice is =", computerchoice);

  if (userchoice === computerchoice) {
    gamedraw();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = computerchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = computerchoice === "scissors" ? false : true;
    } else {
      userwin = computerchoice === "rock" ? false : true;
    }
    showwinner(userwin, userchoice, computerchoice);
  }
};

const getcompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomindex = Math.floor(Math.random() * 3);
  return options[randomindex];
};

const gamedraw = () => {
  message.innerText = `the game is draw`;
};

const showwinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userscore++;

    youscore.innerText = userscore;
    message.innerText = `user picked ${userchoice} and computer ${computerchoice} so winner is user`;
    message.style.backgroundColor = "green";
  } else {
    computerscore++;
    compscore.innerText = computerscore;
    message.innerText = `user picked ${computerchoice} and computer ${userchoice} so winner is computer `;
    message.style.backgroundColor = "red";
  }
};
