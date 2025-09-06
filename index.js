AOS.init({
  duration: 1000,
  once: true,
});

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlides() {
  slides.forEach((slide, index) => {
    // slide.style.display = index === currentSlide ? 'block' : 'none';
    slide.style.opacity = index === currentSlide ? '1' : '0';
  });
  currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
}

setInterval(showSlides, 3000); // Change slide every 3 seconds

// Initial display
showSlides();


const sliders = document.querySelectorAll('.review-slide');
let currentIndex = 0;

function showNextSlide() {
  // Hide the current slide
  sliders[currentIndex].classList.remove('active');

  // Update the index
  currentIndex = (currentIndex + 1) % sliders.length;

  // Show the next slide
  sliders[currentIndex].classList.add('active');
}

// Initialize the first slide
sliders[currentIndex].classList.add('active');

// Set the interval for the slider
setInterval(showNextSlide, 3000); // 3 seconds per slide

// for hamburger menu
const nav = document.querySelector('#nav')
const button = document.querySelector('#button')
const menuBg = document.querySelector('.overlay')

button.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBg.classList.toggle('active');
})

// debugged version

const slidess = document.querySelectorAll('.slide-2');
let currentSlides = 0;

function showSlidess() {
  slidess.forEach((slide, index) => {
    // slide.style.display = index === currentSlide ? 'block' : 'none';
    slide.style.opacity = index === currentSlides ? '1' : '0';
  });
  currentSlides = (currentSlides + 1) % slidess.length; // Loop back to the first slide
}

setInterval(showSlidess, 3000); // Change slide every 3 seconds

// Initial display
showSlidess();


// debugged version 2
const sliderss = document.querySelectorAll('.review-slides');
let currentIndexx = 0;

function showNextSlides() {
  // Hide the current slide
  sliderss[currentIndexx].classList.remove('active-2');

  // Update the index
  currentIndexx = (currentIndexx + 1) % sliderss.length;

  // Show the next slide
  sliderss[currentIndexx].classList.add('active-2');
}

// Initialize the first slide
sliderss[currentIndexx].classList.add('active-2');

// Set the interval for the slider
setInterval(showNextSlides, 3000); // 3 seconds per slide



function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = parseFloat(counter.getAttribute('data-target'));
    let current = 0;
    let increment = target < 10 ? 0.05 : Math.ceil(target / 100);

    function updateCount() {
      if (current < target) {
        current += increment;
        if (current > target) current = target;
        counter.innerText = target < 10 ? current.toFixed(1) : Math.floor(current);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target < 10 ? target.toFixed(1) : target;
      }
    }
    updateCount();
  });
}

// Animate when stats section is in view
function checkAndAnimateCounters() {
  const statsSection = document.querySelector('.stats-section');
  if (statsSection && statsSection.getBoundingClientRect().top < window.innerHeight) {
    animateCounters();
    window.removeEventListener('scroll', checkAndAnimateCounters);
  }
}

window.addEventListener('scroll', checkAndAnimateCounters);
window.addEventListener('DOMContentLoaded', checkAndAnimateCounters);

document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
// Particle effect
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 2 + 1; // particle size
    this.color = "rgba(255, 215, 0, 0.7)"; // golden glow
    this.speedX = (Math.random() - 0.5) * 0.3; 
    this.speedY = (Math.random() - 0.5) * 0.3;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // wrap around edges
    if (this.x < 0) this.x = canvas.width;
    if (this.x > canvas.width) this.x = 0;
    if (this.y < 0) this.y = canvas.height;
    if (this.y > canvas.height) this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = "gold";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.closePath();
  }
}

function init() {
  particles = [];
  for (let i = 0; i < 80; i++) {
    particles.push(new Particle());
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

init();
animate();

// resize on window change
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});
