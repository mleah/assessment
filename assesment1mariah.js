var sget = require("sget");
console.log("This program will ask for three numbers and then order the three numbers in ascending order.\n")
userInput();


function userInput(){
	var numberOne = Number(sget("Please enter your first number.\n").trim());
	var numberTwo = Number(sget("Please enter your second number.\n").trim());
	var numberThree = Number(sget("Please enter your third number.\n").trim());
		
}

function numbersToArray (){
	
	var numberArray = [];
	numberArray.push(numberOne);
	numberArray.push(numberTwo);
	numberArray.push(numberThree); 
	orderNumbers(numberArray);
}


function orderNumbers(){ 
	var orderedNumbers = numberArray.sort(function(a, b){return b-a});
	console.log("\nThe order of your numbers is " + orderedNumbers + ".");
}