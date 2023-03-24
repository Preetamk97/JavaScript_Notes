// In JavaScript, all errors are objects of type error. These objects carry the information related to the error, including the stack trace.

// Whenever an exceptional event occurs, the browser environment generates the error object and throws it. The moment an error object is thrown, further execution of program is stopped. 

// Error handling is important, as unhandled errors can lead to abrupt termination of the program. 

// Now let us understand how to handle these errors. These errors can be handled by using try-catch block.

function validateName(name) {
    try {
        if (name.Match(/[\$\#]/)) {// error occurs here
            /* All the below lines of try do not run 
                as error was thrown in previous line*/
            return false;
        }
        else {
            return true;
        }
    }
    catch (error) {
        // code for Handling error
        console.log(error.message);
        if (error instanceof TypeError)
            console.log("Type Error Occurred");
        else if (error instanceof RangeError)
            console.log("Range Error Occurred");
        else if (error instanceof SyntaxError)
            console.log("Syntax Error Occurred");
        else
            console.log("Some other Error Occurred");
    }
    finally{
        console.log("Cleaning up resources");
    }
}
validateName("Josh")

// The code that can throw an error should be enclosed inside the try block. A try block should be immediately followed by a catch block.

// A catch block is an error handler which can handle the error. 

// The error object thrown from try block will be passed as parameter to catch block.

// In the above case, when validateName() throws an error because of wrong method name, the error object is created and thrown. This error object is caught by the catch block and performs appropriate handling of error.

// Once the error object has been thrown, the next immediate lines in the try block will not be executed and the error will be immmediately handled by the catch block.

// Inside the catch block, we are checking the type of the error object by using instanceof operator and handling them separately.

// Finally:
//********* */

// An error inside a try block causes the rest of the code to be skipped. This might lead to some important parts of the code not being executed.

// There may be some important code which must be executed in all the conditions.

// In such situations, the finally block plays an important role. The finally block ensures that the code will be executed, irrespective of whether an error has occurred or not.

// Note: A try block should be always followed by either a catch block or a finally block or both.