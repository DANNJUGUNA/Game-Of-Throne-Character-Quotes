const load=()=>{
  document.addEventListener('DOMContentLoaded',()=>{
    fetchData();
  })
}
const fetchData = () => {
  fetch("https://api.gameofthronesquotes.xyz/v1/characters")
    .then((response) => response.json())
    .then((data) =>{
      data.forEach(element => {
        listCharacters(element);
      });
    });
};
