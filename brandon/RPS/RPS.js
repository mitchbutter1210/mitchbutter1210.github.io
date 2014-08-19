var game = function (){
    var userAnswer = prompt("Rock, paper, or scissors");
    userAnswer = userAnswer.toLowerCase();
    var compAnswer = Math.random();

    if (compAnswer >= 0 && compAnswer <= 0.33){compAnswer="paper";}

    else if (compAnswer > 0.33 && compAnswer <= 0.66){compAnswer="rock";}

    else if (compAnswer > 0.66 && compAnswer <= 1){compAnswer="scissors";}

    else {confirm("WTF IS GOING ON");}

    if(compAnswer==="scissors"){
        if (userAnswer==="rock"){confirm("He chose scissors, you win!");}
        else if (userAnswer==="scissors"){confirm("He chose scissors, you tie!");}
        else if (userAnswer==="paper"){confirm("He chose scissors, you lose!");}
    }

    else if (compAnswer==="paper"){
        if (userAnswer==="rock"){confirm("He chose paper, You lose!");}
        else if (userAnswer==="scissors"){confirm("He chose paper, you win!");}
        else if (userAnswer==="paper"){confirm("He chose paper, you tie!");}
    }

    else if (compAnswer==="rock"){
        if (userAnswer==="rock"){confirm("He chose rock, You tie!");}
        else if (userAnswer==="scissors"){confirm("He chose rock, you lose!");}
        else if (userAnswer==="paper"){confirm("He chose rock, you win!");}
    }

}
var i = 0;
for(i; i<100; i++){
game();
var again = confirm("Again?");
if (again===true){game();}
else {window.location = "http://www.brandonambrose.comule.com";}
}



