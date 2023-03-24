// We can simplify chaining of promises using a concept called as async-await.

function bookFlight() {
    return new Promise(function (resolve) {
        setTimeout(resolve(5600), 2000);
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}

// Without using Async-Await:
// ***************************
// function getTotal(){
// bookFlight()
//     .then(function (flightData) { return bookHotel(flightData) })
//     .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
// }

// Using Async-Await:
// ******************

async function getTotal(){
    var flightData = await bookFlight();
    var cumulativeData = await bookHotel(flightData);
    console.log(" Total is " + cumulativeData);
}

getTotal()

// We can see how this has simplified promise chaining. Whenever we have await, the code will wait for the promise to be resolved/rejected. 

// Note: await can be used only inside async functions
