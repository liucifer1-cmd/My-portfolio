document.addEventListener("DOMContentLoaded", () => {
  // Loader fadeout
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => loader.remove(), 300);
    }, 800);
  });

  // Back to top button
  const backBtn = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    backBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  backBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Smooth scrolling for nav links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });

  // Typing animation for subtitle
  const subtitle = document.querySelector(".subtitle");
  const text = subtitle.textContent;
  subtitle.textContent = "";
  let idx = 0;
  const typing = () => {
    if (idx < text.length) {
      subtitle.textContent += text[idx++];
      setTimeout(typing, 50);
    }
  };
  typing();

  // Dark/light theme toggle
  const themeToggle = document.createElement("button");
  themeToggle.id = "theme-toggle";
  themeToggle.textContent = "🌙";
  document.body.appendChild(themeToggle);
  const setTheme = theme => {
    document.body.dataset.theme = theme;
    localStorage.setItem("theme", theme);
    themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
  };
  const saved = localStorage.getItem("theme") || "light";
  setTheme(saved);
  themeToggle.addEventListener("click", () => {
    setTheme(document.body.dataset.theme === "light" ? "dark" : "light");
  });

  // GSAP animations (on load + scroll)
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("header", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".profile-img", { opacity: 0, scale: 0.8, duration: 1, delay: 0.3, ease: "back.out(1.7)" });
    gsap.from(".cta-btn", { opacity: 0, scale: 0.9, duration: 0.8, delay: 0.9 });
    gsap.from(".navbar a", { opacity: 0, y: -10, duration: 0.5, delay: 1, stagger: 0.1 });

    const elems = gsap.utils.toArray("section, .project-card, .skills-list div");
    elems.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2 + i * 0.05,
        scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" }
      });
    });
  }
});
