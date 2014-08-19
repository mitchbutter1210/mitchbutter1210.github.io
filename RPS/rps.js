var rps = function(){
    var choice = prompt("Rock, paper, or scissors?");
    choice = choice.toLowerCase();
    var compChoice = Math.random();

    if(compChoice < 0.34){
        compChoice = "rock";
    }

    else if(compChoice <= 0.67){
        compChoice = "paper";
    }

    else if(compChoice <= 1){
        compChoice = "scissors";
    }

    else {
        confirm("BASIC MATH SEEMS TO HAVE BROKEN");
    }

    if(choice === compChoice){
        confirm("You tied!");
    }

    else if(choice === "rock"){
        if(compChoice === "paper"){
            confirm("Computer chose paper. You lose!");
        }
        else if(compChoice === "scissors"){
            confirm("Computer chose scissors. You win!");
        }
    }

    else if(choice === "paper"){
        if(compChoice === "rock"){
            confirm("Computer chose rock. You win!");
        }
        else if(compChoice === "scissors"){
            confirm("Computer chose scissors. You lose!");
        }
    }

    else if(choice === "scissors"){
        if(compChoice === "rock"){
            confirm("Computer chose rock. You lose!");
        }
        else if(compChoice === "paper"){
            confirm("Computer chose paper. You win!");
        }
    }
}

rps();
var tryAgain = confirm("Play again?");
while(tryAgain === true){
    rps();
    tryAgain = confirm("Play again?");
}
window.location = "http://mitchbutter1210.github.io/";
