document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fill").forEach((bar) => {
    const width = bar.style.width;
    bar.style.width = "0";
    setTimeout(() => (bar.style.width = width), 100);
  });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const mobileNav = document.getElementById('mobile-nav');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? '×' : '&#9776;';
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      hamburger.innerHTML = '&#9776;';
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      hamburger.innerHTML = '&#9776;';
    }
  });
});