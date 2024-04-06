const recipeElement = document.querySelector('#recipes');
let recipeList = [];

const setUserRecipe = () => {
    let userMadeName = document.querySelector('#name').value;
    let userMadeIngredients = document.querySelector('#ingredients').value;
    let userMadeInstructions = document.querySelector('#instructions').value;
    let userMadeImage = document.querySelector('#image').value;
    let userIngredientList = userMadeIngredients.split(',');
    let userInstructionsList = userMadeInstructions.split(',');
    let data = {
        "Name": `${userMadeName}`,
        "IngredientList": userIngredientList,
        "ImageUrl": `${userMadeImage}`,
        "InstructionList": userInstructionsList
    };
    recipeList.push(data);
    reset();
    displayRecipes(recipeList);
    document.querySelector('#name').value = '';
    document.querySelector('#ingredients').value = '';
    document.querySelector('#instructions').value = '';
    document.querySelector('#image').value = '';
    
}

const reset = () => {
    recipeElement.innerHTML = '';
}


document.querySelector('#submit').addEventListener('click', (event) => {
    if (document.querySelector('#name').value === '' || 
        document.querySelector('#ingredients').value === '' || 
        document.querySelector('#instructions').value === '' || 
        document.querySelector('#image').value === '') {
        event.preventDefault();
    } else {
        setUserRecipe();
    }
});


const displayRecipes = (recipes) => {
    recipes.forEach(recipe => {
        let article = document.createElement('article');
        article.setAttribute('id', 'article');
        let h3 = document.createElement('h2');
        h3.textContent = recipe.Name;
        let instructionTitle = document.createElement('h3');
        instructionTitle.textContent = `Instructions for ${recipe.Name}`;
        let ingredientTitle = document.createElement('h3');
        ingredientTitle.textContent = `Ingredients of ${recipe.Name}`;
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
        recipeElement.appendChild(article);
    });
}

const getRecipes = async () => {
    const response = await fetch('https://raw.githubusercontent.com/rag5798/cse121b/main/data/recipes.json');
    const data = await response.json();
    recipeList = data;
    displayRecipes(recipeList);
}

getRecipes();
