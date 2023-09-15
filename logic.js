document.addEventListener("DOMContentLoaded", function () {
    const elementhead = document.querySelector(".head");
    const elementsubh = document.querySelector(".subh");
    const elementheroimage = document.querySelector(".heroimage");
    elementsubh.classList.add("fade-in-right");
    elementhead.classList.add("fade-in-left");
    elementheroimage.classList.add("zoom-in");
});
// document.addEventListener("scroll",function(){
//     const chestt = document.querySelector(".chesttext")
//     chestt.classList.add("fade-in-left")
//     const chesti = document.querySelector(".chestimage")
//     chesti.classList.add("fade-in-right")
    
    
// })
// document.addEventListener("scroll",function(){
//     const chestt2 = document.querySelector(".chesttext2")
//     chestt2.classList.add("fade-in-right")
//     const chesti2 = document.querySelector(".chestimage2")
//     chesti2.classList.add("fade-in-left")
// })
// document.addEventListener("scroll",function(){
//     const chestt3 = document.querySelector(".chesttext3")
//     chestt3.classList.add("fade-in-left")
//     const chesti3 = document.querySelector(".chestimage3")
//     chesti3.classList.add("fade-in-right")
// })

function handleFadeIn(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-left");
        observer.unobserve(entry.target); 
      }
    });
  }
  

  const observer = new IntersectionObserver(handleFadeIn, {
    threshold: 0.2, 
  });
  
 
  const elementsToAnimate = document.querySelectorAll(".left");
  

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
  
  function handleFadeIn2(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-right"); 
        observer.unobserve(entry.target); 
      }
    });
  }
  
  
  const observer2 = new IntersectionObserver(handleFadeIn2, {
    threshold: 0.2, 
  });
  

  const elementsToAnimate2 = document.querySelectorAll(".right");
  
 
  elementsToAnimate2.forEach((element) => {
    observer2.observe(element);
  });
  