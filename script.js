// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// mouse-aware gradient glow
const glow = document.getElementById('glow');
window.addEventListener('mousemove', e => {
  glow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
});

// fade-in on scroll
const faders = document.querySelectorAll('.fade');
const appearOptions = { threshold: .2 };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(el => appearOnScroll.observe(el));
