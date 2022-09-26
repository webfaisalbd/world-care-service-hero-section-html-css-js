let heroImg = document.getElementById("hero-img");

let child = document.getElementById("child");
let autism = document.getElementById("autism");
let elder = document.getElementById("elder");


child.onclick = function(){
    heroImg.src = "images/baby.png";
}

autism.onclick = function(){
    heroImg.src = "images/autism.png";
}

elder.onclick = function(){
    heroImg.src = "images/senior.png";
}