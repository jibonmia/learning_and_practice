const countryNames= () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayData(data))
}
countryNames()
const displayData = countrys => {
    countrys.forEach(element => {
        const countryContainer = document.getElementById('country-box');
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <img src="${element.flags.png}" alt="">
            <h4> NAME: ${element.name.common}</h4>
            <p> Capital: ${element.capital}</p>
            <button onClick="loadCountryDetail('${element.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    });
}
const loadCountryDetail = code =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountrys(data[0]))
}
const displayCountrys = country =>{
    const countryDetails = document.getElementById('coutry-details');
    const div = document.createElement('div');
    div.innerHTML = `
        <h2>region: ${country.region}</h2>
    `;
    countryDetails.appendChild(div);
}