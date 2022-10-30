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
    //if user is paper and comp is rock, user wins
    if(playerAction==="paper" && compAction==="rock"){
        return 1; //"You win! Paper beats rock!"
    }
    //if user is scissors and comp is paper, user wins
    if(playerAction==="scissors" && compAction==="paper"){
        return 2; //"You win! scissors beats paper!"
    }
    //if user is rock and comp is scissors, user wins
    if(playerAction==="rock" && compAction==="scissors"){
        return 3; //"You win! rock beats scissors!"
    }
    //if user is rock and comp is paper, comp wins
    if(playerAction==="rock" && compAction==="paper"){
        return 4; //"You lose! paper beats rock!"
    }
    //if user is paper and user is scissors, comp wins
    if(playerAction==="paper" && compAction==="scissors"){
        return 5; //"You lose! scissors beats paper!"
    }
    //if user is scissors and user is rock, comp wins
    if(playerAction==="scissors" && compAction==="rock"){
        return 6; //"You lose! Rock beats scissors!"
    }
    //It's a tie if the user and the computer chose the same move
    else{
        return 7; "It's a tie!";
    }
}

// 5. TEST THE TWO FUNCTIONS

//const playerAction = "rock";
//const compAction = getComputerChoice();
//console.log(playGame(playerAction, compAction));

// 6. WRITE A NEW FUNCTION WHICH WILL CALL THE PLAY GAME FUNCTION TO PLAY A FIVE ROUND GAME WHICH KEEPS SCORE AND ANNOUNCES A WINNER
function game(){
    // Declare variable to record player and computer score
    let playerScore = 0; 
    let compScore = 0;
    // Loop through the game 5 times
    for(let i = 0; i < 5; i++){
        // Ask for the user's move and store it in a variable.
        const playerAction = prompt("Make a move: ");
        // Call the computerChoice function and store the resulting move in a variable
        const compAction = getComputerChoice();
        // Call the playGame function and send as arguments the user and player moves, in order to return a round result.
        // The returned result will be a number that will be sent to a function declaration that contains a switch statement.
        // The switch statement contains cases for the various numbers. Each case will call a function declaration to log an 
        // appropriate message to the console, and a function declaration to keep track of score
        switch(playGame(playerAction, compAction)){
            case 1: 
                console.log("You win! Paper beats rock!");
                playerScore++
                console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
                break;
            case 2: 
                console.log("You win! scissors beats paper!");
                playerScore++
                console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
                break;
            case 3: 
                console.log("You win! rock beats scissors!");
                playerScore++
                console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
                break;
            case 4: 
                console.log("You lose! paper beats rock!");
                compScore++ 
                console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
                break;
            case 5: 
                console.log("You lose! scissors beats paper!");
                compScore++ 
                console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
                break;
            case 6: 
                console.log("You lose! Rock beats scissors!");
                compScore++ 
                console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
                break;
            case 7: 
                console.log("It's a tie!"); 
                console.log(`Player Score: ${playerScore} Computer Score: ${compScore}`);
                break;
        }
    }
    // Return the final score and result of the five rounds 
    if(playerScore>compScore) console.log("Congratulations, you win!");
    else if (playerScore<compScore) console.log("You lose! Try again next time!");
    else console.log("It's a tie!");
}

// 7. TEST THE SCRIPT
game();
