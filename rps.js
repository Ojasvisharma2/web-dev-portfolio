let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper" ,"scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
};

const drawgame = () => {
    msg.innerText = "game draw";
    msg.style.backgroundColor = "black";
}
const showwinner = (userWin , userChoice ,compChoice) => {
    if(userWin){
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText ="you win";
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText ="you lose";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const compChoice = gencompchoice();
    
    if(userChoice=== compChoice){
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice ==="paper" ? false :true;
        }else if(userChoice ==="paper"){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showwinner(userWin , userChoice ,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
