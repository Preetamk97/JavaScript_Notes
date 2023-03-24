// Using + operator on strings will concatenate those two strings together into single string. For example:

console.log('hello' + ' world!') // 'hello world!'
console.log('Trip ' + 'to ' + 'Florida') // 'Trip to Florida'

// Even if any one of the value is string, it will convert other values into string first and concatenate them into single string later. For example:

console.log('Trip' + 100) // 'Trip100'
console.log('Trip ' + undefined) // 'Trip undefined' 
console.log('100'+20) //10020
console.log(null + 'Trip') // 'nullTrip'

