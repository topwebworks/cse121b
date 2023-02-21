/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myself = {
  // Step 2: Inside of the object, add a property named name with a value of your name as a string
  name: 'Brett Snyder',
  // Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
  photo: 'images/brett_sm.jpg',
  // Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
  favoriteFoods: ['chicken', 'steak', 'sushi'],
  // Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
  hobbies: ['computers', 'drawing', 'cooking'],
  // Step 6: Add another property named placesLived with a value of an empty array
  placesLived: [
    // Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
    // Step 8: For each property, add appropriate values as strings
    // Step 9: Add additional objects with the same properties for each place you've lived
    {
      place: 'Arizona',
      length: '18 years',
    },
    {
      place: 'Vermont',
      length: '23 years',
    },
    {
      place: 'Utah',
      length: '10 years',
    },
  ],
};

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
let name = document.getElementById('name');
name.innerHTML = myself.name;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
let photo = document.getElementById('photo');
photo.src = myself.photo;

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
photo.alt = myself.name;

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFoods = document.getElementById('favorite-foods');
for (let i = 0; i < myself.favoriteFoods.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = myself.favoriteFoods[i];
  // Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
  favoriteFoods.appendChild(li);
}

// Step 6: Repeat Step 4 for each hobby in the hobbies property
let hobbies = document.getElementById('hobbies');
for (let i = 0; i < myself.hobbies.length; i++) {
  let li = document.createElement('li');
  li.innerHTML = myself.hobbies[i];
  // Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
  hobbies.appendChild(li);
}

let placesLived = document.getElementById('places-lived');
// Step 8: For each object in the <em>placesLived</em> property:
for (let i = 0; i < myself.placesLived.length; i++) {
  // - Create an HTML <dt> element and put its place property in the <dt> element
  // - Create an HTML <dd> element and put its length property in the <dd> element
  let dt = document.createElement('dt');
  let dd = document.createElement('dd');
  dt.innerHTML = myself.placesLived[i].place;
  dd.innerHTML = myself.placesLived[i].length;
  // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
  placesLived.appendChild(dt);
  placesLived.appendChild(dd);
}
