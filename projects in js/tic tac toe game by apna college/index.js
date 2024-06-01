const buttonbox = document.querySelectorAll(".box");
const resetbtn = document.querySelector("#reset-btn");
const newgamebtn = document.querySelector("#newgame-btn");
const msg = document.querySelector("#mess");
const msgcontianer = document.querySelector(".msg-container");
let turnx = true;
let count = 0;
let gamepattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [0, 4, 8],
];
const resetgame = () => {
  turnx = true;
  count = 0;
  enable();

  msgcontianer.classList.add("hide");
};

buttonbox.forEach((box) => {
  box.addEventListener("click", function () {
    console.log("button is clicked");
    if (turnx) {
      box.innerText = "x";
      box.style.color = "blue";
      turnx = false;
    } else {
      box.innerText = "0";
      box.style.color = "yellow";
      turnx = true;
    }
    box.disabled = true;
    // count++;
    let iswinner = gamewinner();
    if (count === 9 && !iswinner) {
      draw();
    }
  });
});

const draw = () => {
  msg.innerText = `the game is draw`;
  msgcontianer.classList.remove("hide");
  disabled();
};

const enable = () => {
  for (let box of buttonbox) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disabled = () => {
  for (let box of buttonbox) {
    box.disabled = true;
  }
};
const showwinner = (winner) => {
  msg.innerText = `congratulations the winner is ${winner}`;
  msgcontianer.classList.remove("hide");
  disabled();
};

const gamewinner = () => {
  for (let pattern of gamepattern) {
    // console.log(pattern);
    // console.log(pattern[0], pattern[1], pattern[2]);
    const val1 = buttonbox[pattern[0]].innerText;
    const val2 = buttonbox[pattern[1]].innerText;
    const val3 = buttonbox[pattern[2]].innerText;
    if (val1 != "" && val2 != "" && val3 != "") {
      if (val1 === val2 && val2 === val3) {
        console.log("winner", val1);
        showwinner(val1);
        // return ture;
      }
    }
  }
};
resetbtn.addEventListener("click", resetgame);
newgamebtn.addEventListener("click", resetgame);
