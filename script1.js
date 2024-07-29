document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll(".slideshow");

  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll(".slide");
    let currentSlide = 0;

    slides[currentSlide].style.display = "block";

    slideshow.dataset.currentSlide = currentSlide;
  });

  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Animasi untuk kartu
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = 1;
    }, 200 * index);
  });
});

function nextSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll(".slide");
  let currentSlide = parseInt(slideshow.dataset.currentSlide);

  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].style.display = "block";

  slideshow.dataset.currentSlide = currentSlide;
}

function prevSlide(slideshowId) {
  const slideshow = document.getElementById(slideshowId);
  const slides = slideshow.querySelectorAll(".slide");
  let currentSlide = parseInt(slideshow.dataset.currentSlide);

  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";

  slideshow.dataset.currentSlide = currentSlide;
}
