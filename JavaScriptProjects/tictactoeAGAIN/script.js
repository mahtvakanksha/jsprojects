let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector(".btn")
let turn0=true;
let count=0;
let winMsg=document.querySelector(".hide");
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turn0)
       {
        box.innerText="0";
        box.style.color="#8C7284";
        turn0=false;
       }
       else{
        box.innerText="X";
        box.style.color="#646881";
        turn0=true;
       }
       box.disabled=true;
       count++;
       checkWinner();
    })
});
const checkWinner=()=>{
    if(count==9)
    {
        winMsg.classList.add("hide");
        winMsg.innerText="Try again!";
       resetGame();
    }
  for(let pattern of winPatterns)
  {
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

    if(pos1!=""&&pos2!=""&&pos3!="")
    {
        if(pos1===pos2&&pos2===pos3){
             winMsg.classList.remove("hide");
            console.log("winner");
            winMsg.innerText=`player ${pos1} has won`;
            rstbtn.innerText="NEW GAME";
            disableButtons();
          }
    }
    
  }
}
const disableButtons=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
    
}
rstbtn.addEventListener("click",resetGame);
function resetGame(){
    boxes.forEach((box)=>{
    box.innerText="";
    box.disabled=false;
    });
    count=0;
    winMsg.classList.add("hide");
    turn0=true;
    rstbtn.innerText="RESET";
}