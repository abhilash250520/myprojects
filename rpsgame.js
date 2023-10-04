const userchoices =document.querySelectorAll("button")
let playerscore=0
let computerscore=0
let userinput
let computerinput
userchoices.forEach(userchoice => userchoice.addEventListener('click', (e) => {
    userinput=e.target.innerHTML
    document.querySelector(".use").setAttribute("src",userinput+".png"); 
    com()    
    result()
    
}))
function com(){
const computerchoice = Math.round(Math.random()*3);

if(computerchoice==1){
    computerinput="rock";
    document.querySelector(".com").setAttribute("src",computerinput+".png")
}
if(computerchoice==2){
    computerinput="paper";
    document.querySelector(".com").setAttribute("src",computerinput+".png")
}
if(computerchoice==3){
    computerinput="scissors";
    document.querySelector(".com").setAttribute("src",computerinput+".png")
}
}
function result(){
    if(computerinput===userinput){
        document.querySelector(".result").innerHTML="Draw"
    }
    else if(computerinput==="rock" && userinput==="paper"){
        document.querySelector(".result").innerHTML="You win"
        playerscore=playerscore+1
        document.getElementById("player").innerHTML=playerscore
    }
    else if(computerinput==="rock" && userinput==="scissors"){
        document.querySelector(".result").innerHTML="You lose"
        computerscore=computerscore+1
        document.getElementById("computer").innerHTML=computerscore
    }
    else if(computerinput==="paper" && userinput==="rock"){
        document.querySelector(".result").innerHTML="You lose"
        computerscore=computerscore+1
        document.getElementById("computer").innerHTML=computerscore
        }
    else if(computerinput==="paper" && userinput==="scissors"){
        document.querySelector(".result").innerHTML="You win"
        playerscore=playerscore+1
        document.getElementById("player").innerHTML=playerscore
    }
    else if(computerinput==="scissors" && userinput==="paper"){
        document.querySelector(".result").innerHTML="You lose"
        computerscore=computerscore+1
        document.getElementById("computer").innerHTML=computerscore
    }
    else if(computerinput==="scissors" && userinput==="rock"){
        document.querySelector(".result").innerHTML="You win"
        playerscore=playerscore+1
        document.getElementById("player").innerHTML=playerscore
    }
}

