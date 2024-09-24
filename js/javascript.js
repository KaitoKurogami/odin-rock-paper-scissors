function getComputerChoice() {
    let num = Math.random()*3;
    if ((0 <= num) && ( num < 1)){
        return "rock";
    } else if ((1 <= num) && (num < 2)){
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt(`write your choice:
        1: rock
        2: paper
        3: scissors`).toLowerCase();
    if ((choice === "1") || (choice === "rock")){
        return "rock";
    }else if((choice === "2") || (choice === "paper")){
        return "paper";
    }else if((choice === "3") || (choice === "scissors")){
        return "scissors";
    }else{
        console.log("pick one of the 3 options, word or number");
    }
}

let humanScore = 0;
let computerScore = 0;
let resultDiv = document.querySelector(".results");
let resultText = ""


function playRound(humanChoice,computerChoice) {
    if (humanChoice === computerChoice){
        resultText = "it's a draw";
    }else{
        if (humanChoice === "rock"){
            if (computerChoice === "paper"){
                resultText = "You lose! paper beats rock";
                computerScore++;
            }else{
                resultText = "You win! rock beats scissors";
                humanScore++;
            }
        }else if (humanChoice === "paper"){
            if (computerChoice === "scissors"){
                resultText = "You lose! scissors beats paper";
                computerScore++;
            }else{
                resultText = "You win! paper beats rock";
                humanScore++;
            }
        }else{
            if (computerChoice === "rock"){
                resultText = "You lose! rock beats scissors";
                computerScore++;
            }else{
                resultText = "You win! scissors beats paper";
                humanScore++;
            }
        }
    }
    resultDiv.textContent = resultText;
}

let playButtons = document.querySelector(".play-buttons");
let scoreDiv = document.querySelector(".score");
let scoreText = ""
let gameEnd = false
for (let btn of Array.from(playButtons.children)){
    btn.addEventListener("click", () =>{
        if (gameEnd){
            gameEnd = false;
            scoreDiv.style.fontWeight = 400;
            scoreDiv.style.fontSize = "16px";
        }
        switch (btn.id){
            case "btn-rock":
                humanChoice = "rock";
                break;
            case "btn-paper":
                humanChoice = "paper";
                break;
            case "btn-scissors":
                humanChoice = "scissors";
                break;
        }
        playRound(humanChoice,getComputerChoice());
        scoreText = `current score ${humanScore}-${computerScore}`;
        if ((humanScore === 5) || (computerScore === 5)){
            if (humanScore === 5){
                scoreText = `You Win: ${humanScore}-${computerScore}`;
            }else if (computerScore === 5){
                scoreText = `You Lose: ${humanScore}-${computerScore}`;
            }
            scoreDiv.style.fontWeight = 700;
            scoreDiv.style.fontSize = "24px";
            humanScore = 0;
            computerScore = 0;
            gameEnd = true;
        }
        scoreDiv.textContent = scoreText;
    })
    
}
