/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Robert Goettman';
let cuurentYear = new Date().getFullYear();
let profilePicture = 'images/me_2.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year')
const imageElement = document.getElementById('image');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
let favoriteFoods = [];
foodElement.textContent = favoriteFoods;
var newFavoriteFood = "Sushi";
favoriteFoods.push(newFavoriteFood);
foodElement.textContent += "<br>" + newFavoriteFood;
favoriteFoods.shift();
foodElement.textContent += "<br>" + favoriteFoods.join("<br>");
favoriteFoods.pop();
foodElement.textContent += "<br>" + favoriteFoods.join("<br>");





