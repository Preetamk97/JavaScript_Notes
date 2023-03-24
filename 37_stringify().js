// stringify(): This function is used to convert object to JSON string

var jScores = { "Java": 70, "JavaScript": 80, "CSS": 30 };  
var tScores = JSON.stringify(jScores);     //will convert object to JSON string

// console.log(tscores);
// The above code gives error.
// You cannot print the variable who stores a JSON string in it.

console.log(typeof(jScores));                   // returns Object
console.log(typeof(tScores));                   // returns String
