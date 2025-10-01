// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// mouse spotlight
const spotlight = document.getElementById('spotlight');
window.addEventListener('mousemove', e => {
  spotlight.style.transform = `translate(${e.clientX - spotlight.offsetWidth/2}px, ${e.clientY - spotlight.offsetHeight/2}px)`;
});

// 3-D monogram tilt
const mono = document.getElementById('monogram');
window.addEventListener('mousemove', e => {
  const rect = mono.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width/2;
  const y = e.clientY - rect.top - rect.height/2;
  const rotateX = -y / 20;
  const rotateY = x / 20;
  mono.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// scroll fade-ins
const faders = document.querySelectorAll('.fade');
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: .15 });
faders.forEach(el => appearOnScroll.observe(el));
