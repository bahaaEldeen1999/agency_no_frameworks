let toggle_menu = document.getElementById("toggle_menu");
let toggle_menu_icon = document.getElementById("toggle_menu_icon");
let menu = document.getElementById("menu");
let nav = document.querySelector("nav");
let items = document.querySelectorAll("#items ul li a");
let logo = document.getElementById("logo");
toggle_menu.style.color = "white"
//console.dir(toggle_menu_icon)
let menuDown = false;
toggle_menu.addEventListener('click',()=>{
if( menuDown == false ){
menu.style.right = "0px";
for(let x of items){
    x.style.color = "#6C6A68"
    
}
logo.style.color = "#6C6A68"
toggle_menu.style.color = "#6C6A68"
setTimeout(()=>{toggle_menu_icon.className = "fa fa-times fa-2x";},300)

menuDown = true;
}else{
    
    setTimeout(()=>{toggle_menu_icon.className = "fa fa-bars fa-2x";},300)
    menu.style.right = "-500px";
    menuDown = false;
    
}
})

    document.addEventListener('scroll',(e)=>{
        // console.log(this.scrollY);
         if(this.scrollY>50){
             nav.style.background = "white";
             for(let x of items){
                 x.style.color = "#6C6A68"
                 
             }
             logo.style.color = "#6C6A68"
             toggle_menu.style.color = "#6C6A68"
            
         }else{
             nav.style.background = "transparent";
             for(let x of items){
                 x.style.color = "white"
             }
             logo.style.color = "white"
             toggle_menu.style.color = "white"
         }
     })

