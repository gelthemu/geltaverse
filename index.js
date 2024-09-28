// on-scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollTop = document.querySelector(".scrollTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTop.style.display = "flex";
    } else {
      scrollTop.style.display = "none";
    }
  });

  scrollTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// open the menu
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const menuClose = document.getElementById("menuClose");
  const menu = document.getElementById("menu");
  const menuBackdrop = document.getElementById("menu-backdrop");

  menuBtn.addEventListener("click", () => {
    menu.classList.add("show");
    menuBackdrop.classList.add("show");
  });

  menuClose.addEventListener("click", () => {
    menu.classList.remove("show");
    menuBackdrop.classList.remove("show");
  });
});

// demo-modal
document.addEventListener("DOMContentLoaded", () => {
  const demoBtns = document.getElementsByClassName("demo-btn");
  const demoModal = document.getElementById("demo-modal");
  const demoIframe = document.getElementById("demo-iframe");
  const demoClose = document.querySelector(".demo-close");

  const demoURLs = ["https://geltaverse.vercel.app", "https://bit.ly/3WSfgmd"];
  const demoTitles = ["CroozeFM.app", "FieldTherapist.app"];

  for (let i = 0; i < demoBtns.length; i++) {
    demoBtns[i].addEventListener("click", function () {
      demoIframe.setAttribute("src", demoURLs[i]);
      document.querySelector(".demo-title").innerHTML = demoTitles[i];
      demoModal.style.display = "block";
    });
  }

  demoClose.addEventListener("click", () => {
    demoIframe.setAttribute("src", "");
    demoModal.style.display = "none";
  });
});
