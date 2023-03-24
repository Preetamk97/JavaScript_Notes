// Apart from exporting , we can also do an default export. The advantage is that while importing, it can be imported with any name. For example:

export default class TravelFare {
	totalTravelFare(baseFare, taxPercentage){
		var finalFare;
		finalFare = baseFare*(1+taxPercentage/100);
		return finalFare;
	}
}

// To import:
// **********
// import travel from "49.3_Modularization-Default-Export.js";

// There can be only one default export per file.
// While importing one should NOT use { } for default export. Else it will cause an error.

 
