const audioContext = new (window.AudioContext || window.webkitAudioContext)();
let audioBuffer;

async function loadAudio() {
  try {
    const response = await fetch("blues.00081.wav");
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  } catch (error) {
    console.error(error);
  }
}

function playAudio() {
  if (audioBuffer) {
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioContext.destination);
    source.start();
  }
}

loadAudio();

document.getElementById("playButton").addEventListener("click", () => {
  playAudio();
});
