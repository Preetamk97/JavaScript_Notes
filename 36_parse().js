// This function is used to convert JSON string into an JavaScript object

var json = '{ "firstName":"John", "lastName":"Doe"}';
var nameObj= JSON.parse(json);            //will convert JSON string into an JavaScript object

console.log(nameObj)
// { firstName: 'John', lastName: 'Doe' }

console.log(nameObj.firstName +" "+ nameObj.lastName );
// John Doe
