var sget = require("sget");

var password = sget("Please enter a password.  It should be at least 10 characters long and contain at least 1 capital letter or an exclamation point.").trim();
	
checkPassword();


function checkPassword(password){
	if(hasTenCharacters() && (hasBang() || hasCapitalLetter())){
		console.log("\n Your password is strong and fits the minimum length requirement!");
		}  else {
		console.log("\nYour password does not meet the requirements-please try again\n");
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
		return true;
	} else{
		return false;
	}}

function hasCapitalLetter(){
	var passwordCap = password.match(/[A-Z]/);
	if (passwordCap !== null){
		return true;
	} else{
		return false;
	}}


///if a funciton is boolean, use something with "is" or "has" first, like hasCapitalLetter


