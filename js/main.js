// Activar clase reveal si el scroll pasa ciertos elementos (opcional animación futura)
const reveals = document.querySelectorAll('.section');

function revealOnScroll() {
  for (let section of reveals) {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      section.classList.add('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);

// Placeholder para futuras animaciones tipo terminal / escribir comandos

// Scroll reveal básico (puede personalizarse)
const sections = document.querySelectorAll('.section');
function revealOnScroll() {
  for (let section of sections) {
    const top = section.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) {
      section.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);

// Animación de tipado en el título
const typedText = document.getElementById('typed-text');
const text = '> Cristian Salazar';
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}
window.addEventListener('load', typeEffect);

// Smooth scroll manual para navegación
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
