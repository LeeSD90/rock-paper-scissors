function playRound(playerSelection, computerSelection){
	var playerSelection = playerSelection.toUpperCase();
	var computerSelection = computerSelection.toUpperCase();

	if(playerSelection === computerSelection){ return false; }

	switch(playerSelection){
		case 'ROCK':
			if(computerSelection === "PAPER"){
				return false;
			} else return true;
		case 'PAPER':
			if(computerSelection === "SCISSORS"){
				return false;
			} else return true;
		case 'SCISSORS':
			if(computerSelection === "ROCK" ){
				return false;
			} else return true;
	}
}

function computerPlay(){
	var selection = Math.floor(Math.random() * 3);

	switch(selection){
		case 0: return "Rock";
		case 1: return "Paper";
		case 2: return "Scissors";
		default: break;
	}

}

function game(){
	var playerScore = 0;
	var computerScore = 0;

	for(i=0;i<5;i++){
		var playerSelection = prompt("Type Rock, Paper or Scissors", "Rock");
		var computerSelection = computerPlay();

		if(playRound(playerSelection, computerSelection)){
			console.log("You win! " + playerSelection + " beats " + computerSelection);
			playerScore++;
		} else{
			if(computerSelection === playerSelection) { console.log("Draw! You both selected " + computerSelection); }
			else{
				console.log("You lose! " + computerSelection + " beats " + playerSelection);
				computerScore++;
			}
		}
	}

	console.log("Final scores\nPlayer: " + playerScore +"\n" + "Computer " + computerScore);

	if(playerScore == computerScore){ 
		console.log("It's a draw!");
	}
	else if(playerScore > computerScore){
		console.log("You won!");
	}
	else{ 
		console.log("You lost!"); 
	}
}