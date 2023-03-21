const ExploreMealDbApi = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
ExploreMealDbApi()
const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        const mealdiv = document.createElement('div');
        mealdiv.classList.add('col');
        mealdiv.innerHTML = `
        <div class="col">
        <div class="card">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
        `;
        mealsContainer.appendChild(mealdiv);
    })
}