document.addEventListener("DOMContentLoaded", () => {
  try {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
      console.error("GSAP or ScrollTrigger not loaded.");
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // --- Animate on page load ---
    gsap.from("header", {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power3.out"
    });

    gsap.from(".profile-img", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.3,
      ease: "back.out(1.7)"
    });

    gsap.from(".subtitle", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.6
    });

    gsap.from(".cta-btn", {
      opacity: 0,
      scale: 0.9,
      delay: 0.9,
      duration: 0.8
    });

    // Animate navbar links on load
    const navLinks = document.querySelectorAll(".navbar a");
    gsap.from(navLinks, {
      opacity: 0,
      y: -10,
      stagger: 0.1,
      delay: 1,
      duration: 0.5
    });

    // --- Scroll-triggered animations ---
    gsap.utils.toArray("section, .project-card, .skills-list div").forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: i * 0.05,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        }
      });
    });

  } catch (err) {
    console.error("GSAP animation error:", err);
  }
});
