// Adding an event listener to the  dom
const load = () => {
  document.addEventListener("DOMContentLoaded", () => {
    fetchData();
  });
};
//fetching data  from the public API
const fetchData = () => {
  fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((response) => response.json())
    .then((data) => {
      data.forEach(listCharacters);
    });
};
//Displaying the characters names form the API
const listCharacters = (data) => {
  const div = document.querySelector("#characters");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.innerHTML = data.name;
  li.style.cursor = "pointer";
  ul.appendChild(li);
  div.appendChild(ul);
  li.addEventListener("click", () => {});
};
load();
