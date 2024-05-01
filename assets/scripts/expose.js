// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}
let vol = document.getElementById("volume");
vol.addEventListener("change", function() {
  let obj = document.getElementsByTagName('audio');
  let images = document.querySelectorAll("img");
  let val = vol.value;
  console.log(val/100);
  obj.volume = val/100; 
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