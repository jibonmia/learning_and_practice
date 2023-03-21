const ExploreMealDbApi = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
ExploreMealDbApi()
const displayMeals = meals => {
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealdiv = document.createElement('div');
        mealdiv.classList.add('col');
        mealdiv.innerHTML = `
        <div onClick="cardDetails(${meal.idMeal})" class="card">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          </div>
        </div>
      </div>
        `;
        mealsContainer.appendChild(mealdiv);
    })
}
const rearchData = () => {
  const inputData = document.getElementById('input-data');
  const inputText = inputData.value;
  ExploreMealDbApi(inputText);
  inputText.value = '';
}
const cardDetails = (mealid) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`;
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.meals[0]))

}