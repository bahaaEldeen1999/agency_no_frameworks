//let nav = document.querySelector("nav");
let ul = document.querySelector('#items ul');
let div = document.querySelector('#items');
let itemsList = document.querySelectorAll('.item-list');

let sectionHome = document.getElementById("#home");
let sectionAbout = document.getElementById("#home");
let sectionService = document.getElementById("#home");
let sectionTestimonial = document.getElementById("#home");
let sectionContact = document.getElementById("#home");
//let sectionHome = document.getElementById("#home");

window.addEventListener('scroll',(e)=>{
    console.log(e)
})






//onsole.dir(window.innerWidth)
window.addEventListener('resize',()=>{
  //  nav.style.display = "grid"
   // nav.style.gridTemplateColumns = "30% 70%";
   if(window.innerWidth > 1060){
    ul.style.width =  div.clientWidth + "px";
    ul.style.float = "left"
   }
    
    //console.dir(ul.style.width)
})