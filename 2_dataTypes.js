/* This code illustrates
the various data types*/
ticketCost = 100; // number
placeToVisit = 'New York';  // string
// a; // undefined
isGoing = true; // boolean

paragliding = null; // dataType : null
console.log(typeof(paragliding)) // object

man = {
    name: "Preetam",
    age : 25,
    profession: "Infosys - Systems Engineer",
    education:"Btech - Mechanical"
} 
console.log(typeof(man)) // object

doSomething = ()=>{
    console.log(ticketCost);
}
console.log(typeof(doSomething)) // function