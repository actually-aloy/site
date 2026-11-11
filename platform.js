(function () {
  var tag = document.currentScript;
  var only = ((tag && tag.getAttribute('data-only')) || 'windows').toLowerCase().split(',').map(function (x) { return x.trim(); }).filter(Boolean);
  var NAMES = {
    windows: ['Windows', 'ویندوز'],
    macos: ['macOS', 'مک'],
    linux: ['Linux', 'لینوکس'],
    android: ['Android', 'اندروید'],
    ios: ['iPhone / iPad', 'آیفون / آیپد'],
    chromeos: ['ChromeOS', 'کروم‌او‌اس']
  };

  function detect() {
    var q = '';
    try { q = new URLSearchParams(location.search).get('os') || ''; } catch (e) {}
    if (NAMES[q]) return { os: q, forced: true };
    var ua = navigator.userAgent || '';
    var uad = navigator.userAgentData;
    var p = (uad && uad.platform) || navigator.platform || '';
    var touch = navigator.maxTouchPoints || 0;
    var os = 'other';
    if (/android/i.test(ua) || /android/i.test(p)) os = 'android';
    else if (/iphone|ipad|ipod/i.test(ua) || (/mac/i.test(p) && touch > 1)) os = 'ios';
    else if (/cros/i.test(ua) || /chrome os/i.test(p)) os = 'chromeos';
    else if (/win/i.test(p) || /windows/i.test(ua)) os = 'windows';
    else if (/mac/i.test(p) || /macintosh|mac os x/i.test(ua)) os = 'macos';
    else if (/linux|x11/i.test(p) || /linux|x11/i.test(ua)) os = 'linux';
    return { os: os, forced: false };
  }

  function list(i, word) {
    var a = only.filter(function (k) { return NAMES[k]; }).map(function (k) { return NAMES[k][i]; });
    if (a.length < 2) return a.join('');
    return a.slice(0, -1).join(i ? '، ' : ', ') + ' ' + word + ' ' + a[a.length - 1];
  }

  var found = detect();
  if (!found.os || found.os === 'other' || only.indexOf(found.os) !== -1) return;
  var key = 'pf-seen:' + only.join('+');
  if (!found.forced) {
    try { if (sessionStorage.getItem(key)) return; } catch (e) {}
  }

  function show() {
    var me = NAMES[found.os];
    var wrap = document.createElement('div');
    wrap.className = 'pf-overlay';
    wrap.setAttribute('role', 'dialog');
    wrap.setAttribute('aria-modal', 'true');
    wrap.setAttribute('aria-labelledby', 'pf-title');
    wrap.innerHTML =
      '<div class="pf-card" tabindex="-1">' +
        '<div class="pf-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4"/></svg></div>' +
        '<h2 id="pf-title">' +
          '<span data-l="en">' + list(0, 'and') + ' only</span>' +
          '<span data-l="fa">فقط برای ' + list(1, 'و') + '</span>' +
        '</h2>' +
        '<p>' +
          '<span data-l="en">This app is built for <b>' + list(0, 'and') + '</b>. You’re on ' + me[0] + ', so it won’t run here. You can still download it and use it on a ' + list(0, 'or') + ' computer.</span>' +
          '<span data-l="fa">این برنامه فقط برای <b>' + list(1, 'و') + '</b> ساخته شده. تو الان با ' + me[1] + ' اومدی و اینجا اجرا نمی‌شه. ولی می‌تونی دانلودش کنی و روی یه کامپیوتر ' + list(1, 'یا') + ' ازش استفاده کنی.</span>' +
        '</p>' +
        '<button type="button" class="pf-ok"><span data-l="en">Got it</span><span data-l="fa">فهمیدم</span></button>' +
      '</div>';
    var prev = document.activeElement;
    var btn = wrap.querySelector('.pf-ok');
    function close() {
      document.removeEventListener('keydown', onKey, true);
      wrap.classList.remove('pf-in');
      setTimeout(function () { if (wrap.parentNode) wrap.parentNode.removeChild(wrap); }, 320);
      if (prev && prev.focus) { try { prev.focus({ preventScroll: true }); } catch (e) {} }
    }
    function onKey(e) {
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      else if (e.key === 'Tab') { e.preventDefault(); btn.focus(); }
    }
    btn.addEventListener('click', close);
    wrap.addEventListener('click', function (e) { if (e.target === wrap) close(); });
    document.addEventListener('keydown', onKey, true);
    document.body.appendChild(wrap);
    void wrap.offsetWidth;
    wrap.classList.add('pf-in');
    wrap.firstChild.focus({ preventScroll: true });
    if (!found.forced) {
      try { sessionStorage.setItem(key, '1'); } catch (e) {}
    }
  }

  function start() { setTimeout(show, 700); }
  if (document.readyState === 'complete') start(); else window.addEventListener('load', start);
})();
