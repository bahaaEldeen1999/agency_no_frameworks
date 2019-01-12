let carousel1 = document.getElementById("carousel1");

let carouselNext1 = document.getElementById("carousel-next1");
let carouselPrev1 = document.getElementById("carousel-prev1");

let carouseltems1 = document.querySelectorAll(".carousel-item1");

//console.dir(carouseltems);

for( let i=1; i<carouseltems1.length ;i++ ){
    carouseltems1[i].style.display = "none"
}

let currentSelection1 = 0;
carouselNext1.addEventListener('click',()=>{
    if( currentSelection1 == carouseltems1.length1-1 ){
        carouseltems1[currentSelection1].style.animation = "nextR 1s ease-in-out forwards ";
        carouseltems1[0].style.display = "block"
        carouseltems1[0].style.animation = "prevR 1s ease-in-out  forwards";
        currentSelection1 = 0;
    }else{
        //carouseltems[currentSelection].style.opacity = 0;
        carouseltems1[currentSelection1].style.animation = "nextR 1s ease-in-out forwards";
        carouseltems1[currentSelection1+1].style.display = "block"
        carouseltems1[currentSelection1+1].style.animation = "prevR 1s ease-in-out  forwards";
        //carouseltems[currentSelection+1].style.opacity = 1;
        currentSelection1 += 1;
    }
});

carouselPrev1.addEventListener('click',()=>{
    if( currentSelection1 == 0 ){
        carouseltems1[currentSelection1].style.animation = "nextL 1s ease-in-out forwards ";
        carouseltems1[carouseltems1.length-1].style.display = "block"
        carouseltems1[carouseltems1.length-1 ].style.animation = "prevL 1s ease-in-out  forwards";
        
        currentSelection1 = carouseltems1.length-1 ;
    }else{
        carouseltems1[currentSelection1].style.animation = "nextL 1s ease-in-out  forwards";
        carouseltems1[currentSelection1-1].style.display = "block"
        carouseltems1[currentSelection1-1].style.animation = "prevL 1s ease-in-out  forwards";
        currentSelection1 -= 1;
    }
})

//second
let carousel2 = document.getElementById("carousel2");

let carouselNext2 = document.getElementById("carousel-next2");
let carouselPrev2 = document.getElementById("carousel-prev2");

let carouseltems2 = document.querySelectorAll(".carousel-item2");

//console.dir(carouseltems);

for( let i=1; i<carouseltems2.length ;i++ ){
    carouseltems2[i].style.display = "none"
}

let currentSelection2 = 0;
carouselNext2.addEventListener('click',()=>{
    if( currentSelection2 == carouseltems2.length-1 ){
        carouseltems2[currentSelection2].style.display = "none ";
        carouseltems2[0].style.display = "block"
       // carouseltems2[0].style.animation = "prevR 1s ease-in-out  forwards";
        currentSelection2 = 0;
    }else{
        //carouseltems[currentSelection].style.opacity = 0;
        carouseltems2[currentSelection2].style.display = "none";
        carouseltems2[currentSelection2+1].style.display = "block"
        //carouseltems2[currentSelection2+1].style.animation = "prevR 1s ease-in-out  forwards";
        //carouseltems[currentSelection+1].style.opacity = 1;
        currentSelection2 += 1;
    }
});

carouselPrev2.addEventListener('click',()=>{
    if( currentSelection2 == 0 ){
        carouseltems2[currentSelection2].style.display = "none ";
        carouseltems2[carouseltems2.length-1].style.display = "block"
        //carouseltems2[carouseltems2.length-1 ].style.animation = "prevL 1s ease-in-out  forwards";
        
        currentSelection2 = carouseltems2.length-1 ;
    }else{
        carouseltems2[currentSelection2].style.display = "none";
        carouseltems2[currentSelection2-1].style.display = "block"
        //carouseltems2[currentSelection2-1].style.animation = "prevL 1s ease-in-out  forwards";
        currentSelection2 -= 1;
    }
})
