const addbutton = document.querySelector("#addbtn");
const main = document.querySelector("#main");

const savenotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  console.log(notes);
  const data = [];
  notes.forEach((note) => {
    data.push(note.value);
  });
  if (data.length === 0) {
    localStorage.removeItem("notes");
  } else {
    localStorage.setItem("notes", JSON.stringify(data));
  }
};

addbutton.addEventListener("click", function () {
  addnote();
});

const addnote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
  <div class="tool">
    <i class=" save fa-solid fa-floppy-disk"></i>
    <i class=" trash fa-regular fa-trash-can"></i>
  </div>
  <textarea>${text}</textarea>
`;
  note.querySelector(".trash").addEventListener("click", function () {
    note.remove();
    savenotes();
  });
  note.querySelector(".save").addEventListener("click", function () {
    savenotes();
  });
  main.appendChild(note);
  savenotes();
};

// (function () {
//   const lsnotes = JSON.parse(localStorage.getItem("notes"));
//   if (lsnotes === null) {
//     addnote();
//   } else {
//     lsnotes.forEach((lsnote) => {
//       addnote(lsnote);
//     });
//   }
// })();
window.addEventListener("load", function () {
  const lsnote = JSON.parse(localStorage.getItem("notes"));
  if (lsnote === null) {
    addnote();
  } else {
    lsnote.forEach((lsnote) => {
      addnote(lsnote);
    });
  }
});
