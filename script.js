document.addEventListener("DOMContentLoaded", () => {
  // === Loader Fade-Out ===
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    if (loader) {
      loader.style.opacity = 0;
      setTimeout(() => loader.remove(), 600);
    }
  });

  // === Theme Toggle ===
  const themeToggle = document.getElementById("theme-toggle");
  const saved = localStorage.getItem("theme") || "light";
  document.body.dataset.theme = saved;
  themeToggle.textContent = saved === "light" ? "🌙" : "☀️";
  themeToggle.addEventListener("click", () => {
    const next = document.body.dataset.theme === "light" ? "dark" : "light";
    document.body.dataset.theme = next;
    localStorage.setItem("theme", next);
    themeToggle.textContent = next === "light" ? "🌙" : "☀️";
  });

  // === Back to Top Button ===
  const backBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (backBtn) {
      backBtn.style.display = (window.scrollY > 300) ? "block" : "none";
    }
  });
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // === Typing Subtitle ===
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

  // === GSAP Animations ===
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section, .project-card, .skill-card, .resume-item").forEach(el => {
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
