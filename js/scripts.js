// audio players
document.addEventListener("DOMContentLoaded", function () {
  const audiolistItems = document.querySelectorAll(".audiolist-item");
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = audioPlayer.querySelector("source");

  audiolistItems.forEach((item) => {
    item.addEventListener("click", function () {
      audiolistItems.forEach(function (i) {
        i.classList.remove("active");
      });

      item.classList.add("active");

      const audioSrc = item.getAttribute("data-src");
      audioSource.setAttribute("src", audioSrc);
      audioPlayer.load();
      audioPlayer.play();
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

      player.src({ src: videoSrc, type: "application/x-mpegURL" });

      document.getElementById("my-video").style.display = "block";
    });
  });
});
