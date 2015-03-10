//I am having trouble with password going into each function correctly, can't figure it out
//functions long and strong were both working individually but wont work together argh
/*  here is error when password meets length, but not strength
var passwordCap = password.match(/[A-Z]/);
	                          ^
TypeError: Cannot read property 'match' of null
*/

var sget = require("sget");

var password = sget("Please enter a password.  It should be at least 10 characters long and contain at least 1 capital letter or an exclamation point.").trim();
	
checkPassword();


function checkPassword(password){
	if(hasTenCharacters()){ // when the stuff inside of the if () evaluates to true, the code block runs.  so, since I am returning passwordLong, it will be true or false since I am returning true or false.  Using return and recursive logic is like the stack in MTG
		//console.log( "\n THis is strongs value" + typeof passwordStrong());
		if (passwordStrong()){
			console.log("\n Your password is strong and fits the minimum length requirement!");
		} else{
			console.log("\nYour password is not strong enough!\n  Remember, it must contain at least 1 capital letter or exclamation point. \n");
		} 

	} else {
		console.log("\nYour password is not long enough!\n  Remember, it must be at least 10 characters long. \n");
	}}


function hasTenCharacters(){
	if (password.length > 9){
		return true;
	} else{
		return false;
	}}

function hasBang(){
	var passwordExc = password.match(/[!]/);
	if (passwordExc !== null){
		console.log("\n Strong returns true!!!");
		return true;
	} else{
		console.log("\n Strong returns false!!!");
		return false;
	}}

function hasCapitalLetter(){
	var passwordCap = password.match(/[A-Z]/);
	var passwordExc = password.match(/[!]/);
	if (passwordCap || passwordExc !== null){
		return true;
	} else{
		return false;
	}}


///if a funciton is boolean, use something with "is" or "has" first, like hasCapitalLetter


