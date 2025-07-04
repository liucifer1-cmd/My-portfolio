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

gsap.utils.toArray(".zoom-in").forEach((element, i) => {
  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: i * 0.3,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});