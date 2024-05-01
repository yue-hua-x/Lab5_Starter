// expose.js

const jsConfetti = new JSConfetti();
let audio = document.getElementsByTagName('audio')[0];
let type = "";

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
let vol = document.getElementById("volume");
vol.addEventListener("change", function() {
    let obj = document.getElementsByTagName('audio');
    let images = document.querySelectorAll("img");
    let val = vol.value;
    console.log(val/100);
    obj[0].volume = val/100; 
    if(val == 0){
      images[1].src = "assets/icons/volume-level-0.svg";
      images[1].alt = "Volume Level 0";
    }else if( val < 33){
      images[1].src = "assets/icons/volume-level-1.svg";
      images[1].alt = "Volume Level 1";
    } else if (val < 67){
      images[1].src = "assets/icons/volume-level-2.svg";
      images[1].alt = "Volume Level 1";
    }else{
      images[1].src = "assets/icons/volume-level-3.svg";
      images[1].alt = "Volume Level 1";
    }
  });
  document.getElementById("horn-select").addEventListener('change', updateDropdown);
  document.getElementsByTagName('button')[0].addEventListener('click', playSound);
}

function updateDropdown(event){
  document.getElementsByTagName('img')[0].src="/assets/images/"+event.target.value+".svg";
  document.getElementsByTagName('audio')[0].src="/assets/audio/"+event.target.value+".mp3";
  audio.type='audio/mpeg';
  type = event.target.value;
}
function playSound(){
  //audio.volume = document.getElementById('volume').value/100;
  audio.play();
  if(type == "party-horn"){
    jsConfetti.addConfetti();
  }
}
