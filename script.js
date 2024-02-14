let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const compplayer = () =>{
    options =["rock" , "paper" , "scissors"];
    const selopotion = Math.floor(Math.random() * 3)
    return options[selopotion]
}

const showinner = (userwin,userchoice,selected) =>{
    if(userwin){
        msg.innerText = `You Win!! Your ${userchoice} beats ${selected}`
        msg.style.backgroundColor = "green";
        userScore++
        userScorePara.innerText = userScore
        compScorePara.innerText = compScore
    }else{
        compScore++
        userScorePara.innerText = userScore
        msg.style.backgroundColor  = 'red';
        compScorePara.innerText = compScore
        msg.innerText = `You lose!! The ${selected} beats ${userchoice}`
    }
}

const drawgame =() =>{
    msg.innerText = "The round is Draw try once again"
}

const playgame = (userchoice) =>{
        const selected = compplayer();
        if(userchoice == selected){
            drawgame()
        }
        if(userchoice == 'rock'){
            userwin = selected === 'paper' ? false : true;
        }if(userchoice == 'paper'){
            userwin = selected === 'scissors' ? false : true;
        }if(userchoice == 'scissors'){
            userwin = selected === 'rock' ? false : true;
        }
        showinner(userwin,userchoice,selected)
}

choices.forEach((choice) =>{
        choice.addEventListener('click' , () =>{
            let userchoice = choice.getAttribute('id');
            playgame(userchoice)
        })
})