let input = "";
const button = document.querySelectorAll(".btn");
let input2 = document.querySelector("input");

button.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      input = eval(input);
      input2.value = input;
    } else if (e.target.innerHTML == "C") {
      input = "";
      input2.value = input;
    } else {
      input = input + e.target.innerHTML;
      input2.value = input;
    }
  });
});
