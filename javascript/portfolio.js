let works = document.querySelectorAll('.work');

for(let work of works){
    work.addEventListener('mouseenter',(e)=>{
        //console.log( e.target.childNodes);
        let element = e.target.childNodes[5];
        let imgDiv = e.target.childNodes[3];
        let img = e.target.childNodes[1];
        let buttonView = e.target.childNodes[5].childNodes[5];
        let isOpen = false;
       //console.dir(e.target.childNodes);
        buttonView.addEventListener('click',(e)=>{
            e.defaultPrevented = true;
            imgDiv.style.display = "block";
            setTimeout(()=>{
                document.addEventListener('click',()=>{
                    imgDiv.style.display = "none";
                })
            },100)
                
               
             
            
          
        })
        element.style.opacity = 1;
        img.style.transform = "scale(1.2)"
        // setTimeout(()=>{

        // },500)
    })
    work.addEventListener('mouseleave',(e)=>{
        let element = e.target.childNodes[5];
        element.style.opacity = 0;
        let img = e.target.childNodes[1];
        img.style.transform = "scale(1)"
    })
}

let allButton = document.getElementById("all-button");
let webDesignButton = document.getElementById("web-design-button");
let webDevButton = document.getElementById("web-development-button");
let brandButton = document.getElementById("branding-button");
let logoDesignButton = document.getElementById("logo-design-button");

let worksAll = document.querySelectorAll(".work");
let worksOne = document.querySelectorAll(".one");
let worksTwo = document.querySelectorAll(".two");
let worksThree = document.querySelectorAll(".three");
let worksFour = document.querySelectorAll(".four");

allButton.addEventListener("click", (e)=>{
    let i = 1;
    let j = 1 ;
    for(let work of worksAll){
       // work.style.display = "block";
        work.style.transform = "scale(1)";
        work.style.opacity = 1;
        work.style.gridColumn = `${i} `;
        work.style.gridRow = `${j}`;
        
        if(i%3 == 0){
            i=0;
            j++
        }
        i++

    }
})
webDesignButton.addEventListener("click", (e)=>{
    for(let work of worksAll){
        work.style.transform = "scale(0)";
        work.style.opacity = 0;
    //    work.style.display = "none";

    }
    let i = 1;
    let j = 1;
    for(let work of worksOne){
      //  work.style.display = "block";
        work.style.transform = "scale(1)";
        work.style.opacity = 1;
        work.style.gridColumn = `${i}`;
        work.style.gridRow = `${j}`;
        if(i%3 == 0){
            j++
            i=0
        }
        i++

    }
})
webDevButton.addEventListener("click", (e)=>{
    for(let work of worksAll){
        work.style.transform = "scale(0)";
        work.style.opacity = 0;
    //    work.style.display = "none";

    }
    let j=1
    let i = 1;
    for(let work of worksTwo){
      //  work.style.display = "block";
        work.style.transform = "scale(1)";
        work.style.opacity = 1;
        work.style.gridColumn = `${i}  `;
        //work.style.gridRow = `1 / 3`;
        work.style.gridRow = `${j}`;
        if(i%3 == 0){
            j++
            i=0
        }
        i++ 

    }
})
brandButton.addEventListener("click", (e)=>{
    for(let work of worksAll){
        work.style.transform = "scale(0)";
        work.style.opacity = 0;
    //    work.style.display = "none";

    }
    let j =1;
    let i = 1;
    for(let work of worksThree){
      //  work.style.display = "block";
        work.style.transform = "scale(1)";
        work.style.opacity = 1;
        work.style.gridColumn = `${i} `;
        work.style.gridRow = `${j}`;
        if(i%3 == 0){
            j++
            i=0
        }
        i++

    }
})
logoDesignButton.addEventListener("click", (e)=>{
    for(let work of worksAll){
        work.style.transform = "scale(0)";
        work.style.opacity = 0;
    //    work.style.display = "none";

    }
    let i = 1;
    let j=1
    for(let work of worksFour){
      //  work.style.display = "block";
        work.style.transform = "scale(1)";
        work.style.opacity = 1;
        work.style.gridColumn = `${i}`;
        work.style.gridRow = `${j}`;
        if(i%3 == 0){
            j++
            i=0
        }
        i++

    }
})