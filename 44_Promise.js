// A promise is an in-built JS object that may produce a single value some time in the future.

// A promise can be:

    // resolved - promise succeeded

    // rejected - promise failed

    // pending - Hasn't been resolved or rejected yet

// A promise is an object that may produce a single value some time in the future.

// Promise can be created using  new Promise(). Lets understand it with an example.

function getTrip(location) {
// So, here is a function getTrip() which is taking some parameter 'location'
  return new Promise(function (resolve, reject) {  
  // Promise to return some data.
  // Within this function, we are returning a 'Promise object' which is not an actual data itself - but the promise of returning 'some data' in future. Inside this promise object, as its attribute value - there is a nameless function, which takes two parameters : resolve and reject. 
    if (location == "ooty") {
      resolve("Trip to " + location);
      // If the value of location == "ooty", then we resolve our promise and return the data
      // ("Trip to " + location)
    } else {
      reject(new Error("Some error occured"));
      // Else, we reject our promise and return the data (new Error("Some error occured")).
      // Inside this data, we are throwing an error object with error message "Some error occured".
    }
  });
}

//Calling the getTrip() function.
// This getTrip() function is ultimately going to return us som data - at the end.
getTrip("ooty").then(
  function (data) {
    console.log(data);
  })  
  // If everything goes well - our promise is resolved and the function returns us some data - then we take that data and use it inside a function placed inside .then() 
  .catch (
  function (error) {
    console.log(error.message);
  }
  // If there is some error in the getTrip() function code or our promise gets rejected then, we recieve an error object.
  // That error object is used as a parameter in a nameless function inside .catch()
);

// Output: Trip to ooty
