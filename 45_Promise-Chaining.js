// There are two promises: one to book flight and the other to book hotel. Each promise is resolving the amount of money spent for the booking.

function bookFlight(airline) {
    return new Promise(function (resolve, reject) {
        if (airline == "AirIndia") {
            setTimeout(resolve(5600), 2000);
        } else {
            reject(new Error("Flight can not be booked"))
        }
    })
}
function bookHotel(flightPrice) {
    return new Promise(function (resolve) {
        setTimeout(resolve(7000 + flightPrice), 1000);
    })
}
// We want the bookHotel Promise to be resolved only after the bookFlight Promise is resolved and calculate the total price.
// To ensure that the second promise is resolved only after the first promise is resolved, we can chain these promises together as shown:

// bookFlight("AirIndia")
bookFlight("Indigo")
    .then(function (flightData) { return bookHotel(flightData) })   // The promise data returned by the first .then() is chained and passed on the next then.
    .then(function (cumulativeData) { console.log(" Total is " + cumulativeData) })
    .catch(e => console.log(e.message))

// Total is 12600

// Rejecting chained promises:
// ***************************
// What will happen if any of promises fail in the chained promises?

// Promises after the failed promise will not be resolved. It will throw an error and promises in chain will not be executed after it.
