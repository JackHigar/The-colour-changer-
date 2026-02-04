let btn;
btn = document.getElementById("id");

let body;
body = document.getElementById("id2");


let culorsa = ["gold", "crimson", "darkslategrey", "hotpink", "lime"];

btn.onclick = function () {

    let randomnummm = Math.floor(Math.random() * 5);
    
    
    let colourforscreen = culorsa[randomnummm];
    
    
    body.style.backgroundColor = colourforscreen;
    
    console.log("Random number is " + randomnummm, "Your color is " + colourforscreen);
}
