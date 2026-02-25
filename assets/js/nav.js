document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Mobile dropdown toggles
  document.querySelectorAll(".has-dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 700) {
        e.preventDefault();
        const parent = link.parentElement;

        // Close all other dropdowns
        document.querySelectorAll(".has-dropdown.open").forEach(openItem => {
          if (openItem !== parent) openItem.classList.remove("open");
        });

        // Toggle this one
        parent.classList.toggle("open");
      }
    });
  });
});
