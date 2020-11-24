let computerScoreCounter = 0;
let playerScoreCounter = 0;
let roundCount = 1;
const SELECTION =["Rock", "Paper", "Scissors"]

// First Human container; after that PC container

//get Score
const playerSCORE = document.querySelector(".userScore[data-score='human']");
const computerSCORE = document.querySelector('.userScore[data-score="robot"]');

//playerButtons
const rockPlayer = document.querySelector("#rock");
const paperPlayer = document.querySelector("#paper");
const scissorsPlayer = document.querySelector("#scissors");
//computerButtons
const rockComputer = document.querySelector("#rockC");
const paperComputer = document.querySelector("#paperC");
const scissorsComputer = document.querySelector("#scissorsC");

//naming whole container to be able to make new div with game history
const bigContainer = document.querySelector(".container")

//TODO matchhistory - create array for historyTurns, function- create li; inside resut of turn
let arrayForResults = [];
let matchHistory = document.createElement('ul');
matchHistory.classList.add('matchHistory')
bigContainer.insertAdjacentElement('beforeend', matchHistory);
function logHistory(){
    let logContent = document.createElement('li');
    logContent.textContent = arrayForResults[`${arrayForResults.length -1}`]; 
    matchHistory.insertAdjacentElement('afterbegin', logContent);
};

//computur random function - copied from original
function computerPlay(){
    let computerSelection = Math.floor(Math.random() * SELECTION.length);
    return SELECTION[computerSelection].toLowerCase();
};
//function to highlight picked img for PC & function to remove
function removeHighlightComputer(){
    rockComputer.classList.remove('picked')
    paperComputer.classList.remove('picked')
    scissorsComputer.classList.remove('picked')
};
function highlightingComputer(computerSelection){
    removeHighlightComputer();
    if(computerSelection === 'rock'){
        rockComputer.classList.add('picked')
    }
    if(computerSelection === 'paper'){
        paperComputer.classList.add('picked')
    }
    if(computerSelection === 'scissors'){
        scissorsComputer.classList.add('picked')
    }
};
//same function for Player
function removeHighllightPlayer(){
    rockPlayer.classList.remove('playerPicked');
    paperPlayer.classList.remove('playerPicked');
    scissorsPlayer.classList.remove('playerPicked');
};
function highlightPlayer(playerSelection){
    removeHighllightPlayer();
    if(playerSelection === 'rock'){
        rockPlayer.classList.add('playerPicked')
    }
    if(playerSelection === 'paper'){
        paperPlayer.classList.add('playerPicked')
    }
    if(playerSelection === 'scissors'){
        scissorsPlayer.classList.add('playerPicked')
    }
};

//make function to check if score player SCORE IS 5 = won the game! function checkScore(playerScoreCounter)
function checkScore(playerScoreCounter, computerScoreCounter){
    if(playerScoreCounter == 5){
        arrayForResults.push(`You WON!! In round #${roundCount} the final score is ${playerScoreCounter} to ${computerScoreCounter}.
         CG!`);
    }else if(computerScoreCounter == 5){
        arrayForResults.push(`You LOST!! In round #${roundCount} the final score is ${playerScoreCounter} to ${computerScoreCounter}.
        Better luck next time!`);
    }
};

//function for playing game - playgame - score + push input into matchhistory
function playGame(playerSelection, computerSelection){
    playerSelection = this.dataset.buttonforstart;
    computerSelection = computerPlay();
    if(playerSelection === computerSelection){
        arrayForResults.push(`It is a TIE!! Round #${roundCount}: Your weapon of choice is ${playerSelection}
        and your opponent chooses ${computerSelection}. Noone gets any points.`);
        roundCount++;
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScoreCounter++;
        arrayForResults.push(`It is your WIN!! Round #${roundCount}: Your weapon of choice is ${playerSelection}
        and your opponent chooses ${computerSelection}. Score is ${playerScoreCounter}:${computerScoreCounter}`)
        roundCount++;
        playerSCORE.textContent = `${playerScoreCounter}`;
        checkScore(playerScoreCounter, computerScoreCounter);
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScoreCounter++;
        arrayForResults.push(`It is your WIN!! Round #${roundCount}: Your weapon of choice is ${playerSelection}
        and your opponent chooses ${computerSelection}. Score is ${playerScoreCounter}:${computerScoreCounter}`)
        roundCount++;
        playerSCORE.textContent = `${playerScoreCounter}`;
        checkScore(playerScoreCounter, computerScoreCounter);
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        playerScoreCounter++;
        arrayForResults.push(`It is your WIN!! Round #${roundCount}: Your weapon of choice is ${playerSelection}
        and your opponent chooses ${computerSelection}. Score is ${playerScoreCounter}:${computerScoreCounter}`)
        roundCount++;
        playerSCORE.textContent = `${playerScoreCounter}`;
        checkScore(playerScoreCounter, computerScoreCounter);
    }else{
        computerScoreCounter++;
        arrayForResults.push(`It is your LOSE!! Round #${roundCount}: Your weapon of choice is ${playerSelection}
        and your opponent chooses ${computerSelection}. Score is ${playerScoreCounter}:${computerScoreCounter}`)
        roundCount++;
        computerSCORE.textContent = `${computerScoreCounter}`;
         checkScore(playerScoreCounter, computerScoreCounter);
    }
    highlightingComputer(computerSelection);
    highlightPlayer(playerSelection);
    logHistory();
    checkScore();
};

rockPlayer.addEventListener('click', playGame);
paperPlayer.addEventListener('click', playGame);
scissorsPlayer.addEventListener('click', playGame);

rockComputer.addEventListener('transitionend', removeHighlightComputer);
paperComputer.addEventListener('transitionend', removeHighlightComputer);
scissorsComputer.addEventListener('transitionend', removeHighlightComputer);

rockPlayer.addEventListener('transitionend', removeHighllightPlayer);
paperPlayer.addEventListener('transitionend', removeHighllightPlayer);
scissorsPlayer.addEventListener('transitionend', removeHighllightPlayer)
