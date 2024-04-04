const templesElement = document.querySelector('#recipes');
let recipeList = [];

const displayRecipes = async (recipes) => {
    recipes.forEach(recipe => {
        let article = document.createElement('article');
        article.setAttribute('id', 'article')
        let h3 = document.createElement('h3');
        h3.textContent = recipe.Name;
        let img = document.createElement('img');
        img.setAttribute('src', recipe.ImageUrl);
        img.setAttribute('alt', recipe.Name);
        img.setAttribute('id', 'recipeImage');
        let ingredientList = document.createElement('li')
        ingredientList.textContent = recipe.IngredientList;
        let instructionList = document.createElement('li');
        instructionList.textContent = recipe.InstructionList;
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(ingredientList);
        article.appendChild(instructionList);
        templesElement.appendChild(article);
    });
}

const getRecipes = async () => {
    const response = await fetch('https://raw.githubusercontent.com/rag5798/cse121b/main/data/recipes.json');
    const data = await response.json();
    recipeList = data;
    console.log(recipeList);
    displayRecipes(recipeList);
}

getRecipes();