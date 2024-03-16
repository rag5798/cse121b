/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2;
}

function subtractNumbers (){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2)
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

function multiplyNumbers(){
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    let result = multiply(factor1, factor2);
    document.querySelector('#product').value = result;
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

function divideNumbers(){
    let number1 = Number(document.querySelector('#dividend').value);
    let number2 = Number(document.querySelector('#divisor').value);
    let result = divide(number1, number2);
    document.querySelector('#quotient').value = result;
}
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
document.querySelector('#getTotal').addEventListener('click', calculateTotal);

function calculateTotal() {
    const subtotal = Number(document.querySelector('#subtotal').value);

    const isMember = document.querySelector('#member').checked;

    let total;
    if (isMember) {
        total = subtotal * 0.8;
    } else {
        total = subtotal;
    }

    const formattedTotal = total.toFixed(2);
    document.querySelector('#total').textContent = formattedTotal;
}

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = sequence.toString();
/* Output Odds Only Array */
let oddArray = sequence.filter(num => num % 2 == 1);
document.querySelector('#odds').textContent = oddArray.toString();
/* Output Evens Only Array */
let evenArray = sequence.filter(num => num % 2 == 0);
document.querySelector('#evens').textContent = evenArray.toString();
/* Output Sum of Org. Array */
let sumOfSequence = sequence.reduce((sum, number) => sum + number);
document.querySelector('#sumOfArray').textContent = sumOfSequence.toString();
/* Output Multiplied by 2 Array */
let multipliedArray = sequence.map(number => number * 2);
document.querySelector('#multiplied').textContent = multipliedArray.toString();
/* Output Sum of Multiplied by 2 Array */
let sumOfMultipliedArray = multipliedArray.reduce((sum, number) => sum + number);
document.querySelector('#sumOfMultiplied').textContent = sumOfMultipliedArray.toString();