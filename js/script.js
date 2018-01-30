function playRound(playerSelection, computerSelection){
	var playerSelection = playerSelection.toUpperCase();
	var computerSelection = computerSelection.toUpperCase();

	if(playerSelection === computerSelection){ return "Draw!"; }

	switch(playerSelection){
		case 'ROCK':
			if(computerSelection === "PAPER"){
				return "You lose! Paper beats Rock";
			} else return "You win! Rock beats Scissors";
		case 'PAPER':
			if(computerSelection === "SCISSORS"){
				return "You lose! Scissors beats Paper";
			} else return "You win! Paper beats Rock";
		case 'SCISSORS':
			if(computerSelection === "ROCK" ){
				return "You lose! Rock beats Scissors";
			} else return "You win! Scissors beats Paper";
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