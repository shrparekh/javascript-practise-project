const questions = [
  {
    qus: "which of the following is the markup language",
    a: "HTML",
    b: "css",
    c: "java",
    d: "javascript",
    correct: "a",
  },
  {
    qus: "which year was javascript launched",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    qus: "what does css stands for",
    a: "hypertext markup language",
    b: "cascading style sheet",
    c: "jason object notation",
    d: "none of the above",
    correct: "b",
  },
];

let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quebox = document.getElementById("que-box");
const optioninout = document.querySelectorAll(".options");
const loadquestions = () => {
  if (index == total) {
    return endquiz();
  }
  reset();
  let data = questions[index];
  console.log(data);
  quebox.innerText = `${index + 1}) ${data.qus}`;
  optioninout[0].nextElementSibling.innerText = `${data.a}`;
  optioninout[1].nextElementSibling.innerText = `${data.b}`;
  optioninout[2].nextElementSibling.innerText = `${data.c}`;
  optioninout[3].nextElementSibling.innerText = `${data.d}`;
};

const submitquiz = () => {
  let data = questions[index];
  let ans = getanswer();
  if (ans === data.correct) {
    right++;
  } else {
    wrong++;
  }
  index++;
  loadquestions();
  return;
};
const getanswer = () => {
  let answer;
  optioninout.forEach((input) => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};
const reset = () => {
  optioninout.forEach((input) => {
    input.checked = false;
  });
};
const endquiz = () => {
  document.getElementById("box").innerHTML = `<h3> the game is over</h3>
  <h2>${right}/${total} are correct</h2`;
};

// initial call means page load  hote hi apne function call kardiya
loadquestions();
