var sget = require("sget");

console.log("\nWelcome to ZooKeeper!\nYou will get to name your new friend, a siberian tiger, and interact with her!\nHave fun!\n")

var animalName = sget("Please name your new friend!").trim();
var hunger = 3;

userMenu();


function userMenu(){

	console.log("Hunger is at " + hunger);
	
	var userChoice = sget("\nYou are performing your rounds and it is time to interact with " + animalName + " again.\nPlease type the number of your choice.\n1. Feed.\n2. Play.\n3. Open pool area\n4. Do nothing\n5. Quit ZooKeeper\n").trim();
	switch(userChoice){
		case "1":
			feed();
			break;

		case "2":
			play();
			break;

		case "3":
			pool();
			break;

		case "4":
			doNothing();
			break;

		case "5":
			quit();
			break;


		default:
			console.log("\nNot a valid choice!  Please choose again.\n")
			userMenu();
	}
}


function feed(){

	if(hunger =< 0){
		console.log("\n" + animalName + "finally seems ready to eat.  She plops down next to the meat pile and begins tearing it to shreds.");
		hunger = 3;
	} else {
		console.log("\nYou throw " + animalName + " a hunk of meat.  She saunters over to it, but doesn't seem too interested right now.");
		hunger --;
		console.log("Hunger is at " + hunger);
	}
	userMenu();

}



function play(){


}


function pool(){



}


function doNothing(){


if(hunger = 0){
		console.log("\n" + animalName + "roars.  She seems really hungry-maybe you should feed her?\n");
	} else {
		console.log("\n" + animalName + " looks lazily at you.  She wanders over to a shade tree to take a cat nap.\n");
		hunger --;
	}

	userMenu();

}


function quit(){

	console.log("\nThanks for playing ZooKeeper!\nYour friend " + animalName + " will miss you!");
	process.exit(0);
}





