//click

var buttons = document.querySelectorAll(".drum");
buttons.forEach(function(button){
button.addEventListener("click", function(){
    
    var htmlpp = this.innerHTML;
    playSound(htmlpp);

});

});

//keyboard

document.addEventListener("keypress",function (event){
    var keyPress = event.key;
    playSound(keyPress)
});

function playSound(key) {
    

switch (key) {
    case "w":
        var audio1 = new Audio("sounds/crash.mp3");
        audio1.play();
        break;

case "a":
        var audio1 = new Audio("sounds/kick-bass.mp3");
        audio1.play();
        break;

case "s":
        var audio1 = new Audio("sounds/snare.mp3");
        audio1.play();
        break;

case "d":
        var audio1 = new Audio("sounds/tom-1.mp3");
        audio1.play();
        break;

case "j":
        var audio1 = new Audio("sounds/tom-2.mp3");
        audio1.play();
        break;

case "k":
        var audio1 = new Audio("sounds/tom-3.mp3");
        audio1.play();
        break;

case "l":
        var audio1 = new Audio("sounds/tom-4.mp3");
        audio1.play();
        break;

    default:key
        break;
}

}