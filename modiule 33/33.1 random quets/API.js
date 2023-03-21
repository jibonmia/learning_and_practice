function kanyeApi(){
    fetch('https://api.kanye.rest')
   .then(res => res.json())
   .then(data => displayData(data))
}
function displayData(data){
   const itemContainer = document.getElementById('item');
   const h2 = document.createElement('h2');
   h2.innerText = data.quote;
   itemContainer.appendChild(h2);
}