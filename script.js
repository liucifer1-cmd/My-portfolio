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
<script>
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch('hhttps://hooks.zapier.com/hooks/catch/23652477/u34rdfl/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('thank-you').style.display = 'block';
    } else {
      alert('There was a problem. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Something went wrong!');
  });
});
</script>
