// detetcting button press
var numberOfDrum=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrum;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);

buttonanim(buttonInnerHtml);

});
}

// detetcting keyboardpress

document.addEventListener("keypress", function(event){
makeSound(event.key);
buttonanim(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
      break;

    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
        break;
    case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
          break;
    case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
       break;
     case "k":
     var audio = new Audio("sounds/crash.mp3");
     audio.play();
       break;
     case "l":
       var audio = new Audio("sounds/kick-bass.mp3");
       audio.play();

         break;

    default: console.log(buttonInnerHtml);

  }
}

function buttonanim(currentkey){
var active=document.querySelector("."+currentkey);
active.classList.add("pressed");
setTimeout (function() {
active.classList.remove("pressed");

},100);
}
