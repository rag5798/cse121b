const templesElement = document.querySelector('#recipes');
let recipeList = [];

const displayRecipes = async (recipes) => {
    recipes.forEach(recipe => {
        let article = document.createElement('article');
        article.setAttribute('id', 'article')
        let h3 = document.createElement('h2');
        h3.textContent = recipe.Name;
        let instructionTitle = document.createElement('h3');
        instructionTitle.textContent = 'Instructions';
        let ingredientTitle = document.createElement('h3');
        ingredientTitle.textContent = 'Ingredients'
        let img = document.createElement('img');
        img.setAttribute('src', recipe.ImageUrl);
        img.setAttribute('alt', recipe.Name);
        img.setAttribute('id', 'recipeImage');
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(ingredientTitle);
        recipe.IngredientList.forEach(ingredient => {
            let ingredients = document.createElement('li');
            ingredients.textContent = ingredient;
            article.appendChild(ingredients);
        });
        article.appendChild(instructionTitle);
        recipe.InstructionList.forEach(instruction => {
            let instructions = document.createElement('li');
            instructions.textContent = instruction;
            article.appendChild(instructions);
        });
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