let apiurl = "https://api.github.com/users/";
const main = document.querySelector("#main");
const username = async (username) => {
  const response = await fetch(apiurl + username);
  const data = await response.json();
  console.log(data);
  const card = `<div class="card">
  <div>
    <img class="avatar" src="${data.avatar_url}" alt="Florin pop" />
  </div>
  <div class="user-info">
    <h2>${data.name}</h2>
    <p>${data.bio}</p>
    <ul class="info">
      <li>${data.followers}<strong>followers</strong></li>
      <li>${data.following}<strong>following</strong></li>
      <li>${data.public_repos}<strong>repos</strong></li>
    </ul>
    <div id="repos">
     
    </div>
  </div>
</div>`;
  main.innerHTML = card;
  getrepos(username);
};
username("taylorotwell");

const getrepos = async (username) => {
  const repos = document.querySelector("#repos");
  const response = await fetch(apiurl + username + "/repos");
  const data = await response.json();
  console.log(data);
  data.forEach((item) => {
    const element = document.createElement("a");
    element.classList.add("repo");
    element.href = item.html_url;
    element.innerText = item.name;
    element.target = "_blank";
    repos.appendChild(element);
  });
};

const formsubmit = () => {
  const submit = document.querySelector("#search");
  if (submit.value !== "") {
    username(submit.value);
    submit.value = "";
  }
  return false; //that page does not refresh
};

{
  /* <a class="repo" href="#" target="_blank">repo 1</a>
<a class="repo" href="#" target="_blank">repo 1</a>
<a class="repo" href="#" target="_blank">repo 1</a> */
}
