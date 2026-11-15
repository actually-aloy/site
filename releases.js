(function () {
  var TTL = 30 * 60 * 1000;
  var RANK = ['.exe', '.msi', '.zip', '.rar', '.7z'];

  function page(repo) {
    return 'https://github.com/' + repo + '/releases/latest';
  }

  function valid(repo, d) {
    return !!(d && typeof d.url === 'string' && d.url.toLowerCase().indexOf(('https://github.com/' + repo + '/releases/download/').toLowerCase()) === 0);
  }

  function pick(assets) {
    var best = null, bestRank = RANK.length;
    (Array.isArray(assets) ? assets : []).forEach(function (a) {
      if (!a || !a.browser_download_url || (a.state && a.state !== 'uploaded')) return;
      var name = String(a.name || '').toLowerCase();
      var rank = -1;
      RANK.forEach(function (ext, i) { if (rank === -1 && name.slice(-ext.length) === ext) rank = i; });
      if (rank !== -1 && rank < bestRank) { best = a; bestRank = rank; }
    });
    return best;
  }

  function newest(list) {
    var rows = (Array.isArray(list) ? list : []).filter(function (r) { return r && !r.draft; });
    for (var i = 0; i < rows.length; i++) if (!rows[i].prerelease) return rows[i];
    return rows[0] || null;
  }

  function latest(repo) {
    var key = 'release:' + repo;
    try {
      var c = JSON.parse(localStorage.getItem(key));
      if (c && Date.now() - c.t < TTL && valid(repo, c.d)) return Promise.resolve(c.d);
    } catch (e) {}
    var ctl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = ctl ? setTimeout(function () { ctl.abort(); }, 8000) : 0;
    return fetch('https://api.github.com/repos/' + repo + '/releases?per_page=10', {
      headers: { Accept: 'application/vnd.github+json' },
      signal: ctl ? ctl.signal : undefined
    })
      .then(function (r) { if (!r.ok) throw new Error('status ' + r.status); return r.json(); })
      .then(function (list) {
        var rel = newest(list);
        var asset = rel && pick(rel.assets);
        if (!asset) return null;
        var d = {
          tag: String(rel.tag_name || ''),
          url: asset.browser_download_url,
          name: String(asset.name || ''),
          size: Number(asset.size) || 0
        };
        if (!valid(repo, d)) return null;
        try { localStorage.setItem(key, JSON.stringify({ t: Date.now(), d: d })); } catch (e) {}
        return d;
      })
      .catch(function () { return null; })
      .then(function (d) { clearTimeout(timer); return d; });
  }

  window.LatestRelease = { page: page, latest: latest };
})();
