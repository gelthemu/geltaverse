// audio players
document.addEventListener("DOMContentLoaded", () => {
  const mediaPlayBtn = document.getElementById("media-play-btn");
  const mediaExitBtn = document.getElementById("media-exit-btn");

  const playlist = document.getElementById("playlist");
  const playlistCollapse = document.getElementById("playlist-collapse");
  const playlistItems = document.querySelectorAll(".playlist-item");

  const miniPlayer = document.getElementById("mini-player");
  const playlistBtn = document.getElementById("playlist-btn");
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = audioPlayer.querySelector("source");

  const mediaPlayIcon = document.getElementById("media-play-icon");
  const mediaPlayDisplay = document.getElementById("media-play-display");

  const togglePlaylist = () => playlist.classList.toggle("show");
  const hidePlaylist = () => {
    if (playlist.classList.contains("show")) {
      playlist.classList.remove("show");
    }
  };
  const playAudio = () => {
    audioPlayer.autoplay = true;
    audioPlayer.volume = 0.5;
    audioPlayer.load();
    audioPlayer.play();
  };

  const pauseAudio = () => {
    audioPlayer.autoplay = false;
    audioPlayer.volume = 0;
    audioPlayer.currentTime = 0;
    audioPlayer.pause();
  };

  mediaPlayBtn.addEventListener("click", () => {
    if (!miniPlayer.classList.contains("show")) {
      mediaExitBtn.classList.add("show");
      mediaPlayIcon.classList.remove("fa-play");
      mediaPlayIcon.classList.add("fa-pause");
      mediaPlayDisplay.innerHTML = `On-Air: ${"Crooze FM Mbarara"}`;
      miniPlayer.classList.add("show");
      playlistItems[0].classList.add("active");
      playAudio();
    } else {
      mediaExitBtn.classList.remove("show");
      mediaPlayIcon.classList.remove("fa-pause");
      mediaPlayIcon.classList.add("fa-play");
      mediaPlayDisplay.innerHTML = "Click to play";
      miniPlayer.classList.remove("show");
      playlistItems.forEach((i) => i.classList.remove("active"));
      pauseAudio();
    }
  });

  mediaExitBtn.addEventListener("click", () => {
    mediaExitBtn.classList.remove("show");
    mediaPlayIcon.classList.remove("fa-pause");
    mediaPlayIcon.classList.add("fa-play");
    mediaPlayDisplay.innerHTML = "Click to play";
    miniPlayer.classList.remove("show");
    playlistItems.forEach((i) => i.classList.remove("active"));
    pauseAudio();
  });

  playlistBtn.addEventListener("click", () => {
    togglePlaylist();
  });

  playlistCollapse.addEventListener("click", () => {
    hidePlaylist();
  });

  document.addEventListener("click", (e) => {
    if (!playlist.contains(e.target) && !playlistBtn.contains(e.target)) {
      hidePlaylist();
    }
  });

  playlistItems.forEach((item) => {
    item.addEventListener("click", () => {
      playlistItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const audioSrc = item.getAttribute("data-src");
      const audioTitle = item.getAttribute("data-title");
      audioSource.setAttribute("src", audioSrc);
      playAudio();

      mediaPlayDisplay.innerHTML = `On-Air: ${audioTitle}`;

      setTimeout(() => {
        hidePlaylist();
      }, 5000);
    });
  });
});
