let button = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newBtn = document.querySelector("#new");
let msgcon = document.querySelector(".msg-con");
let msg = document.querySelector("#msg");
let turn  = true; // player 1,player 0
let cnt = 0;
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{ 
        if(turn===true){
            btn.innerText = "X";
            turn = false;
        }
        else{
            btn.innerText = "O";
            turn =true;
        }
        checkWinner();
        cnt++;
    });
});
const resetGame = () =>{
    turn = true;
    enablebtn();
    msgcon.classList.add("hide");
    cnt = 0;
}
const enablebtn= ()=>{
    for(let box of button){
        box.disabled = false;
        box.innerText="";
    }
}
const disablebtn= ()=>{
    for(let box of button){
        box.disabled = true;
    }
}
const checkWinner = ()=>{
    for(pattern of winPattern){
        let pos1 = button[pattern[0]].innerText;
        let pos2 = button[pattern[1]].innerText;
        let pos3 = button[pattern[2]].innerText;
        if(pos1!=""&&pos2!=2&&pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                if(pos1==="X"){
                    msg.innerText = "winner player 1";
                }
                else{
                    msg.innerText = "winner player 2";
                }
                msgcon.classList.remove("hide");
                disablebtn();
            }
        }
        if(cnt===8){
            msg.innerText = "DRAW";
            msgcon.classList.remove("hide");
            disablebtn();
            cnt = 0;
        }
    }
}
reset.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);