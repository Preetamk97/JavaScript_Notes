// An API is a set of defined rules that explain how computers or applications communicate with one another. In crux, it decides what response should be given for which requests. APIs sit between an application and the web server, acting as an intermediary layer that processes data transfer between systems.

// Node has it's own set of API's and the browser itself has it's own set of API's. The APIs provided to our JS code by the browser are called as Web APIs.

// There are many Web APIs. Some of which we will cover in the course are:

    // XMLHttpRequest

    // DOM

    // Notification

    // Storage

// JavaScript is single threaded programming language which means that all code will be executed in sequence. Thus if a code takes 2 seconds to run, the browser will freeze for those 2 seconds. This causes a bad user experience. Thus, we have to execute code asynchronously whenever it takes a longer time to execute.

// The DOM API gives us a facility to execute code asynchronously. This API gives us a method called 'setTimeout(functionName,timeInMilliseconds)' -- which allow us to execute a function after a specific time delay.

// Consider the below code:

function display(){
    console.log("Let's go to Trip");
};
console.log("Before");
setTimeout(display,3000)
console.log("After");

// The program will print "After" before printing "Let's go to Trip". The console.log ("After") does not wait for the previous step to complete. This is called Asynchronous Execution.