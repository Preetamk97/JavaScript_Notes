// Consider the below object literal:

var empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com"
};


/* -------------------------------------------------------------------------- */
/*                                for..in loop                                */
/* -------------------------------------------------------------------------- */

// The for..in loop iterates over the object and gives the property values of the object. For example:

for (let property in empOne){
    console.log(empOne[property]);
}
// John
// 1001
// John@gmail.com


/* -------------------------------------------------------------------------- */
/*                              Object.values():                              */
/* -------------------------------------------------------------------------- */

// Object.values() will give all the values of an object in an array.

console.log(Object.values(empOne));
//[ 'John', 1001, 'John@gmail.com' ]


/* -------------------------------------------------------------------------- */
/*                            Object destructuring:                           */
/* -------------------------------------------------------------------------- */

// We can destructure an existing object into variables. If the variable is prefixed by three dots (...) then it is called a rest variable and can store more than one property.

let { name, ...rest }  = empOne
console.log(name)
 // 'John'
console.log(rest) 
// { empNumber: 1001, emailId: 'John@gmail.com' }
