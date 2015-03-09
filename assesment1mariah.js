var sget = require("sget");

console.log("This program will ask for three numbers and then find the sum of the three numbers.\n")
var numberOne = sget("Please enter your first number.\n");
var numberTwo = sget("Please enter your second number.\n");
var numberThree = sget("Please enter your third number.\n");

inputToNumber();
	

function inputToNumber (){
	var numberOneInt = Number(numberOne);
	var numberTwoInt = Number(numberTwo);
	var numberThreeInt = Number(numberThree);  //may come back to refactor this later, sget input is output as a string
	

	var addition = numberOneInt +	numberTwoInt + numberThreeInt;
	console.log("\n" + addition + numberOneInt + numberTwoInt + numberThreeInt);
	testForNumber();
}


function testForNumber (numberOneInt, numberTwoInt, numberThreeInt){
	if (numberOneInt === NaN){
			console.log("\n numberOneInt is not a number.  THis works.")
	} else {
		console.log("\nIt still equals a number.")
		var addition = numberOneInt +	numberTwoInt + numberThreeInt;	

		console.log("\n" + addition + "\n"+ numberOneInt + numberTwoInt + numberThreeInt);

	}


}




//how to test to make sure input is a number and not a bunch of letters??

//var addition = numberOneInt +	numberTwoInt + numberThreeInt;	

//console.log("\n" + addition + "\n"+ numberOne + numberTwo + numberThree);