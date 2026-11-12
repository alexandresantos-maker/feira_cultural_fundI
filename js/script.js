/*
  Pequenos Curadores | Museu Virtual
  O conteúdo do site está todo no index.html.
  Este arquivo contém somente interações e comportamentos da página.
*/

// Pausa as galerias enquanto o visitante observa, aponta ou toca nas imagens.
function ativarGaleriasAutomaticas() {
  document.querySelectorAll('.galeria-viewport').forEach((viewport) => {
    const trilho = viewport.querySelector('.galeria-trilho.animar');
    if (!trilho) return;

    viewport.addEventListener('mouseenter', () => trilho.classList.add('pausado'));
    viewport.addEventListener('mouseleave', () => trilho.classList.remove('pausado'));
    viewport.addEventListener('focusin', () => trilho.classList.add('pausado'));
    viewport.addEventListener('focusout', () => trilho.classList.remove('pausado'));
    viewport.addEventListener('touchstart', () => trilho.classList.add('pausado'), { passive: true });
    viewport.addEventListener('touchend', () => trilho.classList.remove('pausado'), { passive: true });
  });
}

// Destaca no menu a sala que está visível na tela.
function ativarNavegacao() {
  const links = [...document.querySelectorAll('.navegacao a')];
  const secoes = links
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!('IntersectionObserver' in window)) return;

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) return;
      links.forEach((link) => {
        const selecionado = link.getAttribute('href') === '#' + entrada.target.id;
        link.classList.toggle('ativo', selecionado);
      });
    });
  }, { rootMargin: '-25% 0px -65% 0px' });

  secoes.forEach((secao) => observador.observe(secao));
}

// Inicializa apenas os comportamentos; nenhum conteúdo é criado por JavaScript.
document.addEventListener('DOMContentLoaded', () => {
  ativarGaleriasAutomaticas();
  ativarNavegacao();
});
