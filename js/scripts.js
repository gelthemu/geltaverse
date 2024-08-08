// audio players
document.addEventListener("DOMContentLoaded", function () {
  const audiolistItems = document.querySelectorAll(".audiolist-item");
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = audioPlayer.querySelector("source");
  const pipBtn = document.getElementById("pip-button");
  const pipExitBtn = document.getElementById("pip-exit-button");
  const miniPlayer = document.getElementById("mini-player");
  const miniAudioPlayer = document.getElementById("mini-audio-player");
  const miniAudioSource = miniAudioPlayer.querySelector("source");
  const miniPlayerEnabled = document.getElementById("mini-player-enabled");
  const mainContent = document.getElementById("main-content");

  let isMiniPlayerActive = false;

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observerCallback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting && isMiniPlayerActive) {
        miniPlayer.classList.remove("hide");
      } else {
        miniPlayer.classList.add("hide");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(audioPlayer);

  pipBtn.addEventListener("click", function () {
    miniAudioSource.setAttribute("src", audioSource.getAttribute("src"));
    miniAudioPlayer.currentTime = audioPlayer.currentTime;
    miniAudioPlayer.load();
    if (!audioPlayer.paused) {
      miniAudioPlayer.play();
    }

    miniPlayer.classList.remove("hide");
    miniPlayer.classList.add("fshow");
    miniPlayerEnabled.classList.remove("hide");

    audioPlayer.pause();
    isMiniPlayerActive = true;
  });

  pipExitBtn.addEventListener("click", function () {
    audioSource.setAttribute("src", miniAudioSource.getAttribute("src"));
    audioPlayer.currentTime = miniAudioPlayer.currentTime;
    audioPlayer.load();
    if (!miniAudioPlayer.paused) {
      audioPlayer.play();
    }

    miniPlayer.classList.add("hide");
    miniPlayer.classList.remove("fshow");
    miniPlayerEnabled.classList.add("hide");

    miniAudioPlayer.pause();
    isMiniPlayerActive = false;

    mainContent.scrollIntoView({ behavior: "smooth" });
  });

  audiolistItems.forEach((item) => {
    item.addEventListener("click", function () {
      audiolistItems.forEach(function (i) {
        i.classList.remove("active");
      });

      item.classList.add("active");

      const audioSrc = item.getAttribute("data-src");
      if (isMiniPlayerActive) {
        miniAudioPlayer.src = audioSrc;
        miniAudioPlayer.load();
        miniAudioPlayer.play();
      } else {
        miniPlayerEnabled.classList.add("hide");
        miniPlayer.classList.add("hide");
        miniPlayer.classList.remove("fshow");
        audioSource.setAttribute("src", audioSrc);
        audioPlayer.load();
        audioPlayer.play();
        pipBtn.style.color = "#000000";
      }
    });
  });
});

// video player
document.addEventListener("DOMContentLoaded", function () {
  var player = videojs("my-video", {
    autoplay: false,
    preload: "none",
    liveui: true,
  });

  var videolistItems = document.querySelectorAll(".videolist-item");

  videolistItems.forEach(function (item) {
    item.addEventListener("click", function () {
      videolistItems.forEach(function (i) {
        i.classList.remove("active");
      });

      item.classList.add("active");

      var videoSrc = item.getAttribute("data-src");

      player.src({ src: videoSrc, type: "application/x-mpegURL" });

      document.getElementById("my-video").style.display = "block";

      player.play();
    });
  });
});
