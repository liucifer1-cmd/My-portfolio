// === THEME TOGGLE ===
const themeToggle = document.getElementById("theme-toggle");
const currentTheme = localStorage.getItem("theme") || "light";
document.body.dataset.theme = currentTheme;
themeToggle.textContent = currentTheme === "light" ? "🌙" : "☀️";

themeToggle.addEventListener("click", () => {
  const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
  document.body.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
  themeToggle.textContent = nextTheme === "light" ? "🌙" : "☀️";
});

// === SCROLL TO TOP BUTTON ===
const scrollBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === GSAP ANIMATIONS ===
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
      }
    });
  });

  gsap.utils.toArray(".project-card, .skill-card, .resume-item").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
      }
    });
  });
});
