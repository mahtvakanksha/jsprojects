document.addEventListener("DOMContentLoaded",function(){
  let count =0;
  //selecting value and btn
  const value=document.querySelector('#value');
  const btns=document.querySelectorAll('.btn');
//   console.log(btns);
btns.forEach(function(btn){
// console.log(item);
btn.addEventListener('click',function(e){
const styles=e.currentTarget.classList;
if(styles.contains("dec")){
  count--;
}
else if(styles.contains("res"))
{
  count=0;
  
}
else
{
  count++;
}
if(count>0)
{
 value.style.color='green';
}
else if(count<0)
value.style.color='red'
else
value.style.color='black'
value.textContent=count;
});
});
});