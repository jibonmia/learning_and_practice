const loadPhones = async() =>{
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone'
    const res = await fetch(url)
    const data = await res.json()
    displayphones(data.data)
}
loadPhones()
const displayphones = (phones) =>{
    console.log(phones);
    const phonsContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
        <div class="card">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${phone.phone_name}</h5>
          <p class="card-text">${phone.slug}</p>
        </div>
      </div>
        `;
        phonsContainer.appendChild(phoneDiv);
    });
    
}