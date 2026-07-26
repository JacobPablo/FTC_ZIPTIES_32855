const sponsorCards = document.querySelectorAll('.sponsors');

sponsorCards.forEach(function(card) {
    card.addEventListener('click', function(event) {
        if (event.target.closest('a')) {
            return; 
        }
        this.classList.toggle('expanded');
    });
});

const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) {
        themeToggle.checked = true;
    }
} else {
    if (themeToggle) {
        themeToggle.checked = false;
    }
}

if (themeToggle) {
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
}

let slideIndex = 0;

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  if (slides.length === 0) return;
  
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    slides[i].style.display = "none";
  }
  
  slides[slideIndex].classList.add("active");
  slides[slideIndex].style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  setInterval(() => { changeSlide(1); }, 4000);
});