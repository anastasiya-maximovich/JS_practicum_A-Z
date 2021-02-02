const btn = document.querySelector('button');
let timerId,
    i = 0;

function myAmime (){
   const box = document.querySelector('.box');
   
   let pos = 0;

   const id = setInterval(move, 10);
   function move(){
       if(pos === 300){
           clearInterval(id);
       }else{
           pos++;
           box.style.top = pos + 'px';
           box.style.left = pos + 'px';
       }
   }
}

btn.addEventListener('click', myAmime);
