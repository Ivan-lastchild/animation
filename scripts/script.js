let person = document.querySelector("#person");

setTimeout(pauseAnimation, 7900);

function pauseAnimation(){
    person.style.animationPlayState = "paused"
}