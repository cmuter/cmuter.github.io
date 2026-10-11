// Progressive enhancement: content remains available without JavaScript.
document.documentElement.classList.add('js');
const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
});
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.textContent = 'Menu'; }
nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
const filters = document.querySelector('.filters');
filters.hidden = false;
filters.addEventListener('click', e => {
  const button = e.target.closest('button');
  if (!button) return;
  filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
  let count = 0;
  document.querySelectorAll('.project').forEach(card => {
    const categories = (card.dataset.category || '').split(',').map(category => category.trim());
    card.hidden = button.dataset.filter !== 'All' && !categories.includes(button.dataset.filter);
    if (!card.hidden) count++;
  });
  document.querySelector('#project-status').textContent = `${count} projects shown`;
});
document.querySelector('#year').textContent = new Date().getFullYear();
