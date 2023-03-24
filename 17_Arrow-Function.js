// An arrow function is a concise way of writing a function. Arrow functions are anonymous functions as they don't have a name.

// Use Case 1:
/************* */

function greet(choice){ 
    choice();
 } 
 greet(function(){ console.log("Hello World") }); // Hello World   //Anonymous Function
 greet(()=>{ console.log("Hello World") }); // Hello World      // Arrow Function 


// Use Case 2: 
/************* */

// If code is in multiple lines, we need to have {}.

calculateCost = (ticketPrice, noOfPerson)=>{
    totalCost= ticketPrice * noOfPerson;
    return totalCost;
}
console.log(calculateCost(500, 2));
// 1000

// Use Case 3:
/************* */

// If the code is single line, we don't need {}. 

trip = () => "Let's go to trip."
console.log(trip());
// Let's go to trip.

// Use Case 4:
/************* */

// If only one parameter, we don't need ().

trip = place => "Trip to " + place;
console.log(trip("Paris"));
// Trip to Paris


// Use Case 5:
/************* */

// if only one parameter, we can simply use '_' and not use a variable name also

trip = _ => "Trip to " + _;
console.log(trip("Japan"));
// Trip to Japan
