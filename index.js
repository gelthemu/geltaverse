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

// open the menu && content selection
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
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
