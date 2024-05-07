// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  updateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = updateVoices;
  }
  document.querySelector("button").addEventListener("click", speakText);
}
function updateVoices() {
  const synth = window.speechSynthesis;
  let voices = synth.getVoices();
  for(let i = 0; i < voices.length; i++){
    let option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}
function speakText(){
  const synth = window.speechSynthesis;
  let voices = synth.getVoices();
  const vs = document.getElementById("voice-select");
  let id = vs.selectedIndex;
  const words = document.getElementById("text-to-speak").value;
  if(words.length != 0 && id > 0){
    let utterThis = new SpeechSynthesisUtterance(words);
    let selectedOption = vs[id].getAttribute("data-name");
    for(let i = 0; i < voices.length; i++){
      if(selectedOption == voices[i].name){
        utterThis.voice = voices[i];
      }
    }
    let img = document.getElementsByTagName("img");
    utterThis.addEventListener("start", function(){
      img[0].src="assets/images/smiling-open.png";
    });
    utterThis.addEventListener("end", function(){
      img[0].src="assets/images/smiling.png";
    });
    synth.speak(utterThis);
  }

}