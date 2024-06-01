let audioelement = new Audio("./images/3.mp3.mp3");
// audioelement.play();
let songindex = 0;
const masterplay = document.getElementById("masterplay");
const progressbar = document.querySelector("#myprogressbar");
const gif = document.querySelector("#gif");
const mastersongname = document.querySelector("#mastersongname");
const songitems = Array.from(document.querySelectorAll(".songItem"));
const songitemplay = document.querySelectorAll(".songitemplay");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
let songs = [
  {
    songsname: "salam - e - isqa ",
    filepath: "./images/3.mp3.mp3",
    coverpath: "./images/cover.png.jpg",
  },
  {
    songsname: "ALL THE NIGHTS-by celio ",
    filepath: "./images/2.mp3.mp3",
    coverpath: "./images/cover1.png.jpg",
  },
  {
    songsname: "say my name ",
    filepath: "./images/1.mp3.mp3",
    coverpath: "./images/cover.png.jpg",
  },
  {
    songsname: "salam - e - isqa ",
    filepath: "./images/2.mp3.mp3",
    coverpath: "./images/cover4.png.jpg",
  },
  {
    songsname: "no way ",
    filepath: "./images/3.mp3.mp3",
    coverpath: "./images/cover3.png.jpg",
  },
  {
    songsname: "salam - e - isqa ",
    filepath: "./images/1.mp3.mp3",
    coverpath: "./images/cover4.png.jpg",
  },
  {
    songsname: "salam - e - isqa ",
    filepath: "./images/1.mp3.mp3",
    coverpath: "./images/cover4.png.jpg",
  },
];

songitems.forEach((item, i) => {
  item.getElementsByTagName("img")[0].src = songs[i].coverpath;
  item.getElementsByClassName("songname")[0].innerText = songs[i].songsname;
});

masterplay.addEventListener("click", () => {
  if (audioelement.paused || audioelement.currentTime <= 0) {
    audioelement.play();
    masterplay.classList.remove("fa-circle-play");
    masterplay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioelement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioelement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioelement.currentTime / audioelement.duration) * 100
  );

  progressbar.value = progress;
});

progressbar.addEventListener("change", () => {
  audioelement.currentTime = (progressbar.value * audioelement.duration) / 100;
});

songitemplay.forEach((item) => {
  item.addEventListener("click", (e) => {
    toplaysongs();
    if (!audioelement.paused) {
      audioelement.pause();
      item.classList.remove("fa-circle-pause");
      item.classList.add("fa-circle-play");
    } else {
      audioelement.src = `./images/${songindex + 1}.mp3.mp3`;
      audioelement.currentTime = 0;
      audioelement.play();
      // Remove the play icon and add the pause icon to the clicked item
      item.classList.remove("fa-circle-play");
      item.classList.add("fa-circle-pause");
    }

    songindex = parseInt(e.target.id);

    mastersongname.innerText = songs[songindex].songsname;

    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
  });
});

const toplaysongs = () => {
  songitemplay.forEach((item) => {
    item.classList.remove("fa-circle-pause");
    item.classList.add("fa-circle-play");
  });
};

next.addEventListener("click", () => {
  if (songindex >= 7) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  audioelement.src = `./images/${songindex + 1}.mp3.mp3`;
  mastersongname.innerText = songs[songindex].songsname;
  audioelement.currentTime = 0;
  audioelement.play();
  masterplay.classList.remove("fa-circle-pause");
  masterplay.classList.add("fa-circle-play");
});

previous.addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  audioelement.src = `./images/${songindex + 1}.mp3.mp3`;
  mastersongname.innerText = songs[songindex].songsname;
  mastersongname.innerText = songs[songindex].songsname;
  audioelement.play();
  masterplay.classList.remove("fa-circle-pause");
  masterplay.classList.add("fa-circle-play");
});

audioelement.addEventListener("ended", () => {
  songindex++;
  if (songindex > 7) {
    songindex = 0;
  }
  audioelement.src = `./images/${songindex + 1}.mp3.mp3`;
  mastersongname.innerText = songs[songindex].songsname;
  audioelement.play();
  masterplay.classList.remove("fa-circle-pause");
  masterplay.classList.add("fa-circle-play");
});
