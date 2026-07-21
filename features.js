const sponsorCards = document.querySelectorAll('.sponsors');

sponsorCards.forEach(function(card) {
    card.addEventListener('click', function(event) {
        if (event.target.closest('a')) {
            return; 
        }
        this.classList.toggle('expanded');
    });
});

// Select the checkbox instead of the old button
const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Apply the saved theme on load and keep the switch state in sync
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    if (themeToggle) {
        themeToggle.checked = true; // Check the slider for light mode
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
showSlides(slideIndex);


function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("carousel-slide");
  
  // If we go past the last image, loop back to the first
  if (n >= slides.length) {
    slideIndex = 0;
  }
  // If we go backward past the first image, loop to the last
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  

  slides[slideIndex].style.display = "block";
}
setInterval(() => { changeSlide(1); }, 4000);