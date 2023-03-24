// Way 1:
// ******
import { TravelFare } from "./49.1_Modularization-Exporting.js";

// Way 2:
// ******
// We can also handle multiple imported modules as shown below:
// import { totalTravelFare, TravelFare } from "./49.1_Modularization-Exporting.js";

console.log(totalTravelFare(1000,10));
tf= new TravelFare();
console.log(tf.totalTravelFare(1000,10));