// A variable is said to be in global scope when it is accessible

// -    throughout the program,

// -    across functions,

// -    across files

// All variables in JavaScript are global by default.

//example:
function validateTravellerPassword(password) {
    for (i = 0; i < password.length; i++) {
    }
    // i = password.length
}
function validateTravellerName(name) {

    console.log("The value of i is "+i);   

    for (i = 0; i < name.length; i++) {   // i = 0
    }
    // i = name.length
    console.log("The value of new i is "+i);
}
validateTravellerPassword("12345");   // i = 5
validateTravellerName("Jack");    // i = 4