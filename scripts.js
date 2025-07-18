const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('nav a, #home-link');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href') || '#home';
    sections.forEach(section => section.classList.remove('visible'));
    document.querySelector(targetId).classList.add('visible');
  });
});
