const item = document.querySelector("#item");
const todobox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (e) {
  if (e.key == "Enter") {
    down(this.value);
    this.value = "";
  }
});
const down = (item) => {
  const newlist = document.createElement("li");
  newlist.innerHTML = `  
  ${item}
<i class="fa-solid fa-xmark"></i>`;
  newlist.addEventListener("click", function () {
    this.classList.toggle("done");
    savedown();
  });
  newlist.querySelector("i").addEventListener("click", function () {
    newlist.remove();
    savedown();
  });

  todobox.appendChild(newlist);
  savedown();
};

const savedown = () => {
  const items = document.querySelectorAll("#to-do-box li ");
  console.log(items);
  const data = [];
  items.forEach((item) => {
    data.push(item.textContent.trim());
  });
  localStorage.setItem("items", JSON.stringify(data));
};

window.addEventListener("load", function () {
  const windowload = JSON.parse(this.localStorage.getItem("items"));
  if (windowload) {
    windowload.forEach((itemtext) => {
      down(itemtext);
    });
  }
});
