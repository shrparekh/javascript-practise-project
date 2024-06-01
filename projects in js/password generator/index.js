const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqurstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "=_&^*($%@1!";

const getrandomdata = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};
let passwordinput = document.getElementById("pass-box");
let totalchar = document.getElementById("total-char");
let upperinput = document.getElementById("upper-case");
let lowerinput = document.getElementById("lower-case");
let numberinput = document.getElementById("numbers");
let symbolinput = document.getElementById("symbols");

const generatepassword = (password = "") => {
  if (upperinput.checked) {
    password += getrandomdata(upperSet);
  }
  if (lowerinput.checked) {
    password += getrandomdata(lowerSet);
  }
  if (numberinput.checked) {
    password += getrandomdata(numberSet);
  }
  if (symbolinput.checked) {
    password += getrandomdata(symbolSet);
  }
  if (password.length < totalchar.value) {
    return generatepassword(password);
  }
  passwordinput.innerText = password;
};

document.getElementById("btn").addEventListener("click", function () {
  generatepassword();
});
