// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

// Fade-in animation
gsap.utils.toArray(".fade-in").forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// Slide-up animation
gsap.utils.toArray(".slide-up").forEach((element, i) => {
  gsap.from(element, {
    opacity: 0,
    y: 100,
    duration: 1.2,
    delay: i * 0.2,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// Zoom-in animation
gsap.utils.toArray(".zoom-in").forEach((element, i) => {
  gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: i * 0.3,
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
});

// Zapier contact form submission handler
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      };

      console.log("Sending data to Zapier:", data);

      fetch('https://hooks.zapier.com/hooks/catch/23652477/u34rdfl/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      .then(response => {
        if (response.ok) {
          form.style.display = 'none';
          document.getElementById('thank-you').style.display = 'block';
        } else {
          alert('Oops! Something went wrong. Please try again.');
          console.error("Zapier response error:", response);
        }
      })
      .catch(error => {
        console.error('Error sending message:', error);
        alert('There was an error sending your message. Please try again later.');
      });
    });
  }
});
