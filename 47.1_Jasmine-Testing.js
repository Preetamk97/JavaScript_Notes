// Unit testing involves the execution of a JavaScript function to evaluate if the output returned is the expected one or not. It helps us to test if one or more features of a JavaScript function are working as per expectation.

// In this course we will use Jasmine unit testing framework.

// Let us consider a simple function totalTravelFare(baseFare, taxPercentage) as shown below:

function totalTravelFare(baseFare, taxPercentage){
	var finalFare;
	finalFare = baseFare*(1+taxPercentage/100);
	return finalFare;
}

// To test this code, we have to follow the below steps:

    // Step 1: A test suite should be created 

    // Step 2: Test specs should be created for all the possible scenarios

    // Step 3: Test suite should be executed with the help of Karma
