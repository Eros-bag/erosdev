// Machine à écrire
const typedWord = document.getElementById("typed-word");
const words = ["Web Developer", "Programmer", "Translator"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (!isDeleting) {
    typedWord.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  } else {
    typedWord.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}
typeEffect();

// Animation des barres de compétences
const skillBars = document.querySelectorAll('.progress');
window.addEventListener('load', () => {
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    bar.style.width = percent + '%';
  });
});

const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Change l'icône selon le mode
  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "☀️"; // Soleil pour revenir au light mode
  } else {
    toggleButton.textContent = "🌙"; // Lune pour passer au dark mode
  }
});



