// dynamic year
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll to nav cards
document.querySelector('.scroll-arrow').addEventListener('click', () => {
  document.querySelector('#nav').scrollIntoView({ behavior: 'smooth' });
});
