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

// ---------- SPA router ----------
const snowApp = document.getElementById('snowApp');
const body = document.body;

function route() {
  const hash = location.hash;
  if (hash === '#/snow') {
    snowApp.classList.remove('hidden');
    body.classList.add('no-scroll');
    initSnow();
  } else {
    snowApp.classList.add('hidden');
    body.classList.remove('no-scroll');
  }
}
window.addEventListener('hashchange', route);
window.addEventListener('load', route);

// ---------- snow logic ----------
function initSnow() {
  const slides = document.querySelectorAll('.slide');
  const left = document.querySelector('.arrow.left');
  const right = document.querySelector('.arrow.right');
  const toggles = document.querySelectorAll('.toggle');
  let idx = 0;

  function show(i) {
    slides.forEach(s => s.classList.remove('active'));
    (slides[i] || slides[0]).classList.add('active');
  }
  right.addEventListener('click', () => {
    idx = (idx + 1) % slides.length;
    show(idx);
  });
  left.addEventListener('click', () => {
    idx = (idx - 1 + slides.length) % slides.length;
    show(idx);
  });
  show(idx);

  // filter toggle
  toggles.forEach(btn => btn.addEventListener('click', () => {
    toggles.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    slides.forEach(s => {
      const show = filter === 'all' || s.dataset.filter === filter;
      s.style.display = show ? 'block' : 'none';
    });
    // reset index to first visible
    idx = 0;
    show(0);
  }));
}
