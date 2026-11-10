// Menu mobile, filtros das turmas e janelas de detalhes.
const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const stationCards = document.querySelectorAll('.station-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    stationCards.forEach(card => {
      const grade = card.dataset.grade;
      card.hidden = filter !== 'todos' && grade !== filter &&
        !(filter === 'tecnologia' && grade === 'tecnologia');
    });
  });
});

document.querySelectorAll('[data-modal]').forEach(button => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.modal).showModal();
  });
});

document.querySelectorAll('.close-modal').forEach(button => {
  button.addEventListener('click', () => button.closest('dialog').close());
});

document.querySelectorAll('dialog').forEach(dialog => {
  dialog.addEventListener('click', event => {
    if (event.target === dialog) dialog.close();
  });
});
