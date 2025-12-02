const slides = document.querySelectorAll('.slides .slide');
const nextIcon = document.querySelector('.next');
const prevIcon = document.querySelector('.prev');
let current = 0;
let intervalId = null;

// --- Slider code ---
const slidesContainer = document.querySelector('.slides');
if (slidesContainer) {
  const slides = slidesContainer.querySelectorAll('.slide');
  const nextIcon = document.querySelector('.next');
  const prevIcon = document.querySelector('.prev');
  let current = 0;
  let intervalId = null;

  function showSlide(index){
    slides.forEach((s,i) => {
      s.classList.remove('active');
      s.style.zIndex = (i===index) ? 2 : 1;
    });
    slides[index].classList.add('active');
    current = index;
    restartAuto();
  }

  if (nextIcon) {
    nextIcon.addEventListener('click', () => {
      showSlide((current + 1) % slides.length);
    });
  }

  if (prevIcon) {
    prevIcon.addEventListener('click', () => {
      showSlide((current - 1 + slides.length) % slides.length);
    });
  }

  function autoSlide(){
    intervalId = setInterval(() => {
      showSlide((current + 1) % slides.length);
    }, 8000);
  }

  function restartAuto(){
    if(intervalId) clearInterval(intervalId);
    autoSlide();
  }

  // start slider
  showSlide(0);
  autoSlide();
}


// for my nav

// --- Navbar code ---
window.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    fetch('nav.html')
      .then(response => response.text())
      .then(data => {
        navbar.innerHTML = data;
        // Select elements
const hamburger = document.querySelector('.hamburger');
const firUl = document.querySelector('.fir-ul');

// Only run if both elements exist on this page
if (hamburger && firUl) {
  hamburger.addEventListener('click', () => {
    firUl.classList.toggle('active'); // toggle menu visibility
  });
}

      })
      .catch(error => console.error('Error loading nav:', error));
  }
});

//  ABOUT
// Self-contained function to animate the About section
(function() {
  const aboutSection = document.querySelector('.about-section');

  if (!aboutSection) return; // exit if no about-section exists

  function revealAboutSection() {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100; // triggers when near viewport

    if (sectionTop < triggerPoint) {
      aboutSection.classList.add('visible');
      window.removeEventListener('scroll', revealAboutSection); // only animate once
    }
  }

  // Listen to scroll event safely
  window.addEventListener('scroll', revealAboutSection);

  // Optional: trigger immediately in case section is already in view on page load
  revealAboutSection();
})();


(function() {
  const fadeElements = document.querySelectorAll('.fade-element');
  
  if (!fadeElements.length) return;
  
  function revealOnScroll() {
    fadeElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 80;
      
      if (elementTop < triggerPoint) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
})();


//  SERVICES
(function() {
  // Select all elements with fade-element class
  const fadeElements = document.querySelectorAll('.fade-element');
  
  if (!fadeElements.length) return; // Exit if none found
  
  function revealOnScroll() {
    fadeElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 80; // Adjust when element becomes visible
      
      if (elementTop < triggerPoint) {
        el.classList.add('visible'); // Add class to trigger CSS transition
      }
    });
  }

  // Run on scroll
  window.addEventListener('scroll', revealOnScroll);
  
  // Run on page load (in case elements already in view)
  revealOnScroll();
})();


// FOR ABOUT AND SERVICES
(function() {
  // Helper function to reveal elements with stagger
  function revealElements(selector, delay = 150) {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    elements.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 80;

      if (elementTop < triggerPoint && !el.classList.contains('visible')) {
        setTimeout(() => {
          el.classList.add('visible');
        }, index * delay);
      }
    });
  }

  function onScroll() {
    // Animate Services cards
    revealElements('.services-page .fade-element', 150);

    // Animate Did You Know / About cards
    revealElements('.did-you-know .fade-element', 200);
  }

  // Listen to scroll
  window.addEventListener('scroll', onScroll);

  // Run on page load
  onScroll();
})();

// FOR MY FORM
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('contact-form');
  const messageBox = document.getElementById('form-message');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Hide previous messages
    messageBox.style.display = 'none';

    // Collect form data
    const formData = {
      name: form.querySelector('[name="name"]').value,
      email: form.querySelector('[name="email"]').value,
      message: form.querySelector('[name="message"]').value,
    };

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        messageBox.textContent = "✅ Your message has been sent successfully!";
        messageBox.style.color = "#155724";
        messageBox.style.backgroundColor = "#d4edda";
        messageBox.style.border = "1px solid #c3e6cb";
        messageBox.style.padding = "10px";
        messageBox.style.borderRadius = "8px";
        messageBox.style.display = "block";
        form.reset();
      } else {
        messageBox.textContent = "⚠️ There was an error sending your message. Please try again.";
        messageBox.style.color = "#721c24";
        messageBox.style.backgroundColor = "#f8d7da";
        messageBox.style.border = "1px solid #f5c6cb";
        messageBox.style.padding = "10px";
        messageBox.style.borderRadius = "8px";
        messageBox.style.display = "block";
      }
    } catch (err) {
      messageBox.textContent = "❌ Network error. Please check your connection.";
      messageBox.style.color = "#721c24";
      messageBox.style.backgroundColor = "#f8d7da";
      messageBox.style.border = "1px solid #f5c6cb";
      messageBox.style.padding = "10px";
      messageBox.style.borderRadius = "8px";
      messageBox.style.display = "block";
    }
  });
});
