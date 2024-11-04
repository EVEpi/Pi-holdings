// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animated Stats Counter
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCounter = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
  
      const increment = target / 200;
  
      if(count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCounter, 10);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
  
  // Accordion for FAQ
  document.querySelectorAll('.accordion-btn').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      button.classList.toggle('active');
      content.style.maxHeight = content.style.maxHeight ? null : `${content.scrollHeight}px`;
    });
  });
  
  // Fade-in Animation on Scroll
  const sections = document.querySelectorAll('section');
  const options = {
    threshold: 0.3
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  
  sections.forEach(section => {
    observer.observe(section);
  });
  