var sget = require("sget");


function userInput() {
	console.log("This program will ask for three numbers and then order the three numbers in descending order.\n")
	var numberOne = sget("Please enter your first number.\n").trim();
	var numberTwo = sget("Please enter your second number.\n").trim();
	var numberThree = sget("Please enter your third number.\n").trim();
	orderNumbers();
}
	

function orderNumbers(){
	var numberArray = [];
	numberArray.push(numberOneInt);
	numberArray.push(numberTwoInt);
	numberArray.push(numberThreeInt); 
	orderedNumbers = numberArray.sort(function(a, b){return a-b});
	console.log("\nThe order of your numbers is " + orderedNumbers + ".");
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
