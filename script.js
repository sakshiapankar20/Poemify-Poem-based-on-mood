const backgroundImages = {
  happy: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
  sad: 'url(https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
  chill: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
  angry: 'url(https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
  sleepy: 'url(https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
};

const content = {
  happy: {
    poem: "“Laughter spills like sunlight beams,\nAcross the corners of your dreams.”",
    affirmation: "I radiate positivity and joy.",
    
  },
  sad: {
    poem: "“Let your tears fall like gentle rain,\nSo something lovely can grow again.”",
    affirmation: "This feeling is temporary; I will heal.",
  
  },
  chill: {
    poem: "“Waves whisper soft songs to the shore,\nI find my calm, I ask for no more.”",
    affirmation: "Peace flows through every breath I take.",
   
  },
  angry: {
    poem: "“The fire within may rage and burn,\nBut even flames must take their turn.”",
    affirmation: "I release what I cannot control.",
  
  },
  sleepy: {
    poem: "“Stars are blinking, night is near,\nTime to rest, no need to fear.”",
    affirmation: "I am calm, safe, and ready to rest.",
   
  },
};

function setMood(mood) {
  document.getElementById("background").style.backgroundImage = backgroundImages[mood];

  const { poem, affirmation, audio } = content[mood];

  document.getElementById("poem-box").innerText = poem;
  document.getElementById("affirmation-box").innerText = `💬 Affirmation: ${affirmation}`;
  document.getElementById("audio-box").innerHTML = `
    <audio controls>
      <source src="${audio}" type="audio/mpeg">
      Your browser does not support the audio tag.
    </audio>`;

  document.getElementById("greeting").innerText = `You selected: ${mood.toUpperCase()} 🌀`;

  // mood history
  const time = new Date().toLocaleString();
  let history = JSON.parse(localStorage.getItem("poemHistory")) || [];
  history.unshift(`${mood.toUpperCase()} – ${time}`);
  if (history.length > 3) history.pop();
  localStorage.setItem("poemHistory", JSON.stringify(history));
  displayHistory(history);
}

function displayHistory(data) {
  document.getElementById("history").innerHTML =
    "🕓 Mood History:<br>" + data.map(h => `• ${h}`).join("<br>");
}

window.onload = function () {
  document.getElementById("background").style.backgroundImage =
    "url(https://images.unsplash.com/photo-1525097487452-6278ff080c31?auto=format&fit=crop&w=1920)";
};
