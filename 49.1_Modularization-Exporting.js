// To export a function to be used in a different file, just add the keyword export in front of the function. 

export function totalTravelFare(baseFare, taxPercentage){
	var finalFare;
	finalFare = baseFare*(1+taxPercentage/100);
	return finalFare;
}

// To export a class to be used in a different file, just add the keyword export in front of the class.

export class TravelFare {
	totalTravelFare(baseFare, taxPercentage){
		var finalFare;
		finalFare = baseFare*(1+taxPercentage/100);
		return finalFare;
	}
}

// Next, let's take a look at how to import and use these exported elements.