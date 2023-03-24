//example:
placesToVisit = ["Paris", "New York", "Switzerland"];

// We can easily access the values stored in an array using the index position of the data

console.log(placesToVisit[0]);
// Paris
console.log(placesToVisit[2]);
// Switzerland

// We can also destructure an existing array 
numArr=[100,200,300];
var [a,b,c]=numArr;
// the numArr is now destructured and individual values are stored in the individual variables.
console.log(a);
console.log(b);
console.log(c);

