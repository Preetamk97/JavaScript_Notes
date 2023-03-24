// push()
//******* */

// push() is used to insert a new element at the end of the array.

places = ["Paris", "New York"];
places.push("Switzerland");
console.log(places);
// ["Paris", "New York", "Switzerland"]


// pop()
//******* */

// pop() is used to remove last element of array.

places = ["Paris", "New York",  "Switzerland"];
places.pop();
console.log(places);
// ["Paris", "New York"]


// indexOf()
//********** */

// indexOf() is used to find index of given elements.

places = ["Paris", "New York",  "Switzerland"];
console.log(places.indexOf("New York"));
// 1

// Note: indexOf() will return -1 if the value is not present


// splice(m, n)
//************** */

// splice(m, n) will remove n elements from m index position.

places = ["Paris", "New York",  "Switzerland"];
places.splice(1, 2); // This will remove 2 elements from index 1
console.log(places);
// ["Paris"]


// forEach()
//*********** */

// forEach() is used to interate over an array. This is a Higher Order Function. It will take a function and invoke that function on all elements of array.

places = ["Paris", "New York",  "Switzerland"];
places.forEach(function(place) {
    console.log(place);
    }
);
// Paris
// New York
// Switzerland

