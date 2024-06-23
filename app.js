gameSeq=[];
userSeq=[];
let btns=["yellow","red", "blue","green"];

let started=false;
let level =0;
h2= document.querySelector("h2");
score = document.querySelector(".score");
start = document.querySelector(".start");
body = document.querySelector("body");


document.addEventListener("keypress",function(){
    if(started == false){
    score.innerText="";
    start.innerText="";    
    started = true;
    levelUp();
    };
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },150);
};
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },100);
};

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText =`level ${level}`;
    let randIdx = Math.floor(Math.random() * 3);
    randColor = btns[randIdx];
    randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameFlash(randBtn);
};

function checkAns(idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else {
        h2.innerText ="Game Over! ";
        score.innerHTML =`Congratulation your total score is <b>${(level-1)*10}.</b>`;
        start.innerText ="Please press any key to restart the game...";
       
        // wrong();
        reset();
    }
};

function btnPress(){
  let btn =this;
  userFlash(btn);
  userColor = btn.getAttribute('id');
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
};

// function wrong(){
//     body.classList.add("wrong");
//     setTimeout(function(){
//         body.classList.remove("wrong");
//     },300);
// };
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level =0;

}