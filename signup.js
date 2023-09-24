
// const login =document.querySelector('.login-box')

window.addEventListener("load", function () {
    const elementloginbox = document.querySelector(".login-box");
        elementloginbox.classList.add("zoom-in");
   
});
 
 function myFun(){
    var x = document.getElementById("password");
    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
 }
 
 
 
 
 
