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




document.addEventListener('DOMContentLoaded', function() {
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
// Fix carousel functionality
const slides = document.querySelectorAll('.carousel-slide');
const indicators = document.querySelectorAll('.carousel-indicator');
let currentSlide = 0;
let isAnimating = false;

// Check if we have slides and indicators to work with
if (slides.length > 0 && indicators.length > 0) {
// Function to update active slide with improved animation
function showSlide(index, direction = null) {
if (isAnimating) return;
isAnimating = true;

// Calculate direction if not provided
if (direction === null) {
  direction = index > currentSlide ? 'next' : 'prev';
  // Handle edge cases
  if (currentSlide === slides.length - 1 && index === 0) direction = 'next';
  if (currentSlide === 0 && index === slides.length - 1) direction = 'prev';
}

// Remove all classes first
slides.forEach(slide => {
  slide.classList.remove('active', 'prev', 'next');
});

// Add appropriate classes based on direction
if (direction === 'next') {
  slides[currentSlide].classList.add('prev');
} else {
  slides[currentSlide].classList.add('next');
}

// Set the new active slide
slides[index].classList.add('active');

// Update indicators
indicators.forEach(indicator => {
  indicator.classList.remove('active');
});
indicators[index].classList.add('active');

// Set timeout to allow animation to complete
setTimeout(() => {
  isAnimating = false;
}, 400);

currentSlide = index;
}

// Add previous and next buttons to the carousel container
const carouselContainer = document.querySelector('.carousel-container');

// Create prev button
const prevBtn = document.createElement('button');
prevBtn.className = 'carousel-prev';
prevBtn.innerHTML = '&#10094;'; // Left arrow
prevBtn.addEventListener('click', () => {
const newIndex = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
showSlide(newIndex, 'prev');
});
carouselContainer.appendChild(prevBtn);

// Create next button
const nextBtn = document.createElement('button');
nextBtn.className = 'carousel-next';
nextBtn.innerHTML = '&#10095;'; // Right arrow
nextBtn.addEventListener('click', () => {
const newIndex = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
showSlide(newIndex, 'next');
});
carouselContainer.appendChild(nextBtn);

// Add click handlers to indicators
indicators.forEach((indicator, index) => {
indicator.addEventListener('click', () => {
  if (currentSlide !== index) {
    const direction = index > currentSlide ? 'next' : 'prev';
    showSlide(index, direction);
  }
});
});

// Auto-advance slides every 5 seconds
let slideInterval = setInterval(() => {
const nextIndex = (currentSlide + 1) % slides.length;
showSlide(nextIndex, 'next');
}, 5000);

// Pause auto-advance when hovering over carousel
carouselContainer.addEventListener('mouseenter', () => {
clearInterval(slideInterval);
});

// Resume auto-advance when mouse leaves carousel
carouselContainer.addEventListener('mouseleave', () => {
slideInterval = setInterval(() => {
  const nextIndex = (currentSlide + 1) % slides.length;
  showSlide(nextIndex, 'next');
}, 2900);
});
}
});
