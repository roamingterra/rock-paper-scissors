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
        return "You win! Paper beats rock!"
    }
    //if user is scissors and comp is paper, user wins
    if(playerAction==="scissors" && compAction==="paper"){
        return "You win! scissors beats paper!"
    }
    //if user is rock and comp is scissors, user wins
    if(playerAction==="rock" && compAction==="scissors"){
        return "You win! rock beats scissors!"
    }
    //if user is rock and comp is paper, comp wins
    if(playerAction==="rock" && compAction==="paper"){
        return "You lose! paper beats rock!"
    }
    //if user is paper and user is scissors, comp wins
    if(playerAction==="paper" && compAction==="scissors"){
        return "You lose! scissors beats paper!"
    }
    //if user is scissors and user is rock, comp wins
    if(playerAction==="scissors" && compAction==="rock"){
        return "You lose! Rock beats scissors!"
    }
    //It's a tie if the user and the computer chose the same move
    else{
        return "It's a tie!";
    }
}

// 5. TEST THE TWO FUNCTIONS

const playerAction = "rock";
const compAction = getComputerChoice();
console.log(playGame(playerAction, compAction));
