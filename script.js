// 3. GET COMPUTER CHOICE FUNCTION: COMPUTER WILL RANDOMLY RETURN EITHER 'ROCK', 'PAPER', OR 'SCISSORS'
function getComputerChoice(){
// Randomly generate a number between 1 and 3, and store number in a variable
    let compAction = Math.floor(Math.random()*3)+1;
// Assign 1, 2, and 3 to an action ('rock', 'paper', or 'scissors') (conditional statement)
    if(compAction===1){
        compAction = "rock";
    } else if(compAction===2){
        compAction = "paper";
    } else if(compAction===3){
        compAction = "scissors";
    }
// Return and print to console the computer's action
    console.log(`The computer chose ${compAction}`);
    return compAction;
    }

// 4. WRITE A FUNCTION THAT PLAYS A SINGLE ROUND OF ROCK, PAPER, SCISSORS, THAT TAKES IN AS PARAMETERS THE PLAYER ACTION AND THE COMPUTER ACTION
function playGame(playerAction, compAction){
// Make the user's choice case insensitive
    playerAction = playerAction.toLowerCase();
// Compare the computer and player actions with a conditional statement
    //user wins
    if((playerAction==="paper" && compAction==="rock")||
    (playerAction==="scissors" && compAction==="paper")||
    (playerAction==="rock" && compAction==="scissors")){
        console.log(`You win! ${playerAction} beats ${compAction}!`);
        return 1;
    }
    //user loses
    if((playerAction==="rock" && compAction==="paper")||
    (playerAction==="paper" && compAction==="scissors")||
    (playerAction==="scissors" && compAction==="rock")){
        console.log(`You lose! ${compAction} beats ${playerAction}!`);
        return -1;
    }
    //It's a tie if the user and the computer chose the same move
    else{
        console.log("It's a tie!");
    }
}

// 6. WRITE A NEW FUNCTION WHICH WILL CALL THE PLAY GAME FUNCTION TO PLAY A FIVE ROUND GAME WHICH KEEPS SCORE AND ANNOUNCES A WINNER
function game(){

    //HELPER FUNCTION: PRINT THE SCORES OF THE GAME
    let printScores = () => console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);

    //HELPER FUNCTION: FINAL RESULT OF ALL FIVE ROUNDS
    function printFinalResult () {
        if(playerScore>compScore) console.log("Congratulations, you win!");
        else if (playerScore<compScore) console.log("You lose! Try again next time!");
        else console.log("The game ended in a tie!");
    }

    // Declare variable to record player and computer score
    let playerScore = 0; 
    let compScore = 0;
    // Loop through the game 5 times
    for(let i = 0; i < 5; i++){
        // Ask for the user's move and store it in a variable.
        const playerAction = prompt("Make a move: ");
        // Call the computerChoice function and store the resulting move in a variable
        const compAction = getComputerChoice();
        // Call the playGame function and record the score
        let round = playGame(playerAction, compAction);
        if(round==1) playerScore++;
        else if (round==-1) compScore++;
        printScores();
    }
    // Return the result of the five rounds 
    printFinalResult()
}

// 7. TEST THE SCRIPT
game();
