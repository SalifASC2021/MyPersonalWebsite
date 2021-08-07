let homeButton = document.querySelector("#home");
let foodButton = document.querySelector("#foods");
let langButton = document.querySelector("#salifs");

let foods = document.querySelector("#coffee");
let salifs = document.querySelector("#thestuff");
let home = document.querySelector("#plan");

foodButton.onclick = function(event) {
    event.preventDefault()
    foods.style.display = "block";
    salifs.style.display = "none"
    home.style.display ="none";

}


langButton.onclick = function(event) {
    event.preventDefault()
    foods.style.display = "none";
    salifs.style.display = "block";
    home.style.display ="none";
    
}

homeButton.onclick = function(event) {
    event.preventDefault()
    foods.style.display = "none";
    salifs.style.display = "none";
    home.style.display = "block";

}
