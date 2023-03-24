// Local scope is when a variable is accessible only within a function. This is also called function scope.

// In JavaScript, any variable declared with the var keyword inside a function, is considered local. However, if the variable is created with var outside a function, it still behaves like a global variable.

//example:
function validateTravellerPassword(password) {
  for (var i = 0; i < password.length; i++) {

  }
}

function validateTravellerName(name) {
  console.log("The value of i is " + i);
  for (var i = 0; i < name.length; i++) {

  }
  console.log("The value of new i is " + i);
}

validateTravellerPassword("password");
validateTravellerName("Josh");


