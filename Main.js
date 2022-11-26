/**
 * In this file we will store all of the logic that will be 
 * related to our scoreboard 
 */

//need to import the scoreboard
import ScoreboardView from "./scoreboard/ScoreboardView.js";
import Timer from "./scoreboard/Timer.js";
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneName = null;
let playerTwoName = null;
const root = document.querySelector("#app");
const view = new ScoreboardView(root, "Team one name", "Team two name", (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	if (player === "one") {
		playerOneScore = Math.max(playerOneScore + difference, 0);
	} else {
		playerTwoScore = Math.max(playerTwoScore + difference, 0);
	}
	view.update(playerOneScore, playerTwoScore);

	//I need to figure this part out in order to change the name for both
<<<<<<< HEAD
	// of the teams name, by actually clicking on the teams name and not the 
	// buttons
	
		playerOneName = prompt("Please enter the name for team one: ");
		playerTwoName = prompt("Please enter the name for team two: ");
=======
	// of the teams name
	
		playerOneName = prompt("Please enter the team name: ");
		playerTwoName = prompt("Please enter the team name: ");
>>>>>>> b710f7ce9c2d429d79732c2d405310aa25307ae4

	
	view.updateName(playerOneName, playerTwoName);
});
