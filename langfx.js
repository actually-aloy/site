(function () {
  var busy = false;
  var pass = false;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var arm = function () {
    setTimeout(function () {
      document.documentElement.classList.add('lt-ready');
    }, 250);
  };
  if (document.readyState === 'complete') arm();
  else window.addEventListener('load', arm);
  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('#lang-toggle');
    if (!b || pass) return;
    if (busy || reduce || !document.startViewTransition) {
      if (busy) {
        e.stopPropagation();
        e.preventDefault();
      }
      return;
    }
    e.stopPropagation();
    e.preventDefault();
    busy = true;
    var t = document.startViewTransition(function () {
      pass = true;
      b.click();
      pass = false;
    });
    var done = function () { busy = false; };
    t.finished.then(done, done);
  }, true);
})();
