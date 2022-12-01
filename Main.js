/**
 * In this file we will store all of the logic that will be 
 * related to our scoreboard 
 */

//need to import the scoreboard
import ScoreboardView from "./scoreboard/ScoreboardView.js";
import Timer from "./scoreboard/Timer.js";
let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneName;
let playerTwoName;

// localStorage lets the names of the teams carry between html pages
if(document.URL.includes("inProgress.html")){
	playerOneName = localStorage.getItem('playerOneName');
	playerTwoName = localStorage.getItem('playerTwoName');
}
else{
	playerOneName = "Team One Name";
	playerTwoName = "Team Two Name";
	localStorage.setItem('playerOneName', playerOneName);
	localStorage.setItem('playerTwoName', playerTwoName);
}

const root = document.querySelector("#app");
const view = new ScoreboardView(root, playerOneName, playerTwoName, (player, direction) => {
	const difference = direction === "minus" ? -1 : 1;

	// Doesn't change the name unless you are on the editing page. 
	// also doesn't change the name unless you enter a non-empty value
	// finally it doesn't update the score if you are on the editing page
	if(document.URL.includes("EditingPage.html")){
		playerOneName = prompt("Please enter the team name for #1");
		if(playerOneName == null || playerOneName == ""){
			return;
		}
		localStorage.setItem('playerOneName', playerOneName);
		playerTwoName = prompt("Please enter the team name for #2");
		if(playerTwoName == null || playerTwoName == ""){
			return;
		}
		localStorage.setItem('playerTwoName', playerTwoName);
		view.updateName(playerOneName, playerTwoName)
	}
	else{
		if (player === "one") {
			playerOneScore = Math.max(playerOneScore + difference, 0);
		} else {
			playerTwoScore = Math.max(playerTwoScore + difference, 0);
		}
		view.update(playerOneScore, playerTwoScore);	
	}
});
