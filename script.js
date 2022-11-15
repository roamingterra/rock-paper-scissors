// 1.3 GET COMPUTER CHOICE FUNCTION: COMPUTER WILL RANDOMLY RETURN EITHER 'ROCK', 'PAPER', OR 'SCISSORS'
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

// 2. Return and print to the UI the computer's action
    computerMoveTxt = `The computer chose ${compAction}`;
    return compAction;
    }

// 1.4 PLAY A SINGLE ROUND OF ROCK, PAPER, SCISSORS, THAT TAKES IN AS PARAMETERS THE PLAYER ACTION AND THE COMPUTER ACTION
function playGame(playerAction, compAction){
// Make the user's choice case insensitive
    playerAction = playerAction.toLowerCase();
// Compare the computer and player actions with a conditional statement
    //user wins
    if((playerAction==="paper" && compAction==="rock")||
    (playerAction==="scissors" && compAction==="paper")||
    (playerAction==="rock" && compAction==="scissors")){
        roundResultTxt = `You win! ${playerAction} beats ${compAction}!`;
        return 1;
    }
    //user loses
    if((playerAction==="rock" && compAction==="paper")||
    (playerAction==="paper" && compAction==="scissors")||
    (playerAction==="scissors" && compAction==="rock")){
        roundResultTxt = `You lose! ${compAction} beats ${playerAction}!`;
        return -1;
    }
    //It's a tie if the user and the computer chose the same move
    else{
        roundResultTxt = "It's a tie!";
    }
}

// 1.6 WRITE A NEW FUNCTION WHICH WILL CALL THE PLAY GAME FUNCTION TO PLAY A FIVE ROUND GAME WHICH KEEPS SCORE AND ANNOUNCES A WINNER
function game(result){   
    // Update scores based on round results
    if(result==1) {
        playerScore++;
    }
    else if (result==-1) {
        compScore++;
    }
    // Assign scores to a string variable
    assignScores();

    // 2. Once player or comp has 5 points, final results are printed
    if(playerScore===5||compScore===5){
        assignFinalResult(); 
        return false;
    }
}

//HELPER FUNCTION 1: ASSIGNS THE GAME SCORE TO THE APPROPRIATE STRING VARIABLE
 function assignScores(){
    scoreTxt = `Player Score: ${playerScore} Computer Score: ${compScore}`;
}

//HELPER FUNCTION 2: ASSIGNS THE FINAL RESULT OF ALL FIVE ROUNDS TO THE APPROPRIATE STRING VARIABLE
function assignFinalResult () {
    if(playerScore>compScore){
    finalResultTxt = "***CONGRATULATIONS, YOU WIN!!!***";
    }
    else if(playerScore<compScore) {
    finalResultTxt = "***YOU LOSE, TRY AGAIN NEXT TIME!***";
    }
}

//HELPER FUNCTION 2.4: DISABLES THE BUTTONS WHEN THE GAME IS FINISHED
function endGame(){
    buttons.forEach((button) => {
        button.disabled = true;
    } );
}

//HELPER FUNCTION 2.5: TYPEWRITER EFFECT FOR ALL DISPLAYED RESULTS IN THE UI 
function typeWriter(){
    text.textContent += textTxt.charAt(i);
    if (i++ < (textTxt.length)) {
        setTimeout(typeWriter, 5);
    }
}

// DECLARE VARIABLES TO RECORD PLAYER AND COMPUTER SCORES, AND THE COUNTER VARIABLE FOR THE TYPE WRITER FUNCTION
let playerScore = 0; 
let compScore = 0;
let i = 0; //Counter for the type writer function

// 2. DECLARE VARIABLES TO STORE TEXT FOR GAME STATS
let computerMoveTxt = "";
let roundResultTxt = "";
let scoreTxt = "";
let finalResultTxt = "";
let textTxt = "";

let text = document.querySelector("#text .text"); //This is the variable that will display the results in the UI

// 2. EVENT LISTENER FOR PLAYER MOVE BUTTONS, WHICH REPLACES FOR LOOP FROM BEFORE THE UI
const buttons = document.querySelectorAll('#icons button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        text.textContent = "";
        i = 0; //Zero the counter at the beginning fo every round

        let continuePlaying = game(playGame(button.className, getComputerChoice()));
        //Display results
        textTxt = `${computerMoveTxt}\r\n${roundResultTxt}\r\n${scoreTxt}\r\n${finalResultTxt}`;
        typeWriter();
        
        if(continuePlaying===false){
            endGame();
        }
    })
});


   