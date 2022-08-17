 var panels  = document.querySelectorAll(".panel").length;

 for(var i=0;i<panels;i++){
   document.querySelectorAll(".panel")[i].addEventListener("click",clicked);
 }
 function clicked(){
   remove();
 var panels=this.classList.add("active");
}

function remove(){
  for(var i=0;i<panels;i++){
    document.querySelectorAll(".panel")[i].classList.remove("active");
  }
}
   // var click=document.addEventListener("click", function(event){
   //   event.classList;
   // });
