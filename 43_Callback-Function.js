// Callback functions are those functions which are passed as a parameter to another function and invoked after the other function has completed it's execution.

// Consider the below code:

function display(){
    console.log("Let's go to Trip");
};
setTimeout(display,3000);

// Here, we are not invoking display() anywhere! display is being invoked automatically by the setTimeout. We can see that display() is invoked or called after 3000 milliseconds. Thus here display is called as a callback function.

// A callback is a function which will get executed automatically after some other function gets executed completely. Thus, it is also called as call-after.

// Callback Hell:
// **************
// What if a callback has a callback? While doing multiple asynchronous operations, the callback get nested to each other which leads to callback hell.

// Callback function can not be chained together which leads to nested callback while calling it multiple times which leads to callback hell.

// To overcome the problem of callback hell, we use promise which we will see next.