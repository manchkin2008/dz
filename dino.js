const dino = document.getElementById("dino") 
const cactus = document.getElementById("cactus")

document.addEventListener("keydown", function(event) {
    jamp();
});

function jamp () {
   if (dino.classList != "jamp") { 
    dino.classList.add("jamp")
   }
   setTimeout( function() {
       dino.classList.remove("jamp")
   }, 300)
}

let isAlive = setInterval ( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusLeft < 50 && cactusLeft < 0 && dinoTop >= 140) {
        alert("You lose!")
    }
}, 10)