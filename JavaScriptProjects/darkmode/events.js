let btn=document.querySelector('.btn');
let body=document.querySelector("body");
// btn.onclick = (e) =>{
//     alert("clicked");
//     console.log(e.type);
//     console.log(e.target);    
//     console.log(e.clientX,e.clientY);    
//      }


// btn.addEventListener("click",()=>{
//     alert('nice to meet you');
// })

//toggle dark mode(w/o class in css stylesheet);
// let currMode="light";
// btn.addEventListener("click",()=>{
//       if(currMode==="light"){
//        currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";}
//     else{ currMode="light";
//     console.log(currMode);
//     document.querySelector("body").style.backgroundColor="white";}
// })

//toggle dark mode( class in css stylesheet);
let currMode="light";
btn.addEventListener("click",()=>{
      if(currMode==="light"){
       currMode="dark";
   body.classList.add("dark");
   body.classList.remove("light");}
    else{
         currMode="light";
         body.classList.remove("dark");
    body.classList.add("light");}
})
