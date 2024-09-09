const choices = ["rock", "paper", "scissors"]

function game () {
    //play the game
    //play five rounds
    //console based
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
   //get input from player
   let input = prompt("Type Rock, Paper or Scissors");
   while (input == null) {
       input = prompt("Type Rock, Paper or Scissors"); 
   }

   input = input.toLowerCase();
   let check = validateInput(input)
   if(check == true) {
      console.log(input);
   }
  // console.log(input); 
}

function computerChoice() {
   //get random input for computer
   return choices[Math.floor(Math.random()*choices.length)]
   
}

function validateInput(choice) {
    if(choices.includes(choice)){
        return true
    } else {
        return false
    }
}

game();