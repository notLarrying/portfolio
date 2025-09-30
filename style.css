// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// mouse spotlight
const spotlight = document.getElementById('spotlight');
window.addEventListener('mousemove', e => {
  spotlight.style.transform = `translate(${e.clientX - spotlight.offsetWidth/2}px, ${e.clientY - spotlight.offsetHeight/2}px)`;
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

// animated counters
const counters = document.querySelectorAll('.stat');
const speed = 200;
const countUp = (el, target) => {
  const inc = target / speed;
  let current = 0;
  const update = () => {
    if (current < target) {
      current += inc;
      el.textContent = Math.ceil(current);
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  };
  update();
};
const counterObserver = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const target = +entry.target.dataset.target;
    countUp(entry.target, target);
    obs.unobserve(entry.target);
  });
}, { threshold: .5 });
counters.forEach(c => counterObserver.observe(c));
