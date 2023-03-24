// Block Scope
//************ */

// In the validateTravellerName() or validateTravellerPassword() functions,  since the variable i has been declared with var keyword, it is accessible throughout the function.

// A variable with a block scope is accessible only within the block of statements and not throughout the function.

// We can create such block scoped variables with the let keyword as shown below.

function validateTravellerName(name) {
    for (let i = 0; i < name.length; i++) {
    }
    console.log(i); // This will give an error as i is not accessible outside the for block.
}
validateTravellerName("Josh");
