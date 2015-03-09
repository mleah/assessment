var sget = require("sget");
var numberArray = [];

console.log("This program will ask for three numbers and then order the three numbers in ascending order.\n")
var numberOne = sget("Please enter your first number.\n");
var numberTwo = sget("Please enter your second number.\n");
var numberThree = sget("Please enter your third number.\n");

inputToNumber();
	

function inputToNumber (){
	var numberOneInt = Number(numberOne);
	var numberTwoInt = Number(numberTwo);
	var numberThreeInt = Number(numberThree);  
	var addition = numberOneInt +	numberTwoInt + numberThreeInt;
	numberArray.push(numberOneInt);
	numberArray.push(numberTwoInt);
	numberArray.push(numberThreeInt); ///may refactor this later

	console.log("\nThe order of your numbers is " + numberArray.sort() + ".");
	//testForNumber();
}

/*
function testForNumber (numberOneInt, numberTwoInt, numberThreeInt){
	if (numberOneInt === NaN){
			console.log("\n numberOneInt is not a number.  THis works.")
	} else {
		console.log("\nIt still equals a number.")
		var addition = numberOneInt +	numberTwoInt + numberThreeInt;	

		console.log("\n" + addition + "\n"+ numberOneInt + numberTwoInt + numberThreeInt);

	}


}
*/



//how to test to make sure input is a number and not a bunch of letters??

//var addition = numberOneInt +	numberTwoInt + numberThreeInt;	

//console.log("\n" + addition + "\n"+ numberOne + numberTwo + numberThree);