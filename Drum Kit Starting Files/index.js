var num = document.querySelectorAll(".drum").length;

for(let i = 0; i < num; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    playMusic(this.innerHTML);
    console.log(this.innerHTML);
});
}

document.addEventListener("keydown", function(e){
  playMusic(e.key);
  console.log(e.key);
});

function playMusic(s){
  var file = "";
  switch(s){
    case "w": file = "sounds/crash.mp3";
    break;
    case "a": file = "sounds/kick-bass.mp3";
    break;
    case "s": file = "sounds/snare.mp3";
    break;
    case "d": file = "sounds/tom-1.mp3";
    break;
    case "j": file = "sounds/tom-2.mp3";
    break;
    case "k": file = "sounds/tom-3.mp3";
    break;
    case "l": file = "sounds/tom-4.mp3";
    break;
    default: file = "";
  }
  var audio = new Audio(file);
  audio.play();
}
