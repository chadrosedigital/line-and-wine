const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !expanded);
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Open navigation');
    menu.focus();
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    document.querySelectorAll('[data-category]').forEach(item => {
      item.hidden = button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter;
    });
  });
});
const dialog = document.querySelector('.lightbox');
document.querySelectorAll('button.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const source = item.querySelector('img');
    dialog.querySelector('img').src = source.src;
    dialog.querySelector('img').alt = source.alt;
    dialog.querySelector('p').textContent = item.dataset.caption;
    dialog.showModal();
  });
});
document.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  }
});

const ribbonToggle = document.querySelector('.ribbon-toggle');
if (ribbonToggle) {
  ribbonToggle.addEventListener('click', () => {
    const paused = ribbonToggle.closest('.ribbon').classList.toggle('is-paused');
    ribbonToggle.setAttribute('aria-pressed', String(paused));
    ribbonToggle.setAttribute('aria-label', paused ? 'Play scrolling banner' : 'Pause scrolling banner');
    ribbonToggle.textContent = paused ? 'Play' : 'Pause';
  });
}
