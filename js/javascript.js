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

for (let i = 1 ;i < 10; i++){
    console.log(getComputerChoice())
}