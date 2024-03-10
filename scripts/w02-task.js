/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Robert Goettman';
let currentYear = new Date().getFullYear(); // Corrected typo
let profilePicture = 'images/me_2.jpg';

/* Step 3 - Element Variables */
var nameElement = document.getElementById('name');
var foodElement = document.getElementById('food');
var yearElement = document.querySelector('#year');
var imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Pizza', 'Sushi', 'Chicken', 'Pasta'];
const newFavoriteFood = "Rice";
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;

