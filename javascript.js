// const select = document.querySelector('select');
// const html = document.querySelector('.output');

// select.addEventListener('change', () => {
//   const choice = select.value;

//   // ADD SWITCH STATEMENT

//   switch (choice) {
//        case "white":
//        update("white", "black")
//        break;
//        case "black": 
//        update("black","white")
//        break;    
//        case "purple": 
//        update("purple", "white")
//        break;
//        case "yellow":
//        update("yellow","black")
//        break;
//        case "psychedelic": 
//        update("psychedelic","purple")
//        break;
// }
// });

// function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
//   }

// const user = prompt('Whatś the "official" name of JavaScript?')

// if(user == "Ecmascript") {
//     alert("Right!")
// } else {
//     alert('You don´t know? "ECMAScript"!')
// }
// let num = prompt("Type a number") 
// if(num > 0) {
//     alert(1)
// } else if(num < 0) {
//     alert(-1)
// } else {
//     alert(0)
// }

// let result  = ( a+ b < 4) ? "Below" : "Over";

// let message = (login == "Employee") ? "Hello" : (login == "Director") ? "Greentings" : (login == "") ? "No login" : "";

// if(browser == "Edge") {
//     alert( "You've got the Edge!" );
// } else if(
// browser == "Chrome"
// || browser == "Firefox" 
// || browser == "Safari" 
// || browser == "Opera") {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

let humanScore = 0;
let computerScore = 0;
function getComputerChoice () {
    // crear una valor randow 1 y 3 
    // varias con los elementos 
    // swith diferente opciones o if , for 
    // return valor 

    let randow = Math.floor((Math.random() * 3) +1  ) 

    const rock = "rock";
    const paper = "paper";
    const tijeras = "tijera";

    switch (randow) {
        case 1:
            return rock;
            break;
        case  2: 
        return paper;
        break;
        
        case 3: 
        return tijeras;
        default:
            break;
    }
}


function getHumanChoice() {
// entrada del usurio y validar que sea letra
// que los valores sean iguales quitando las mayuscula y minuscula para la compacion 
// return resultado 
let user = prompt("Elige una opcion, Paper, Tijera, Rock","Rock")
 user = user.toString().toLowerCase()

 if(user == "rock" || user == "paper" || user == "tijera" ) {
    return user
 
 } else {
    alert("no son esas palabras ")
    getHumanChoice()
 }
 
}

function playRound (humanChoice,computerChoice) {
 if(humanChoice == "rock" && computerChoice == "tijera") {
    humanScore++;
 } else if(humanChoice == "tijera" && computerChoice == "paper") {
    humanScore++;
 } else if(humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
 } else if(humanChoice === computerChoice) {
    console.log("empate")
 } else {
    computerScore++;
 }
}





function playGame (){
    let iterar = 5;
    for(let i = 0; i < iterar; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection,computerSelection)
    }   
    
    if(humanScore > computerScore) {
        alert("Perdio la computadora y ")
        alert("Gano el usurio felicidades")
    } else {
        alert("Perdio el usurio y ")
        alert("Gano la computadora")
    }
}

playGame()
console.log(humanScore)
console.log(computerScore)