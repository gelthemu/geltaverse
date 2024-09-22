// on-scroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollTop = document.getElementById("scrollTop");

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