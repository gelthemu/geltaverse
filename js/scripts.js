// audio players
document.addEventListener("DOMContentLoaded", () => {
  const mediaBtn = document.getElementById("media-btn");
  const mediaExit = document.querySelector(".media-exit");
  const miniPlayer = document.querySelector(".mini-player");
  const miniPlayerHeader = document.querySelector(".mini-player-header");

  const audioPlayer = document.getElementById("audio-player");
  const audioSource = audioPlayer.querySelector("source");
  const audioTitle = document.querySelector(".audio-title span");

  const playAudio = () => {
    audioPlayer.autoplay = true;
    audioPlayer.volume = 0.25;
    audioPlayer.load();
    audioPlayer.play();
  };

  const pauseAudio = () => {
    audioPlayer.autoplay = false;
    audioPlayer.volume = 0;
    audioPlayer.currentTime = 0;
    audioPlayer.pause();
  };

  mediaBtn.addEventListener("click", () => {
    miniPlayer.classList.add("show");
    audioSource.setAttribute("src", "https://bit.ly/3Zx9nwD");
    playAudio();

    setTimeout(() => {
      audioTitle.innerHTML = `Week 38`;
      miniPlayerHeader.classList.add("show");
    }, 5000);

    mediaBtn.classList.add("disabled");
  });

  mediaExit.addEventListener("click", () => {
    miniPlayer.classList.remove("show");
    audioSource.setAttribute("src", "");
    miniPlayerHeader.classList.remove("show");
    audioTitle.innerHTML = ``;
    pauseAudio();

    mediaBtn.classList.remove("disabled");
  });
});
