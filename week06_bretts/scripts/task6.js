/* Lesson 6 - Student Program Random Jokes - Brett Snyder */

// Get the day of the week from the current date
let today = new Date();
let dayOfWeek = today.getDay();

// Add day of the week to the message variable
let message = '';
switch (dayOfWeek) {
  case 0:
    message = 'Sunday';
    break;
  case 1:
    message = 'Monday';
    break;
  case 2:
    message = 'Tuesday';
    break;
  case 3:
    message = 'Wednesday';
    break;
  case 4:
    message = 'Thursday';
    break;
  case 5:
    message = 'Friday';
    break;
  case 6:
    message = 'Saturday';
    break;
}

// Assign the value of the second message variable to the HTML element with an ID of message
let messageElement = document.getElementById('message');
messageElement.textContent = message;

// Global empty array variable to store a list of jokes
let jokeList = [];

// Create html elements for each joke in the jokeList array
function output(jokes) {
  jokes.forEach((joke) => {
    let article = document.createElement('article');
    let h2_1 = document.createElement('h2');
    h2_1.textContent = joke.setup;
    let h4_2 = document.createElement('h4');
    h4_2.textContent = joke.punchline;
    let h5 = document.createElement('h5');
    h5.textContent = joke.type;
    article.appendChild(h2_1);
    article.appendChild(h4_2);
    article.appendChild(h5);
    let jokesElement = document.getElementById('jokes');
    jokesElement.appendChild(article);
  });
}

//  Fetch and output all jokes from the jokes.json file. Call joke totals
async function getJokes() {
  let response = await fetch('./data/jokes.json');
  let data = await response.json();
  jokeList = data;
  jokeList.sort(() => Math.random() - 0.5);
  jokeTotals(jokeList);
  output(jokeList);
}

// Reset and filter the jokes by type. Output selected list. Call joke list totals
function jokeType() {
  reset();
  let jokeTypeElement = document.getElementById('jokeType');
  let selectedValue = jokeTypeElement.value;
  if (selectedValue === 'all') {
    jokeTotals(jokeList);
    output(jokeList);
  } else {
    let filteredJokes = jokeList.filter((joke) => {
      return joke.type === selectedValue;
    });
    filteredJokes.sort(() => Math.random() - 0.5);
    jokeTotals(filteredJokes);
    output(filteredJokes);
  }
}

//  Get joke totals used from each joke type
function jokeTotals(jokeListUsed) {
  totalJokes = jokeListUsed.length;
  let totalJokesElement = document.getElementById('totalJokes');
  return (totalJokesElement.textContent = totalJokes);
}

// Reset joke list html
function reset() {
  let jokesElement = document.getElementById('jokes');
  jokesElement.innerHTML = '';
}

// jokeType event listener that calls the jokeType function
let jokeTypeElement = document.getElementById('jokeType');
jokeTypeElement.addEventListener('change', jokeType);

// Call the getJokes function to start the fun
getJokes();
