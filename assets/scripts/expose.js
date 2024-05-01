// expose.js

const jsConfetti = new JSConfetti();
let audio = document.getElementsByTagName('audio')[0];
let type = "";

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
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
  audio.volume = document.getElementById('volume').value/100;
  audio.play();
  if(type == "party-horn"){
    jsConfetti.addConfetti();
  }
}