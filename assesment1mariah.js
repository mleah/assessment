var sget = require("sget");
console.log("This program will ask for three numbers and then order the three numbers in descending order.\n");
var numberArray = [];
userInput();

function userInput() {
	var numberOne = Number(sget("Please enter your first number.\n").trim());
	var numberTwo = Number(sget("Please enter your second number.\n").trim());
	var numberThree = Number(sget("Please enter your third number.\n").trim());
	numberArray.push(numberOne); numberArray.push(numberTwo); numberArray.push(numberThree);
	checkNumbers();
}
	
function checkNumbers() {
	if(isANumber()){
		orderNumbers();
	} else {
		console.log("Please make sure you are entering numbers!  Try again!")
		return userInput();
	}}

function orderNumbers(){ 
	var orderedNumbers = numberArray.sort(function(a, b){return b-a});
	console.log("\nThe order of your numbers is " + orderedNumbers + ".");
}


function isANumber(){
	for (i=0; i < numberArray.length;){
			var numberChecker = numberArray[i];
		if (numberArray[i] === numberChecker.replace( /[^0-9]/g, " ")){
			i++;
			console.log("numberArray[i] is a number!!");
				if(i = 2){
				return true;
				}
		} else {
			console.log("numberArray[i] is not a number");
			return false;
			
	}}}

