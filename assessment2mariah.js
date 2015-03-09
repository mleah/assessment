var sget = require("sget");
userInput();

function userInput(){
	var password = sget("Please enter a password.  It should be at least 10 characters long and contain at least 1 capital letter or an exclamation point.").trim.split('');

}

function checkPassword(password){
	passwordStrong();
	passwordLong();
	if(passwordStrong === true){
		if (passwordLong === true){
			console.log("\n Your password is strong and fits the minimum length requirement!");
		} else {
			console.log("\nYour password is not long enough!\n  Remember, it must be at least 10 characters long. \n");
		}}
	else {
		console.log("\nYour password is not strong enough!\n  Remember, it must contain at least 1 capital letter or exclamation point. \n");
	}

}

function passwordStrong(password){
	if (password.match(/^[A-Z]+$/) || password.match(/^[!]+$/)){
		return true;
	} else{
		return false;
	}
}


function passwordLong(password){
	if (password.length >= 10){
		return true;
	} else{
		return false;
	}

}