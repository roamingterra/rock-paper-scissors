// 3. GET COMPUTER CHOICE FUNCTION: COMPUTER WILL RANDOMLY RETURN EITHER 'ROCK', 'PAPER', OR 'SCISSORS'
function getComputerChoice(){
// Randomly generate a number between 1 and 3, and store number in a variable
let compAction = Math.floor(Math.random()*3)+1;
// Assign 1, 2, and 3 to an action ('rock', 'paper', or 'scissors') (conditional statement)
if(compAction===1){
    compAction = "Rock";
} else if(compAction===2){
    compAction = "Paper";
} else if(compAction===3){
    compAction = "Scissors";
}
// Return the computer's action 
return compAction;
}