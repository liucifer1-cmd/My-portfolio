document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    loader.style.opacity = 0;
    setTimeout(() => loader.remove(), 600);
  });

  const backBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    backBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const themeToggle = document.getElementById("theme-toggle");
  const applyTheme = (theme) => {
    document.body.dataset.theme = theme;
    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
    localStorage.setItem("theme", theme);
  };
  const saved = localStorage.getItem("theme") || "light";
  applyTheme(saved);
  themeToggle.addEventListener("click", () => {
    applyTheme(document.body.dataset.theme === "light" ? "dark" : "light");
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const t = document.querySelector(a.getAttribute("href"));
      if (t) t.scrollIntoView({ behavior: "smooth" });
    });
  });

  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".profile-img", { opacity:0, scale:0.8, duration:1, delay:0.3 });
    gsap.from(".subtitle", { opacity:0, y:20, duration:1, delay:0.6 });
    gsap.from(".btn", { opacity:0, scale:0.9, duration:0.8, delay:0.9 });
    gsap.from(".navbar a", { opacity:0, y:-10, duration:0.5, delay:1, stagger:0.1 });
    gsap.utils.toArray("section, .project-card, .resume-item").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0, y: 50, duration: 0.8, delay: 0.3 + i * 0.05,
        scrollTrigger: { trigger: el, start:"top 90%", toggleActions:"play none none none" }
      });
    });
  }
});
