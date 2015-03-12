//woohoo lets start this one now...

var sget = require("sget");
var weekTemps = [];
console.log("\nEnter the temperatures for each day of the week and this program will calculate the average for you!");


function userInput(){
	for(i = 0; i < weekTemps.length;){
		var todaysTemp = sget("The temperature for day " + i + " is: ").trim();
			if (isANumber){
				i++;
			} else {
				console.log("That isn't a number!  Please try again...");
			}
			calculateAverage();
}}


function isANumber(){


}


function calculateAverage(){

	
}

