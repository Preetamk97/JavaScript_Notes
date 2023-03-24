/* -------------------------------------------------------------------------- */
/*                             Creating an Object                             */
/* -------------------------------------------------------------------------- */

var empOne = {
    name : "John",
    empNumber : 1001,
    emailId : "John@gmail.com",
    swipeIn(){console.log("Swipe In by "+this.name)}
};

/* -------------------------------------------------------------------------- */
/*                 How to access the properties of an object ?                */
/* -------------------------------------------------------------------------- */

console.log(empOne.empNumber);  //1001
empOne.empNumber=1002;          
console.log(empOne.empNumber);  //1002
empOne.swipeIn();               //Swipe In by John


// Alternate Way:
//**************** */

console.log(empOne["empNumber"]);  //1002
empOne["empNumber"]=1003;          
console.log(empOne["empNumber"]);  //1003

// Note: object[property] access should be used mainly when the property names are having space, hyphen, or one that starts with a number.