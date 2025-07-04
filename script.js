// Wait for the DOM to load before running animations
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade In Elements (e.g., headers, paragraphs)
  gsap.utils.toArray(".fade-in").forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Slide Up Elements (e.g., profile, resume items)
  gsap.utils.toArray(".slide-up").forEach((element, i) => {
    gsap.from(element, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      delay: i * 0.2,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Zoom In Elements (e.g., skill cards, project cards)
  gsap.utils.toArray(".zoom-in").forEach((element, i) => {
    gsap.from(element, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      delay: i * 0.15,
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  // Parallax effect for subtle background movement (optional)
  if (document.querySelector(".parallax")) {
    gsap.from(".parallax", {
      y: 50,
      duration: 2,
      ease: "none",
      scrollTrigger: {
        trigger: ".parallax",
        scrub: true
      }
    });
  }

  // Add hover effects to interactive elements
  const hoverElements = document.querySelectorAll(".project-card, .skill-card, .btn");

  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(el, { scale: 1.05, duration: 0.3, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" });
    });

    el.addEventListener("mouseleave", () => {
      gsap.to(el, { scale: 1, duration: 0.3, boxShadow: "none" });
    });
  });
});