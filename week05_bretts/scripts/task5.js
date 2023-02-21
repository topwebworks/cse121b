/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
let today = new Date();

// Step 2: Declare another variable to hold the day of the week
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
let dayOfWeek = today.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let message_1 = '';

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
  message_1 = 'Hang in there!';
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
  message_1 = 'Woohoo!  It is the weekend!';
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let message_2 = '';

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
  case 0:
    message_2 = 'Sunday';
    break;
  case 1:
    message_2 = 'Monday';
    break;
  case 2:
    message_2 = 'Tuesday';
    break;
  case 3:
    message_2 = 'Wednesday';
    break;
  case 4:
    message_2 = 'Thursday';
    break;
  case 5:
    message_2 = 'Friday';
    break;
  case 6:
    message_2 = 'Saturday';
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message_1
let message_1Element = document.getElementById('message_1');
message_1Element.textContent = message_1;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message_2
let message_2Element = document.getElementById('message_2');
message_2Element.textContent = message_2;

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples) {
  temples.forEach((temple) => {
    // - Creates an HTML <article> element
    let article = document.createElement('article');
    // - Creates an HTML <h3> element and add the temple's templeName property to it
    let h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    // - Creates an HTML <h4> element and add the temple's location property to it
    let h4_1 = document.createElement('h4');
    h4_1.textContent = temple.location;
    // - Creates an HTML <h4> element and add the temple's dedicated property to it
    let h4_2 = document.createElement('h4');
    h4_2.textContent = temple.dedicated;
    // - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
    let img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    // - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
    article.appendChild(h3);
    article.appendChild(h4_1);
    article.appendChild(h4_2);
    article.appendChild(img);
    let templesElement = document.getElementById('temples');
    // - Appends the <article> element to the HTML element with an ID of temples
    templesElement.appendChild(article);
  });
}

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples() {
  // Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
  let response = await fetch(
    'https://byui-cse.github.io/cse121b-course/week05/temples.json'
  );
  // Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
  let data = await response.json();
  templeList = data;
  // Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
  output(templeList);
}
getTemples();

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  let templesElement = document.getElementById('temples');
  templesElement.innerHTML = '';
}

// Step 8: Declare a function named sortBy that does the following:
function sortBy() {
  // - Calls the reset function
  reset();

  // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
  if (document.getElementById('sortBy').value === 'templeNameDescending') {
    templeList.sort((a, b) => {
      if (a.templeName < b.templeName) {
        return 1;
      } else if (a.templeName > b.templeName) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (
    document.getElementById('sortBy').value === 'templeNameAscending'
  ) {
    templeList.sort((a, b) => {
      if (a.templeName < b.templeName) {
        return -1;
      } else if (a.templeName > b.templeName) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  // - Calls the output function passing in the sorted list of temples
  output(templeList);
}

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
let sortByElement = document.getElementById('sortBy');
sortByElement.addEventListener('change', sortBy);

/* STRETCH */

// Add a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

// ---I will add a filter in my student project next, so not going to do it here.---
