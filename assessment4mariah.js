var sget = require("sget");

console.log("\nWelcome to ZooKeeper!\nYou will get to name your new friend, a siberian tiger, and interact with her!\nHave fun!\n")

var animalName = sget("Please name your new friend!")

userMenu();


function userMenu(){

	var userChoice = sget("You are performing your rounds and it is time to interact with " + animalName + "again.\n  Please type the number of your choice.\n  1. Feed.\n  2.  Play.\n 3.  Open pool area\n  4. Do nothing\n  5.  Quit ZooKeeper\n")
	switch(userChoice){
		case "1":
			feed();
			break;

		case "2":

			break;

		case "3":

			break;

		case "4":

			break;

		case "5":

			break;


		default:
			console.log("\nNot a valid choice!  Please choose again.\n")
			userMenu();
	}
}


function feed(){


}



function play(){


}


function pool(){



}


function doNothing(){


}


function quit(){

	console.log("\nThanks for playing ZooKeeper!\nYour friend " + animalName + " will miss you!\n")
	process.exit(0);
}





