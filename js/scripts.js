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
document.addEventListener("DOMContentLoaded", function () {
  var player = videojs("my-video", {
    autoplay: false,
    preload: "none",
    liveui: true,
  });

  var playlistItems = document.querySelectorAll(".playlist-item");

  playlistItems.forEach(function (item) {
    item.addEventListener("click", function () {
      playlistItems.forEach(function (i) {
        i.classList.remove("active");
      });

      item.classList.add("active");

      var videoSrc = item.getAttribute("data-src");
      var videoPoster = item.getAttribute("data-poster");

      player.src({ src: videoSrc, type: "application/x-mpegURL" });
      player.poster(videoPoster);
    });
  });
});
