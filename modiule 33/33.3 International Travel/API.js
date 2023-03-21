const countryNames= () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayData(data))
}
countryNames()
const displayData = countrys => {
    countrys.forEach(element => {
        console.log(element);
        const countryContainer = document.getElementById('country-box');
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h2> NAME: ${element.name.common}</h2>
            <img src="${element.flags.png}" alt="">
        `;
        countryContainer.appendChild(countryDiv);
    });
}