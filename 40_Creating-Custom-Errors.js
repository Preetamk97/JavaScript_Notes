// We can also programmatically create our own errors and throw them.

// This can be done by creating a new object of Error class and passing our own name and message to it.

function validateName(name) {
    try {
        
        if (name.match(/\$/)) {    
            // var err = new Error();      
            // err.name = "customMadeError";   //You can pass the message or not it is optional
            // err.message ="Name should not contain $";
            // throw err;
            throw new Error("Name should not contain $");
        }

        else {
            return true;
        }
    }
    catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
    finally{
        console.log("Cleaning up resources");
    }
}
validateName("Hello$");