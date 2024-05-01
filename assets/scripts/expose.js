// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  document.getElementById("horn-select").addEventListener('change', updateDropdown);
}

function updateDropdown(event){
  document.getElementsByTagName('img')[0].src="/assets/images/"+event.target.value+".svg";
  document.getElementsByTagName('audio')[0].src="/assets/audio/"+event.target.value+".mp3";
}