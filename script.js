document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray("section, header, .project-card, .skills-list div").forEach((element, i) => {
    gsap.from(element, {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: i * 0.1,
      scrollTrigger: {
        trigger: element,
        start: "top 90%",
        toggleActions: "play none none none"
      }
    });
  });
});
