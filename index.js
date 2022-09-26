let heroImg = document.getElementById("hero-img");

let child = document.getElementById("child");
let autism = document.getElementById("autism");
let elder = document.getElementById("elder");


child.onclick = function(){
    var value = "images/baby.png";
    heroImg.src = value;
    imageMagnify(value);
}

autism.onclick = function(){
    var value = "images/autism.png";
    heroImg.src = value;
    imageMagnify(value);
}

elder.onclick = function(){
    var value = "images/senior.png";
    heroImg.src = value;
    imageMagnify(value);
}


var value = "images/rightSide.png";
imageMagnify(value);

function imageMagnify(value){

    document.getElementById("hero-img").src = value;

        var options1 = {
            width: 400,
            zoomWidth: 500,
            zoomPosition: "left",
            fillContainer: true,
            offset: { vertical: 10, horizontal: 10 }
        };

        new ImageZoom(document.getElementById("img-container"), options1);
}
