//woohoo lets start this one now...

var sget = require("sget");
var weekTemps = [];
console.log("\nEnter the temperatures for each day of the week and this program will calculate the average of the week for you!");
userInput();

function userInput(){
	for(i = 0; i < 7; i++){
		var todaysTemp = Number(sget("The temperature for day " + (i + 1) + " is: ").trim());
			if(checkIfNumber(todaysTemp)){
			weekTemps.push(todaysTemp);
			} else {
				i--;
				console.log("That is not a number-please try again!")
			}
		}
	calculateAverage();
}

function calculateAverage(){
	var total = 0;
	for (var i = 0; i < weekTemps.length; i++){
		total += weekTemps[i];
		var average = total/7;
	}
	console.log("The average temperature for the week was " + average + ".");	
}


function checkIfNumber(todaysTemp){
	if(todaysTemp === parseInt(todaysTemp)){
		return true;
	} else{
		return false;
	}
}
