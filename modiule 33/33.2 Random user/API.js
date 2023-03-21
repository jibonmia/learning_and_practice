function randomUser(){
    fetch('https://randomuser.me/api/?gender=female')
    .then(res => res.json())
    .then(data => displayuser(data.results[0]))
}
function displayuser(data){
    const userContainer = document.getElementById('user-container');
    const div = document.createElement('div');
    div.classList.add('crasy')
     div.innerHTML= `
        <h2>Name: ${data.name.first} ${data.name.last}</h2>
        <h5>Gender: ${data.gender}</h5>
        <h>Loketon: ${data.location.city}</h5>
     `
     userContainer.appendChild(div);
}