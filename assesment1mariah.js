
/*
var sget = require("sget");
console.log("This program will ask for three numbers and then order the three numbers in ascending order.\n");
numbersToArray(getContactInput("Please enter a Name "), getContactInput("Phone Number "), getContactInput("Address"));


function userInput(message) {
	return Number(sget(message).trim());
	var numberOne = Number(sget("Please enter your first number.\n").trim());
	var numberTwo = Number(sget("Please enter your second number.\n").trim());
	var numberThree = Number(sget("Please enter your third number.\n").trim());
}

function numbersToArray (numOne, numTwo, numThree){
	userInput()
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

*/

var sget = require("sget");
var numberArray = [];

console.log("This program will ask for three numbers and then order the three numbers in ascending order.\n")
var numberOne = sget("Please enter your first number.\n");
var numberTwo = sget("Please enter your second number.\n");
var numberThree = sget("Please enter your third number.\n");
numbersToArray();
	

function numbersToArray (){
	numberArray.push(numberOne);
	numberArray.push(numberTwo);
	numberArray.push(numberThree);
	orderNumbers();
}

function orderNumbers(){ 
	var orderedNumbers = numberArray.sort(function(a, b){return b-a});
	console.log("\nThe order of your numbers is " + orderedNumbers);
}