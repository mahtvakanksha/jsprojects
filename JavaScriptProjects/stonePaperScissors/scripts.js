
document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code goes here

    let choices=document.querySelectorAll(".choice");
    
    let rstbtn=document.querySelector(".btn");

    let userScorePara=document.querySelector(".our");
    let userScore=0;
    let compScorePara=document.querySelector(".comp");
    let compSCore=0; 

    const msg=document.querySelector("#msg");
    let ptag=document.querySelector("#msg");
    
    const genIndex=()=>{
        //to generate computer choce index
        const options=["rock","paper","scissors"];
        const index=Math.floor(Math.random()*3);
        // console.log(index);
        return options[index];
    }
    
    const gencompChoice=(choiceUser)=>{
        console.log(`user selected ${choiceUser}`);
        const choiceComp=genIndex();
        console.log(`computer selected ${choiceComp}`);
            
        if(choiceComp===choiceUser)
            {
            console.log("Draw!"); 
            msg.classList.remove("hide"); 
            ptag.innerHTML="DRAW!"
            ptag.style.color='black';
            }
        else
        {
            let userWin=true;
            if(choiceUser==="rock")
            userWin=choiceComp==="paper"?false:true;
            else if(choiceUser="paper")
            userWin=choiceComp==="scissors"?false:true;
            else
            userWin=choiceComp==="rock"?false:true;
        showWinner(userWin,choiceUser,choiceComp);
        }
    }

const showWinner=(userWin,choiceUser,choiceComp)=>{
    msg.classList.remove("hide"); 
        
        if(userWin==true)
        {
            userScore++;
            userScorePara.innerText=userScore;
            console.log("you won!");
            console.log(choiceUser);
            ptag.innerHTML=`YOU WON! ${choiceUser} beats ${choiceComp}`
            ptag.style.color='green';
        }
        else
        {   compSCore++;
            compScorePara.innerText=compSCore;
            console.log("computer won!");
            ptag.innerHTML=`YOU LOST! ${choiceComp}  beats ${choiceUser}`
            ptag.style.color='red';
        }
}
    


choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
        let choiceUser=choice.getAttribute("id");
        gencompChoice(choiceUser); 
       })
    })

  });

rstbtn.addEventListener("click",()=>{
    userScore=0;
    compSCore=0;
    compScorePara.innerText=compSCore;
    userScorePara.innerText=userScore;

})