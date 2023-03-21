const sportsContainer = () =>{
    fetch('https://www.thesportsdb.com/api/v1/json/3/searchevents.php?e=Arsenal_vs_Chelsea')
    .then(res => res.json())
    .then(data => displaySports(data.event))
}
sportsContainer()
const displaySports = (data) =>{
    data.forEach(element => {
        console.log(element)
        const sportcontainer = document.getElementById('container');
        const div = document.createElement('div');
        div.classList.add('area')
        div.innerHTML = `
            <h3>Event Id : ${element.idEvent}</h3>
            <h3>Event Name : ${element.strEvent}</h3>
            <h3>Event Season : ${element.strSeason}</h3>
            <h3>Event Date : ${element.dateEvent}</h3>
        
        `
        sportcontainer.appendChild(div);
    });
}