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
  li.addEventListener("click", () => {
    quotes(data);
  });
};
const quotes = (data) => {
  let quote = [...data.quotes];
  let lenght = quote.length;
  const figure = document.querySelector("#quote");
  const blockquote = document.createElement("blockquote");
  blockquote.className = "blockquote";
  for (i = 0; i < lenght; i++) {
    const p = document.createElement("p");
    const q = document.createElement("q");
    q.innerHTML = quote[i];
    const figcaption = document.createElement("figcaption");
    figcaption.innerHTML = data.name;
    figcaption.className = "blockquote-footer";
    p.appendChild(q);
    blockquote.appendChild(p);
    p.appendChild(figcaption);
    figure.appendChild(blockquote);
  }
};
load();
