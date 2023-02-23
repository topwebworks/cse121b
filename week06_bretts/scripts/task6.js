/* Lesson 6 - Student Program Random Jokes - Brett Snyder */

// add an array of adjectives to the message variable
let adjective = [
  'Absurd',
  'Bizarre',
  'Cheeky',
  'Corny',
  'Crazy',
  'Daffy',
  'Dippy',
  'Dizzy',
  'Dopey',
  'Foolish',
  'Goofy',
  'Insane',
  'Kooky',
  'Loony',
  'Mad',
  'Nutty',
  'Odd',
  'Offbeat',
  'Quirky',
  'Silly',
  'Surreal',
  'Unusual',
  'Wacky',
  'Weird',
  'Zany',
  'Amusing',
  'Batty',
  'Comical',
  'Curious',
  'Daft',
  'Freaky',
  'Funky',
  'Giddy',
  'Jocular',
  'Jolly',
];

// Randomly select an adjective and show it in the message variable
let randomAdjective = adjective[Math.floor(Math.random() * adjective.length)];
message = randomAdjective;

// Show the message in the html element with an ID of message
let messageElement = document.getElementById('message');
messageElement.textContent = message;

// Global empty array variable to store a list of jokes
let jokeList = [];

// Create html elements for each joke in the jokeList object array
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
  // Test local file
  // let response = await fetch('./data/jokes.json');
  let response = await fetch(
    'https://topwebworks.github.io/cse121b/week06_bretts/data/jokes.json'
  );
  let data = await response.json();
  jokeList = data;
  jokeList.sort(() => Math.random() - 0.5);
  jokeTotals(jokeList);
  output(jokeList);
}

// Reset and filter the jokes by type. Call joke list totals. Output selected list.
function jokeType() {
  reset();
  let jokeTypeElement = document.getElementById('jokeType');
  let selectedValue = jokeTypeElement.value;
  if (selectedValue === 'random') {
    jokeTotals(jokeList, selectedValue);
    output(jokeList);
  } else {
    let filteredJokes = jokeList.filter((joke) => {
      return joke.type === selectedValue;
    });
    filteredJokes.sort(() => Math.random() - 0.5);
    jokeTotals(filteredJokes, selectedValue);
    output(filteredJokes);
  }
}

//  Get joke totals and selected value condition from jokeType function.
function jokeTotals(jokeListUsed, selectedValue) {
  totalJokes = jokeListUsed.length;
  let totalJokesElement = document.getElementById('totalJokes');
  totalJokesElement.textContent = totalJokes;
  if (selectedValue) {
    let selectedJokeTypeElement = document.getElementById('selectedJokeType');
    selectedJokeTypeElement.textContent = selectedValue;
  }
}

// Reset joke list html. Called by jokeType filter function
function reset() {
  let jokesElement = document.getElementById('jokes');
  jokesElement.innerHTML = '';
}

// jokeType event listener that calls the jokeType function
let jokeTypeElement = document.getElementById('jokeType');
jokeTypeElement.addEventListener('change', jokeType);

// default jokeType value is random
let selectedJokeTypeElement = document.getElementById('selectedJokeType');
selectedJokeTypeElement.textContent = 'random';

// Call the getJokes function to start the fun
getJokes();
