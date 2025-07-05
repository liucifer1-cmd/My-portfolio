gsap.registerPlugin(ScrollTrigger);

// Animation Utility Function
function animateElements(selector, props, delayStep = 0) {
  gsap.utils.toArray(selector).forEach((el, i) => {
    gsap.from(el, {
      ...props,
      delay: i * delayStep,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  });
}

animateElements(".fade-in", { opacity: 0, y: 50, duration: 1 });
animateElements(".slide-up", { opacity: 0, y: 100, duration: 1.2 }, 0.2);
animateElements(".zoom-in", { scale: 0.8, opacity: 0, duration: 1 }, 0.3);

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');
  const thankYou = document.getElementById('thank-you');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = form.querySelector('button');
      btn.textContent = 'Sending...';

      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      fetch('https://hooks.zapier.com/hooks/catch/23652477/u34rdfl/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          form.style.display = 'none';
          thankYou.style.display = 'block';
        } else {
          alert('Oops! Something went wrong. Please try again.');
        }
        btn.textContent = 'Send Message';
      })
      .catch(error => {
        alert('There was an error sending your message.');
        btn.textContent = 'Send Message';
      });
    });
  }
});
