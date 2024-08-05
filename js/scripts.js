// media players
document.addEventListener("DOMContentLoaded", (event) => {
  const mediaPlayers = [
    {
      media: document.getElementById("media1"),
      btn: document.getElementById("player1").querySelector(".play-pause-btn"),
    },
    {
      media: document.getElementById("media2"),
      btn: document.getElementById("player2").querySelector(".play-pause-btn"),
    },
    {
      media: document.getElementById("media3"),
      btn: document.getElementById("player3").querySelector(".play-pause-btn"),
    },
    {
      media: document.getElementById("media4"),
      btn: document.getElementById("player4").querySelector(".play-pause-btn"),
    },
  ];

  let currentlyPlaying = null;

  mediaPlayers.forEach((player) => {
    player.btn.addEventListener("click", () => {
      if (player.media.paused) {
        if (currentlyPlaying && currentlyPlaying !== player.media) {
          currentlyPlaying.pause();
          currentlyPlaying
            .closest(".media-player")
            .querySelector(".play-pause-btn").innerHTML =
            '<i class="fa-solid fa-play"></i>';
        }
        player.media.play();
        player.btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        currentlyPlaying = player.media;
      } else {
        player.media.pause();
        player.btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        currentlyPlaying = null;
      }
    });

    player.media.addEventListener("ended", () => {
      player.btn.innerHTML = '<i class="fa-solid fa-play"></i>';
      currentlyPlaying = null;
    });
  });
});

// video player
document.addEventListener("DOMContentLoaded", () => {
  const videoPlayers = [
    {
      video: document.getElementById("video1"),
      btn: document
        .getElementById("video-player1")
        .querySelector(".play-pause-btn"),
    },
    {
      video: document.getElementById("video2"),
      btn: document
        .getElementById("video-player2")
        .querySelector(".play-pause-btn"),
    },
    {
      video: document.getElementById("video3"),
      btn: document
        .getElementById("video-player3")
        .querySelector(".play-pause-btn"),
    },
    {
      video: document.getElementById("video4"),
      btn: document
        .getElementById("video-player4")
        .querySelector(".play-pause-btn"),
    },
  ];

  let currentlyPlaying = null;

  videoPlayers.forEach((player) => {
    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(player.video.querySelector("source").src);
      hls.attachMedia(player.video);
    } else if (player.video.canPlayType("application/vnd.apple.mpegURL")) {
      player.video.src = player.video.querySelector("source").src;
    }

    player.btn.addEventListener("click", () => {
      if (player.video.paused) {
        if (currentlyPlaying && currentlyPlaying !== player.video) {
          currentlyPlaying.style.opacity = "0";
          currentlyPlaying.pause();
          currentlyPlaying
            .closest(".video-player")
            .querySelector(".play-pause-btn").innerHTML =
            '<i class="fa-solid fa-play"></i>';
        }
        player.video.style.opacity = "1";
        setTimeout(() => {
          player.video.play();
        }, 500);
        player.btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        currentlyPlaying = player.video;
      } else {
        player.video.style.opacity = "0";
        player.video.pause();
        player.btn.innerHTML = '<i class="fa-solid fa-play"></i>';
        currentlyPlaying = null;
      }
    });

    player.video.addEventListener("ended", () => {
      player.video.style.opacity = "0";
      player.btn.innerHTML = '<i class="fa-solid fa-play"></i>';
      currentlyPlaying = null;
    });
  });
});
