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
   
    let likes=0;
    let dislike=0;
    //creating button like
    let btnlike = document.createElement("button");
    btnlike.className = "like_btn";
    let span = document.createElement("span");
    span.id = "icon";
    let sp = document.createElement("i");
    sp.className = "far fa-thumbs-up";
    let span1 = document.createElement("span");
    span1.id="count"
    span1.innerHTML=`${likes} likes`
    span.appendChild(sp);
    span.appendChild(span1);
 
    btnlike.appendChild(span);
    p.appendChild(btnlike);
   
    //create button dislike
    let btndislike = document.createElement("button");
    btndislike.className = "like_btn";
    let span0 = document.createElement("span");
    span0.id = "icon";
    let sp2 = document.createElement("i");
    sp2.className = "far fa-thumbs-down";
    span0.appendChild(sp2);
    btndislike.appendChild(span0)
    let span2 = document.createElement("span");
    span2.id="count"
    span2.innerHTML=`${dislike} dislikes`
    btndislike.appendChild(span2)
    p.appendChild(btndislike);
    p.appendChild(q);
    blockquote.appendChild(p);
    p.appendChild(figcaption);
    figure.appendChild(blockquote);
  }
};
load();
