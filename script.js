'use strict';

/**
 * NAVBAR TOGGLE
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

/**
 * NAVBAR LINK CLOSE
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    navToggleBtn.classList.remove("active");
  });
});

/**
 * HEADER & BACK TOP BTN ACTIVE ON SCROLL
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * SMOOTH SCROLL
 */

const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth"
      });
    }
  });
});

/**
 * PRELOADER
 */

const preloader = document.createElement("div");
preloader.className = "preloader";
preloader.innerHTML = `
  <div class="preloader-inner">
    <div class="preloader-circle"></div>
    <div class="preloader-text">Loading</div>
  </div>
`;

document.body.prepend(preloader);

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 1000);
});

/**
 * ANIMATE ON SCROLL
 */

const animateOnScroll = () => {
  const elements = document.querySelectorAll('.section-title, .section-subtitle, .section-text, .portfolio-card, .skills-item, .movie-card');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
};

// Set initial styles
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll('.section-title, .section-subtitle, .section-text, .portfolio-card, .skills-item, .movie-card');
  
  animateElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });
  
  // Trigger first check
  animateOnScroll();
});

// Add scroll event listener
window.addEventListener("scroll", animateOnScroll);

/**
 * TYPEWRITER EFFECT
 */

const typewriter = () => {
  const elements = document.querySelectorAll('.typewriter');
  
  if (elements.length > 0) {
    elements.forEach(element => {
      const text = element.textContent;
      element.textContent = "";
      
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 100);
    });
  }
};

// Call typewriter on load
window.addEventListener("load", typewriter);