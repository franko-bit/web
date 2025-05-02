const chartLine = document.querySelector('.chart-line');
const barCount = 40;

for (let i = 0; i < barCount; i++) {
    const initialHeight = Math.floor(Math.random() * 60) + 5;
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = `${initialHeight}%`;
    chartLine.appendChild(bar);
    
    // Add subtle animation
    setInterval(() => {
        const newHeight = initialHeight + (Math.random() * 15 - 7.5);
        bar.style.height = `${Math.max(5, Math.min(95, newHeight))}%`;
    }, 2000 + (i * 100));
}

// Logo animation on scroll
window.addEventListener('scroll', () => {
    const squares = document.querySelectorAll('.square');
    const scrollPos = window.scrollY;
    
    squares.forEach((square, index) => {
        const rotate = scrollPos / 100 * (index + 1);
        square.style.transform = `rotate(${rotate}deg)`;
    });
});



const testimonials = document.querySelectorAll(".testimonial-item");
const dots = document.querySelectorAll(".testimonial-dot");
let currentIndex = 0;

function showTestimonial(index) {
testimonials.forEach((item, i) => {
item.classList.toggle("active", i === index);
dots[i].classList.toggle("active", i === index);
});
}

function nextTestimonial() {
currentIndex = (currentIndex + 1) % testimonials.length;
showTestimonial(currentIndex);
}

dots.forEach(dot => {
dot.addEventListener("click", () => {
currentIndex = parseInt(dot.dataset.index);
showTestimonial(currentIndex);
});
});

setInterval(nextTestimonial, 5000); // slide every 5 seconds


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

// ✅ Add this function to handle closing
function closeMenu() {
hamburger.classList.remove('active');
navMenu.classList.remove('active');
overlay.classList.remove("active");
}

// Toggle Mobile Menu
hamburger.addEventListener('click', () => {
hamburger.classList.toggle('active');
navMenu.classList.toggle('active');
overlay.classList.toggle("active");
});

// Close mobile menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
link.addEventListener('click', closeMenu);
});

// ✅ Now these work correctly
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const toggleIcon = mobileNavToggle.querySelector('i');

mobileNavToggle.addEventListener('click', function(event) {
event.stopPropagation();
navMenu.classList.toggle('show');

// Update icon based on menu state
if (navMenu.classList.contains('show')) {
  toggleIcon.classList.remove('fa-bars');
  toggleIcon.classList.add('fa-times');
} else {
  toggleIcon.classList.remove('fa-times');
  toggleIcon.classList.add('fa-bars');
}
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
if (!navMenu.contains(event.target) && !mobileNavToggle.contains(event.target) && navMenu.classList.contains('show')) {
  navMenu.classList.remove('show');
  toggleIcon.classList.remove('fa-times');
  toggleIcon.classList.add('fa-bars');
}
});

// Prevent menu from closing when clicking inside
navMenu.addEventListener('click', function(event) {
event.stopPropagation();
});

// Close menu when window is resized above mobile breakpoint
window.addEventListener('resize', function() {
if (window.innerWidth > 768 && navMenu.classList.contains('show')) {
  navMenu.classList.remove('show');
  toggleIcon.classList.remove('fa-times');
  toggleIcon.classList.add('fa-bars');
}
});

// Ensure links in the navigation work properly
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
link.addEventListener('click', function(event) {
  // If on mobile, close the menu after clicking a link
  if (window.innerWidth <= 768) {
    navMenu.classList.remove('show');
    toggleIcon.classList.remove('fa-times');
    toggleIcon.classList.add('fa-bars');
  }
});
});
});