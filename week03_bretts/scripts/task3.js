/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  // Step 2: In the function, return the number sum of the parameters number1 and number2
  return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
  let addend1 = parseInt(document.getElementById('addend1').value);
  let addend2 = parseInt(document.getElementById('addend2').value);
  return add(addend1, addend2);
}

// Step 4: Assign the sum to an HTML form element with an ID of sum
let sum = document.getElementById('sum');

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
let addNumbersBtn = document.getElementById('addNumbers');
addNumbersBtn.addEventListener('click', function () {
  sum.value = addNumbers();
});

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtract = function (number1, number2) {
  return number1 - number2;
};

let subtractNumbers = function () {
  let minuend = parseInt(document.getElementById('minuend').value);
  let subtrahend = parseInt(document.getElementById('subtrahend').value);
  return subtract(minuend, subtrahend);
};

let difference = document.getElementById('difference');

let subtractNumbersBtn = document.getElementById('subtractNumbers');
subtractNumbersBtn.addEventListener('click', function () {
  difference.value = subtractNumbers();
});

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (number1, number2) => number1 * number2;

let multiplyNumbers = () => {
  let factor1 = parseInt(document.getElementById('factor1').value);
  let factor2 = parseInt(document.getElementById('factor2').value);
  return multiply(factor1, factor2);
};

let product = document.getElementById('product');

let multiplyNumbersBtn = document.getElementById('multiplyNumbers');
multiplyNumbersBtn.addEventListener('click', function () {
  product.value = multiplyNumbers();
});

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
function divide(number1, number2) {
  return number1 / number2;
}

function divideNumbers() {
  let dividend = parseInt(document.getElementById('dividend').value);
  let divisor = parseInt(document.getElementById('divisor').value);
  return divide(dividend, divisor);
}

let quotient = document.getElementById('quotient');

let divideNumbersBtn = document.getElementById('divideNumbers');
divideNumbersBtn.addEventListener('click', function () {
  quotient.value = divideNumbers();
});

// Step 9: Test all of the mathematical functionality of the task3.html page.
// Done

/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
let year = document.getElementById('year');
year.innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let array = [];
for (let i = 1; i <= 25; i++) {
  array.push(i);
}

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
let arrayElement = document.getElementById('array');
arrayElement.innerHTML = array;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
let odds = array.filter((number) => number % 2 !== 0);
let oddsElement = document.getElementById('odds');
oddsElement.innerHTML = odds;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
let evens = array.filter((number) => number % 2 === 0);
let evensElement = document.getElementById('evens');
evensElement.innerHTML = evens;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
let sumOfArray = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
let sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.innerHTML = sumOfArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
let multiplied = array.map((number) => number * 2);
let multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multiplied;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
let sumOfMultiplied = array
  .map((number) => number * 2)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
let sumOfMultipliedElement = document.getElementById('sumOfMultiplied');
sumOfMultipliedElement.innerHTML = sumOfMultiplied;
