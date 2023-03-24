// In JavaScript, functions are actually objects. That means a function can be stored in a variable. For example:

funVariable= function myFunc(num1,num2) { 
    num3=num1*num2;
    return num3
}

// Invoking the Function 
console.log(funVariable(10,20));
// 200


// Since functions are treated as objects you can also pass them as a parameter to another function. For example, in the below code, we are passing the functions welcome() and goodbye() as parameters to the function greet()

function welcome(){console.log("Hello World");}
function goodbye(){console.log("See you later");}

function greet(choice){
choice();
}

greet(welcome);
greet(goodbye);


// Since functions are treated as objects, you can also return them from a function. For example, in the below code, we are returning the function welcome() ( stored in variable hello ) from a function greet():

function greetMe(){
	var hello=function welcomeMe(){console.log("Hello World");}
	return hello;
}

var retFunc=greetMe();
retFunc();


// Higher Order Functions:
//************************* */
// Functions which can either accept other functions as parameters or return other functions as parameters are called as Higher Order Functions. Many in-built functions in JS are Higher Order Functions.

 

// First Class Citizen:
//********************** */
// Any object which can be assigned, passed as a parameter and returned from a function is called a First Class Citizen in a programming language. Thus, all functions are First Class Citizens in JS.
