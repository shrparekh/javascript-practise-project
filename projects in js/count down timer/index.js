const enddate = "1 may 2024  5:30 ";
document.getElementById("end-date").innerHTML = enddate;
const inputs = document.querySelectorAll("input");

const clock = () => {
  const end = new Date(enddate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) return;
  inputs[0].value = Math.floor(diff / 3600 / 24); // to calculate nunmber of days
  inputs[1].value = Math.floor(diff / 3600) % 24;
  inputs[2].value = Math.floor(diff / 60) % 60;
  inputs[3].value = Math.floor(diff) % 60;
};
clock();

setInterval(() => {
  clock();
}, 1000);
