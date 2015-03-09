var sget = require("sget");

var numberOne = sget("Please enter your first number.").parseInt();
var numberTwo = sget("Please enter your second number.").parseInt();
var numberThree = sget("Please enter your third number.").parseInt();

var addition = numberOne +	numberTwo + numberThree;	

console.log(addition + numberOne + numberTwo + numberThree);