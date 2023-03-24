// AJAX
//*********/
// When we click on the submit button in a page, the entire page refreshes and causes a time delay when the request is sent to the server. AJAX is a technique for sending request to the server without involving a page refresh. Just like setTimeout() AJAX techniques are also asynchronous in nature. That means, while the request is sent to the server, the page will not freeze till we get the response back.

// Steps in AJAX 
//*************** */
// Our JS code can contact the server and send/fetch data - asynchronously - using the XMLHttpRequest API. We call this technique AJAX.

    // 1.  creating a 'new XMLHttpRequest()' object.

    // 2.  Open a URL using the request object

    // 3.  Mention what should happen when a response is received

    // 4.  Actually send the request

function placesToVisit () {
    var xhr = new XMLHttpRequest(); // 1.Create request object
    var url = "42.2_placesToVisit.json";
    xhr.open('GET', url); // 2.Open the URL
    xhr.onload = function () { // 3.Mention code to run when response is received
        console.log("The response from server is "+xhr.responseText);
        document.getElementById("places").innerText = xhr.responseText
    };
    xhr.send(); // 4.Send the Request
}

// Open 42.1_Ajax-Demo.html file with live server and observe the output on clicking of the button.
    