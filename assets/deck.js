// Navegación de decks IN3143. Flechas, espacio, PageUp/Down, Home/End.
// El hash de la URL guarda la lámina (#7) para retomar donde ibas.
(function () {
  var slides = Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var counter = document.getElementById('counter');
  var blockLabel = document.getElementById('block');
  var i = 0;

  function clamp(n) { return Math.max(0, Math.min(slides.length - 1, n)); }

  function show(n) {
    i = clamp(n);
    slides.forEach(function (s, k) { s.classList.toggle('active', k === i); });
    if (counter) counter.textContent = (i + 1) + ' / ' + slides.length;
    if (blockLabel) blockLabel.textContent = slides[i].dataset.block || '';
    if (history.replaceState) history.replaceState(null, '', '#' + (i + 1));
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); show(i + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); show(i - 1); }
    else if (e.key === 'Home') { show(0); }
    else if (e.key === 'End') { show(slides.length - 1); }
  });

  document.addEventListener('click', function (e) {
    if (e.target.closest('a')) return;
    show(i + 1);
  });

  var start = parseInt((location.hash || '').replace('#', ''), 10);
  show(isNaN(start) ? 0 : start - 1);
})();
