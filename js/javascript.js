let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random()*3;
    if ((0 <= num) && ( num < 1)){
        return "rock"
    } else if ((1 <= num) && (num < 2)){
        return "paper"
    } else {
        return "scissors"
    }
}


function getHumanChoice() {
    let choice = prompt(`write your choice:
        1: rock
        2: paper
        3: scissors`);
    if ((choice === "1") || (choice === "rock")){
        return "rock"
    }else if((choice === "2") || (choice === "paper")){
        return "paper"
    }else if((choice === "3") || (choice === "scissors")){
        return "scissors"
    }else{
        console.log("pick one of the 3 options, word or number")
    }
}

getHumanChoice();