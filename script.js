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
    computerMove.textContent = `The computer chose ${compAction}`;
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
        roundResult.textContent = `You win! ${playerAction} beats ${compAction}!`;
        return 1;
    }
    //user loses
    if((playerAction==="rock" && compAction==="paper")||
    (playerAction==="paper" && compAction==="scissors")||
    (playerAction==="scissors" && compAction==="rock")){
        roundResult.textContent = `You lose! ${compAction} beats ${playerAction}!`;
        return -1;
    }
    //It's a tie if the user and the computer chose the same move
    else{
        roundResult.textContent = "It's a tie!";
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
    // Print the score
    printScores();

    // 2. Once player or comp has 5 points, final results are printed
    if(playerScore===5||compScore===5){
        printFinalResult(); 
        return false;
    }

}

//HELPER FUNCTION 1: PRINT THE SCORES OF THE GAME
 function printScores(){
    const score = document.getElementById("score");
    score.textContent = `Player Score: ${playerScore} Computer Score: ${compScore}`;
}

//HELPER FUNCTION 2: PRINT FINAL RESULT OF ALL FIVE ROUNDS
function printFinalResult () {
const finalResult = document.getElementById("final-result");
    if(playerScore>compScore){
    finalResult.textContent = "Congratulations, you win!";
    }
    else if(playerScore<compScore) {
    finalResult.textContent = "You lose! Try again next time!";
    }
    else {
    finalResult.textContent = "The game ended in a tie!";
    }
}

//HELPER FUNCTION 2.3: CLEAR BOARD
function clearBoard(){
computerMove.textContent = "";
roundResult.textContent = "";
score.textContent = "";
finalResult.textContent = "";

playerScore = 0;
compScore = 0;
}

//HELPER FUNCTION 2.4: DISPLAYS WINDOW WITH FINAL GAME RESULT AND AN OPTION TO PLAY AGAIN 
function endGameWindow(){
    setTimeout(function(){
        let newGame = confirm(`${finalResult.textContent}\nPlay again?`)
        if(newGame===true){
            clearBoard(); 
            newGame=false;
        }
        else if(newGame===false||newGame===null||newGame===undefined){
            buttons.forEach((button) => {
                //button.removeEventListener('click', false)
                button.disabled = true;
            } );
        }
    },10)
}

// DECLARE VARIABLES TO RECORD PLAYER AND COMPUTER SCORES
let playerScore = 0; 
let compScore = 0;

// 2. DECLARE VARIABLES WITH REFERENCES TO UI TAGS 
let computerMove = document.getElementById("computer-move");
let roundResult = document.getElementById("round-result");
let score = document.getElementById("score");
let finalResult = document.getElementById("final-result");

// 2. EVENT LISTENER FOR PLAYER MOVE BUTTONS, WHICH REPLACES FOR LOOP FROM BEFORE THE UI
const buttons = document.querySelectorAll('div button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let continuePlaying = game(playGame(button.id, getComputerChoice()));
        if(continuePlaying===false){
            endGameWindow();
        }
    })
});


   