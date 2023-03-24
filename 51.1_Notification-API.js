// Notification API
// ****************
// We can create desktop notifications in JavaScript using the Notification API

function notifyMe(){
    
    // Step 1: User needs to grant permission to website for displaying notifications. In order to request the permission from the user requestPermission() of Notification object can be used as show below:
    Notification.requestPermission(()=>{
        // user approved.
        if(Notification.permission === "granted"){
            // In order to create notification, we need an object of Notification which can be created as shown below:
            // new Notification(title,body)
            // body:Defines notification message
            new Notification("New Mail",{body:"You have 1 unread email"});           
        }
        //user denied
        else if (Notification.permission === 'denied') {
            alert("Please grant permission");
        }
        else { // Notification.permission === 'default'
             // default — The user choice is unknown and therefore the browser will act as if the value were denied.
            alert("Please grant permission");
        }
    });   
}