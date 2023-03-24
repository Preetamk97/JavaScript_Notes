// Arrow in forEach()
//******************** */

// the forEach() function of an array takes another function as parameter and invokes the function for every item in the array.

placesToVisit= ["Paris", "New York",  "Switzerland"];
placesToVisit.forEach(place => console.log("Trip to " + place));
// Trip to Paris
// Trip to New York
// Trip to Switzerland


// Arrow in map()
//*************** */

// We know that an array object has a .map() function that creates a new array based on what the passed callback function does.

placesToVisit= ["Paris", "New York",  "Switzerland"];
placesUpperCase = placesToVisit.map(place => place.toUpperCase());
console.log(placesUpperCase);
// ["PARIS", "NEW YORK", "SWITZERLAND"]


// Arrow in filter()
//****************** */

placesToVisit = ["Paris", "New York",  "Switzerland"];
filteredPlace = placesToVisit.filter(place => place.length > 5);
console.log(filteredPlace);
// [ 'New York', 'Switzerland' ]



// Arrow in find()
//*************** */

// .find() function returns the first element in the array based on what is passed as callback function.

placesToVisit = ["Paris", "New York",  "Switzerland"];
findPlace = placesToVisit.find(place => place.length > 5);
console.log(findPlace);
// "New York"
