const load=()=>{
  document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
  })
}
const fetchData = () => {
  fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((response) => response.json())
    .then((data) =>{
      data.forEach(listCharacters);
    });
};
const listCharacters=(data)=>{
  const div=document.querySelector("#characters");
  let ul=document.createElement("ul");
  let li=document.createElement('li');
  li.innerHTML=data.name;
  ul.appendChild(li);
  div.appendChild(ul);
}
load();