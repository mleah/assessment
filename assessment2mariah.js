var sget = require("sget");

var password = sget("Please enter a password.  It should be at least 10 characters long and contain at least 1 capital letter or an exclamation point.").trim();
	
checkPassword();


function checkPassword(password){
	passwordLong();
	passwordStrong();
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

function passwordStrong(){
	var passwordCap = password.match(/[A-Z]/);
	var passwordExc = password.match(/[!]/);
	console.log("\n password cap is " +passwordCap + "\npasswordExc is " + passwordExc);
	if (password = passwordCap || passwordExc){
		console.log("\n Strong returns true!!!");
		return true;
	} else{
		console.log("\n Strong returns false!!!");
		return false;
	}
}


function passwordLong(){
	if (password.length > 9){
		return true;
	} else{
		return false;
	}

}