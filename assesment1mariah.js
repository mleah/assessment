var sget = require("sget");

userInput();

function userInput(){
	var numberOne = sget("Please enter your first number.");
	var numberTwo = sget("Please enter your second number.");
	var numberThree = sget("Please enter your third number.");
	inputToNumber();
}

function inputToNumber (numberOne, numberTwo, numberThree){
var numberOneInt = Number(numberOne);
var numberTwoInt = Number(numberTwo);
var numberThreeInt = Number(numberThree);  //may come back to refactor this later, sget input is output as a string

}

var addition = numberOneInt +	numberTwoInt + numberThreeInt;	

console.log("\n" + addition + "\n"+ numberOne + numberTwo + numberThree);