//document.querySelector("button").addEventListener("click",function()
//{
////    alert("i got clicked");
//    
//}
//);
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function()
        {
//            alert("i got clicked");
//            console.log(this,innerHTML);
           var buttonClicked=this.innerHTML;
            keypress(buttonClicked);
            keyAnimation(buttonClicked);
        });
    }
//                var audio=new Audio('sound/crash.mp3');
//                audio.play();
document.addEventListener("keypress",function(event){
   
//    console.log(event);
    keypress(event.key);
    keyAnimation(event.key);
    
});
function keypress(key){
  

         
            switch(key){
                case "w" :
                var tom1=new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
                     case "a" :
                var tom2=new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
                     case "s" :
                var tom3=new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
                     case "d" :
                var tom4=new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
                     case "j" :
                var ooo=new Audio('sounds/ooo jaddo.mp3');
                ooo.play();
                break;
                     case "k" :
                var kickbass=new Audio('sounds/Jugaadi Jatt.mp3');
                kickbass.play();
                break;
                     case "l" :
                var funny=new Audio('sounds/funny sab.mp3');
                funny.play();
                break;
                default:
                    alert("wrong button clicked");
            }
}
function keyAnimation(btnkey){
 var activeButton=document.querySelector("."+btnkey);
 activeButton.classList.add("pressed"); 
setTimeout(function(){
    activeButton.classList.remove("pressed")
},100);
}


function alt()
{
    alert("this is alert");
}