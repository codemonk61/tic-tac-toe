var music=new Audio('./music.mp3')
var turn="X";
var gameover=false;

//function to change turn

const changeTurn= () =>{
    return turn==="X"?"0":"X";
}
//function to check win

const checkWin=()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
win.forEach((e)=>{
if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[2]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText!=='')){
    document.querySelector(".info").innerText=boxtexts[e[0]].innerText+" Won"
    gameover=true;
    document.querySelector(".image").style.width="200px"
}
})
}


//Game Logic

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
let boxtext=element.querySelector(".boxtext")
element.addEventListener('click',()=>{
    if(boxtext.innerText===''){
        boxtext.innerText=turn;
        turn=changeTurn();
        music.play();
        checkWin();
        if(gameover==false)
        document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
    }
})
})

//add eventListener to reset button
document.getElementById("reset").addEventListener('click',()=>{
    let remove=document.getElementsByClassName("boxtext");
    Array.from(remove).forEach((el)=>{
        el.innerText="";
    });
    turn="X";
    gameover=false;
    document.getElementsByClassName("info")[0].innerText="Turn For "+turn;
    document.querySelector(".image").style.width="0px"

})
