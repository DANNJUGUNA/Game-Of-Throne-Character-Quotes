const load=()=>{
  document.addEventListener('DOMContentLoaded',()=>{
    
  })
}
const fetchData = () => {
  fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
