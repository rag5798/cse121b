const templesElement = document.querySelector('#recipes');
let recipeList = [];

const displayRecipes = async (recipes) => {
    recipes.forEach(recipe => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent = recipe.Name;
        let img = document.createElement('img');
        img.setAttribute('src', recipe.ImageUrl);
        img.setAttribute('alt', recipe.Name);
        let list = document.createElement('li')
        list.textContent = recipe.IngredientList;
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(list);
        templesElement.appendChild(article);
    });
}

const getRecipes = async () => {
    const response = await fetch('');
    const data = await response.json();
    recipeList = data;
    console.log(templeList);
    displayRecipes(templeList);
}

getRecipes();