var sget = require("sget");


function userInput() {
	console.log("This program will ask for three numbers and then order the three numbers in descending order.\n")
	var numberOne = sget("Please enter your first number.\n").trim();
	var numberTwo = sget("Please enter your second number.\n").trim();
	var numberThree = sget("Please enter your third number.\n").trim();
	var numberArray = [];
	numberArray.push(numberOneInt); numberArray.push(numberTwoInt); numberArray.push(numberThreeInt);
	checkNumbers();
}
	
function checkNumbers() {
	if()

}

function orderNumbers(){ 
	orderedNumbers = numberArray.sort(function(a, b){return a-b});
	console.log("\nThe order of your numbers is " + orderedNumbers + ".");
	//testForNumber();
}

function isANumber(numberInput){
	for (i=0, i < numberArray.length, i++){
		if (isNaN(input)){

	}

}

