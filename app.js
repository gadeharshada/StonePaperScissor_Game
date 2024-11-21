let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const mgs= document.querySelector(".mgs");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const genCompChoice =() =>{
    const options=["stone" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx]; 
};

const drawGame = () => {
    mgs.innerText="Game was Draw.";
    mgs.style.backgroundColor = "#081b31";
};

const showWinner =(userWin,userChoice,compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        mgs.innerText = "You win!";
        mgs.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        mgs.innerText = "You lose.";
        mgs.style.backgroundColor ="red";
    }
};

const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if(userChoice === compChoice) {
        drawGame();
    } else {
        let userWin=true;
        if (userChoice=== "rock") {
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice=== "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});