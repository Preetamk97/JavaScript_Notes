// map()
//****** */

// The map() array function generates a new array. It iterates over each element in the array, just like forEach. It invokes a function on each element, just like forEach.

// But the difference, is forEach just invokes function on each item in the array. It does not create a new array. Hence, map() creates a new array based on what the function does.

placesToVisit= ["Paris", "New York",  "Switzerland"];
function display_uppercase(place) {
    return place.toUpperCase();
}
placesUpparCase = placesToVisit.map(display_uppercase);
console.log(placesUpparCase);
// [ 'PARIS', 'NEW YORK', 'SWITZERLAND' ]


// filter()
//********** */

// What if we want to get all words whose length is greater than 5?

// For this we can use filter(). filter accepts a function. It iterates over each element and creates a sub array if the function returns true.

placesToVisit= ["Paris", "New York",  "Switzerland"];

function filterPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}

filteredPlaces = placesToVisit.filter(filterPlaces);
console.log(filteredPlaces );
// [ 'New York', 'Switzerland' ]


// find()
//******** */

// Array has a method called find(). It returns the first element in the array which satisfies a given condition.

placesToVisit= ["Paris", "New York",  "Switzerland"];

function findPlaces(val) {
    if (val.length > 5) {
        return true;
    }
}

foundPlaces = placesToVisit.find(findPlaces);
console.log(foundPlaces);
