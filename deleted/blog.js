// open the menu && content selection
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("menuClose");
  const menu = document.getElementById("menu");
  const menuBackdrop = document.getElementById("menu-backdrop");
  const navScrollLinks = document.querySelectorAll(".nav-scroll");
  const navbar = document.querySelector(".navbar");
  const navbarOffset = document.querySelector(".navbar-offset");
  const filterTabs = document.querySelectorAll(".filter-tab");
  const mainContent = document.querySelectorAll(".content");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("show");
    menuBackdrop.classList.add("show");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.remove("show");
    menuBackdrop.classList.remove("show");
  });

  const activateContent = (target) => {
    mainContent.forEach((content) => {
      content.classList.toggle("active", content.id === target);
    });
  };

  const activateTab = (target) => {
    filterTabs.forEach((tab) => {
      tab.classList.toggle("active", tab.dataset.target === target);
    });
  };

  const scrollToTarget = (target) => {
    const targetElement = document.getElementById(target);
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const navbarOffsetHeight = navbarOffset ? navbarOffset.offsetHeight : 0;
    const offset = navbarHeight + navbarOffsetHeight;

    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.target;
      activateContent(target);
      activateTab(target);
      scrollToTarget(target);
    });
  });

  navScrollLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const target = link.dataset.target;
      activateContent(target);
      activateTab(target);
      menu.classList.remove("show");
      menuBackdrop.classList.remove("show");
      scrollToTarget(target);
    });
  });
});

// audio players
document.addEventListener("DOMContentLoaded", () => {
  const playlistItems = document.querySelectorAll(".playlist-item");
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = audioPlayer.querySelector("source");

  const miniPlayer = document.getElementById("mini-player");
  const pipBtn = document.getElementById("pip-button");

  playlistItems.forEach((item) => {
    item.addEventListener("click", () => {
      playlistItems.forEach((i) => i.classList.remove("active"));
      item.classList.add("active");

      const audioSrc = item.getAttribute("data-src");
      audioSource.setAttribute("src", audioSrc);
      audioPlayer.load();
      audioPlayer.volume = 0.5;
      audioPlayer.play();

      miniPlayer.classList.add("show");
      startPipCycle();
    });
  });

  const togglePipBtn = () => {
    pipBtn.classList.toggle("show");
  };

  const startPipCycle = () => {
    setInterval(() => {
      togglePipBtn();
      setTimeout(() => {
        togglePipBtn();
      }, 6000);
    }, 12000);
  };

  pipBtn.addEventListener("click", () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    audioSource.src = "";
    audioPlayer.load();

    miniPlayer.classList.remove("show");
    playlistItems.forEach((i) => i.classList.remove("active"));
  });
});
