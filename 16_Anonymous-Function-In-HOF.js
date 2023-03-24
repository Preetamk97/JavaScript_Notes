// We have seen that we can pass one function as a parameter to another function. Usually, for such purposes we can create a function without a name. Such functions without a name are called anonymous functions. For example:

function greet(choice){
	choice();
}
greet(function(){ console.log("Hello World")});
// Hello World

// Here we can see that the function which is being passed as a parameter does not have a name.
