// Double Equals (==)
//******************** */

// Double equals compares the values only, irrespective of the data types. For example:

console.log('100' == 100)   // string & number
// true

var x = 5;   // number
var y = '5' // string
console.log(x == y)    // true


// Triple Equals (===)

// Triple equals test strict equality which means value and type both should be same.For example:

console.log('100' === 100)   // string & number
// false

var x = 5; // number
var y = '5' // string
console.log(x === y)  // false
