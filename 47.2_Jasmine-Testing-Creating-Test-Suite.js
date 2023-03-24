// Test suite:
// ***********
// A test suite is a grouping of relevant test cases which are executed together. We can create a test suite with the help of built-in function describe().

// describe(title, function(){})

// It accepts two parameters:

    // 1.   A title (of string type) or name of the test suite

    // 2.   A function containing specs which belong to this suite


// For example, we can create a test suite for totalTravelFare as shown below.

describe('TotalTravelFare calculation Suite:',function(){
    // Test spec:
    // *********
    // A test spec is the actual test case. Now we will write spec inside the suite, with the help of Jasmine function "it".
    
    // it()
    // ****
        // It accepts two parameters:
    
        // 1.   Title or name of the test spec
    
        // 2.   Function containing spec code
    
    // We can create a test spec for totalTravelFare as shown below.
    
    it('Test Case 1: Inputs are correct',function(){
        expect(totalTravelFare(1000,20)).toEqual(1200);  // toEqual = Matcher
    });
});
    
// Matchers are Javascript functions which are used to compare the expected and the actual output in any test case.

// JavaScript Matchers Functions:                            
// ===============================

    // -   toBe(expected) : expect the actual value to be === to the expected value

    // -   toBeDefined() : expect the actual value to be defined. (Not undefined)

    // -   toBeFalsy() : expect the actual value to be falsy

    // -   toBeTruthy() : expect the actual value to be truthy.

    // -   toBeGreaterThan(expected) : expect the actual value to be greater than the expected value.

    // -   toBeLessThan(expected) : expect the actual value to be less than the expected value.

    // -   toEqual(expected) : expect the actual value to be equal to the expected, using deep equality comparison.

    // -   toMatch(expected) : expect the actual value to match a regular expression

    // -   toThrow(expected) : expect a function to throw something
    
    
// Installing Jasmine and Karma:
// ******************************

    // So far we have just written some test cases with .js extension. To run these test cases we need to install jasmine and karma. Karma is a test runner tool. Node has a something called npm ( Node Package Manager ) which helps us install such tools.

    // Type the command in the vscode terminal: 'npm install -g karma jasmine-core'

    // This creates a node-modules folder + files package.json & package-lock.json

    // Once Karma is successfully installed type 'karma init' in the command prompt. This will launch the Karma Tool.

    // Answer the questions: 1.jasmine  2.no  3.Microsoft Edge  4.Give paths of both the .js files.  5.Press Enter and this generates a Karma config file as per your specs.

    // To start the test type 'karma start' in the terminal. This launches your preffered browser which shows 'Karma Connected'. The result of your test cases will be visible in the VS Code terminal.