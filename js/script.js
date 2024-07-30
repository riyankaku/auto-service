
// function show(){
//     document.getElementById("invisibletext").classList.contains("visiblediv");

// }
// function hide(){
//     document.getElementById("invisibletext").classList.contains("hiddendiv")
// }

// var b1 = document.getElementById("b1");
// b1.onclick = show;
// var b2 = document.getElementById("b2");

// b2.onclick = hide;
// let hidetext=document.querySelectorAll(".invisibletext")
// let readmorebtn=document.querySelectorAll(".btn3")

// function readmoreless(){
//     if(hidetext.classList.contains("hidden")){
//         hidetext.classList.remove("hidden")
//         hidetext.style.display="block";
//         readmorebtn.textContent="Read less";
        
        
//     }
//     else{
//         hidetext.classList.add("hidden")
//         readmorebtn.textContent="Read More";
//         hidetext.style.display="none";
//     }
  

//  }
//  let hidetext1=document.getElementById("invisibletext1")
// let readmorebtn1=document.getElementById("b2")

// function readmoreless(){
//     if(hidetext1.classList.contains("hidden")){
//         hidetext1.classList.remove("hidden")
//         hidetext1.style.display="block";
//         readmorebtn1.innerHTML="Read less" ;
        
        
        
//     }
//     else{
//         hidetext1.classList.add("hidden")
//         readmorebtn1.textContent="Read More";
//         hidetext1.style.display="none";
//     }
  

//  }
//  let hidetext2=document.getElementById("invisibletext3")
// let readmorebtn2=document.getElementById("b3")




// function readless(){

//     if(hidetext2.classList.contains("hidden")){
      
//         hidetext2.classList.remove("hidden")
//         hidetext2.style.display="block";
//         readmorebtn2.textContent="Read less";
       
        
        
//     }
//     else{
//         hidetext2.classList.add("hidden")
//         readmorebtn2.textContent="Read More";
//         hidetext2.style.display="none";
//     }
// }
  

//  }
// function toggleread(){
//     if(hidetext.classList.contains("hidden")){
//         hidetext.classList.remove("hidden")
//         readmorebtn.innerHTML="Read less";
//         hidetext.style.display="block";
        
//     }
//     else{
//         hidetext.classList.add("hidden")
//         readmorebtn.innerHTML="Read More";
//         hidetext.style.display="none";
//     }
  

// }

let readmore=document.querySelector(".readmorebtn")
let readless=document.querySelector(".readlessbtn")
let p3=document.querySelector(".p3")

readmore.addEventListener("click",()=>{
    p3.classList.toggle("showmore")
    document.getElementById("btn3").style.display="none"
    document.getElementById("btn4").style.display="block"
    

    // if(readmore.innerHTML==="Read More"){
    //     readmore.innerHTML="Read less"
    // }
    // else{
    //     readmore.innerHTML="Read More"        
    // }


})
readless.addEventListener("click",()=>{
    p3.classList.remove("showmore")
    document.getElementById("btn3").style.display="block";
    document.getElementById("btn4").style.display="none";
    

    // if(readmore.innerHTML==="Read More"){
    //     readmore.innerHTML="Read less"
    // }
    // else{
    //     readmore.innerHTML="Read More"        
    // }


})
let slide1=document.getElementById("slide1")
let slide2=document.getElementById("slide2")

 let autocount=1;
 function autoslide(){
    if(autocount%2==1){
        slide1.style.display="block"
        slide2.style.display="none"
     }
     else{
        slide1.style.display="none"
        slide2.style.display="block";
     }
     autocount++;

 }
 setInterval(autoslide,2000)
 


