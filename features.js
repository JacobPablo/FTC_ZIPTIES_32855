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
  }
  
  slides[slideIndex].classList.add("active");
}

document.addEventListener("DOMContentLoaded", function() {
  showSlides(slideIndex);
  setInterval(() => { changeSlide(1); }, 4000);
});
// Counter for the next upcoming event day
const eventDate = "September 12, 2026 09:00:00";
const targetDate = new Date(eventDate).getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance < 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const msInSecond = 1000;
  const msInMinute = 1000 * 60;
  const msInHour = 1000 * 60 * 60;
  const msInDay = 1000 * 60 * 60 * 24;

  const days = Math.floor(distance / msInDay);
  const hours = Math.floor((distance % msInDay) / msInHour);
  const minutes = Math.floor((distance % msInHour) / msInMinute);
  const seconds = Math.floor((distance % msInMinute) / msInSecond);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);