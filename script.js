document.addEventListener("DOMContentLoaded", () => {
  // Loader (if using a loader element)
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(() => loader.remove(), 600);
    }
  });

  // Theme Toggle
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedTheme;
  themeToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";

  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.dataset.theme === "light" ? "dark" : "light";
    document.body.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    themeToggle.textContent = nextTheme === "light" ? "🌙" : "☀️";
  });

  // Back-to-top Button
  const backBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (backBtn) {
      backBtn.style.display = window.scrollY > 300 ? "block" : "none";
    }
  });
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Typing Subtitle
  const subtitleEl = document.getElementById("typed-text");
  if (subtitleEl) {
    const text = "Helping dental practices grow with marketing, tech, and admin excellence.";
    let i = 0;
    function type() {
      if (i < text.length) {
        subtitleEl.textContent += text.charAt(i);
        i++;
        setTimeout(type, 30);
      }
    }
    type();
  }

  // GSAP Animations
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const elements = document.querySelectorAll("section, .project-card, .skill-card, .resume-item");
    elements.forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });
    });
  }
});
