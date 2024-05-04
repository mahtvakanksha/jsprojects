document.addEventListener("DOMContentLoaded",function(){
    const colors=["green","red","rgba(133,124,254)","#f4f5d4"];
    const btn=document.getElementById("btn");
    const color=document.querySelector(".color");
    btn.addEventListener("click",function(){
        const num=getRandomNumber( );
        document.body.style.backgroundColor=colors[num];
        color.textContent=colors[num];
    
    });
   function getRandomNumber()
   {
    return Math.floor(Math.random()*colors.length);
   } 
});
    