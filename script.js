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
    scoreTxt = `Player Score: ${playerScore} Computer Score: ${compScore}`;
}

//HELPER FUNCTION 2: PRINT FINAL RESULT OF ALL FIVE ROUNDS
function printFinalResult () {
    if(playerScore>compScore){
    finalResultTxt = "Congratulations, you win!";
    }
    else if(playerScore<compScore) {
    finalResultTxt = "You lose! Try again next time!";
    }
    else {
    finalResultTxt = "The game ended in a tie!";
    }
}

//HELPER FUNCTION 2.3: CLEAR BOARD
function clearBoard(){
    text.textContent = "";
    /*computerMove.textContent = "";
    roundResult.textContent = "";
    score.textContent = "";
    finalResult.textContent = "";*/

    playerScore = 0;
    compScore = 0;
}

//HELPER FUNCTION 2.4: DISPLAYS WINDOW WITH FINAL GAME RESULT AND AN OPTION TO PLAY AGAIN 
function endGameWindow(){
    buttons.forEach((button) => {
        //button.removeEventListener('click', false)
        button.disabled = true;
    } );
    /*let newGame = confirm(`${finalResultTxt}\nPlay again?`)
    if(newGame===true){
        clearBoard(); 
        newGame=false;
    }
    else if(newGame===false||newGame===null||newGame===undefined){
        buttons.forEach((button) => {
            //button.removeEventListener('click', false)
            button.disabled = true;
        } );
    }*/
}

//HELPER FUNCTION 2.5: TYPEWRITER EFFECT FOR ALL TEXT 
function typeWriter(){
    text.textContent += textTxt.charAt(i);
    if (i++ < (textTxt.length)) {
        setTimeout(typeWriter, 5);
    }
}
//HELPER FUNCTION 2.5.1: TYPEWRITER EFFECT FOR COMPUTER MOVE
function typeWriter1(){
    computerMove.textContent += computerMoveTxt.charAt(i);
    if (i++ < (computerMoveTxt.length)) {
        setTimeout(typeWriter1, 10);
    }
}

//HELPER FUNCTION 2.5.2: TYPEWRITER EFFECT FOR ROUND RESULT
function typeWriter2(){
    roundResult.textContent += roundResultTxt.charAt(j);
    if (j++ < (roundResultTxt.length)) {
        setTimeout(typeWriter2, 10);
    }
}

//HELPER FUNCTION 2.5.3: TYPEWRITER EFFECT FOR SCORE
function typeWriter3(){
    score.textContent += scoreTxt.charAt(k);
    if (k++ < (scoreTxt.length)) {
        setTimeout(typeWriter3, 10);
    }
}

//HELPER FUNCTION 2.5.4: TYPEWRITER EFFECT FOR FINAL RESULT
function typeWriter4(){
    finalResult.textContent += finalResultTxt.charAt(l);
    if (l++ < (finalResultTxt.length)) {
        setTimeout(typeWriter4, 10);
    }
}

//HELPER FUNCTION 2.6: TYPE RESULTS
function typeResults(){
    typeWriter();
    //typeWriter1();
    //typeWriter2();
    //typeWriter3();
    //typeWriter4();
}

// DECLARE VARIABLES TO RECORD PLAYER AND COMPUTER SCORES, AND THE COUNTER VARIABLES FOR THE TYPE WRITER FUNCTIONS
let playerScore = 0; 
let compScore = 0;
let i = 0;
//let j = 0;
//let k = 0;
//let l = 0;

// 2. DECLARE VARIABLES WITH REFERENCES TO UI TAGS 
let computerMoveTxt = "";
let roundResultTxt = "";
let scoreTxt = "";
let finalResultTxt = "";
let textTxt = "";

let text = document.querySelector("#text .text"); //To eventually display all of the text as one variable
let computerMove = document.querySelector("#text .computer-move");
let roundResult = document.querySelector("#text .round-result");
let score = document.querySelector("#text .score");
let finalResult = document.querySelector("#text .final-result");

// 2. EVENT LISTENER FOR PLAYER MOVE BUTTONS, WHICH REPLACES FOR LOOP FROM BEFORE THE UI
const buttons = document.querySelectorAll('#icons button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        text.textContent = "";
        //computerMove.textContent = ""; //Reset the text to contain nothing when a new round is played
        //roundResult.textContent = "";
        //score.textContent = "";
        //finalResult.textContent = "";
        i = 0;
        j = 0;
        k = 0;
        l = 0;

        let continuePlaying = game(playGame(button.className, getComputerChoice()));
        //Display results
        textTxt = `${computerMoveTxt}\r\n${roundResultTxt}\r\n${scoreTxt}\r\n${finalResultTxt}`;
        typeResults();
        
        if(continuePlaying===false){
            endGameWindow();
        }
    })
});


   