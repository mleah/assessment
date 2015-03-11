var sget = require("sget");

console.log("\nWelcome to ZooKeeper!\nYou will get to name your new friend, a siberian tiger, and interact with her!\nHave fun!\n")

var animalName = sget("Please name your new friend!").trim();
var hunger = 0;
var boredom = 0;
var score = 0;

userMenu();


function userMenu(){
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

		case "":
			console.log("\nPlease make sure to enter input!  Please choose again.\n")


		default:
			console.log("\nNot a valid choice!  Please choose again.\n")
			userMenu();
	}
}


function feed(){

	if(hunger > 3){
		console.log("\n" + animalName + " finally seems ready to eat.  She plops down next to the lonely meat pile and makes short work of it.  She then finds a sunny spot on a rock ledge and begins basking.\n");
		hunger -2;
		score ++;
	} else {
		console.log("\nYou throw " + animalName + " a hunk of meat.  She saunters over to it, but doesn't seem too interested right now and turns her back.  The meat sits, alone.\n");
		boredom --;
	}

	userMenu();

}



function play(){

	if(boredom < 1){
		console.log("\n" + animalName + "finally seems ready to eat.  She plops down next to the lonely meat pile and makes short work of it.  She then finds a sunny spot on a rock ledge and begins basking.\n");
		score ++;
	} else {
		console.log("\nYou throw " + animalName + " a hunk of meat.  She saunters over to it, but doesn't seem too interested right now and turns her back.  The meat sits, alone.\n");
		boredom --;
	}
	userMenu();

}


function pool(){

	if(boredom < 2){
		console.log("\n" + animalName + " eagerly runs over to the pool, splashing as she misses her footing and falls into the pool.  She doesn't seem to care much though as she works the pool into furious waves.\n");
		score ++;
		boredom ++;
	} else {
		console.log("\n" + animalName + " makes her way over to the open pool and slips into the water.  She begins to paddle around slowly, small whirlpools forming in the wake of her tail  She seems content.\n");
		hunger ++;
	}
	userMenu();
}


function doNothing(){


if(hunger < 1){
		console.log("\n" + animalName + "roars.  She seems really hungry-maybe you should feed her?\n");
	} else {
		console.log("\n" + animalName + " looks lazily at you.  She wanders over to a shade tree to take a cat nap.\n");
		hunger ++;
		boredom --;
	}

	userMenu();

}


function quit(){

	console.log("\nThanks for playing ZooKeeper!\nYour friend " + animalName + " will miss you!\n" +
					"This is your final score: " + score + ".  Great job!");
	process.exit(0);
}





