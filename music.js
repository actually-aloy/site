(function () {
  const AC = window.AudioContext || window.webkitAudioContext;
  const WAKE = ['pointerdown', 'pointerup', 'mousedown', 'click', 'keydown', 'touchend'];
  const freq = m => 440 * Math.pow(2, (m - 69) / 12);
  const rnd = n => { const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };

  const PLAY = [
    { bpm: 116, roots: [36, 43, 45, 41], q: [0, 0, 1, 0], pent: [0, 2, 4, 7, 9], bass: [0, 3, 6, 8, 10, 14], dens: 0.55 },
    { bpm: 124, roots: [43, 38, 40, 36], q: [0, 0, 1, 0], pent: [0, 2, 4, 7, 9], bass: [0, 4, 8, 12, 14], dens: 0.5 },
    { bpm: 132, roots: [38, 45, 47, 43], q: [0, 0, 1, 0], pent: [0, 2, 4, 7, 9], bass: [0, 2, 3, 6, 8, 10, 11, 14], dens: 0.6 },
    { bpm: 108, roots: [45, 41, 36, 43], q: [1, 0, 0, 0], pent: [0, 3, 5, 7, 10], bass: [0, 3, 6, 10, 12], dens: 0.5 },
    { bpm: 96, roots: [41, 36, 38, 46], q: [0, 0, 1, 0], pent: [0, 2, 4, 7, 9], bass: [0, 6, 8, 14], dens: 0.45 }
  ];
  const PLAY_Q = [[0, 4, 7], [0, 3, 7]];

  const CALM = [
    { bpm: 58, roots: [36, 33, 41, 43], q: [0, 1, 0, 0] },
    { bpm: 52, roots: [38, 43, 35, 40], q: [0, 0, 1, 1] },
    { bpm: 54, roots: [39, 36, 44, 46], q: [0, 1, 0, 0] },
    { bpm: 56, roots: [45, 42, 38, 40], q: [0, 1, 0, 0] }
  ];
  const CALM_Q = [
    { iv: [0, 4, 7, 11], pent: [0, 2, 4, 7, 9] },
    { iv: [0, 3, 7, 10], pent: [0, 3, 5, 7, 10] }
  ];

  const M = {
    ctx: null, master: null, bus: null, delay: null, rev: null, noise: null, keep: null,
    on: false, armed: false, vol: 0.1, timer: null, nextT: 0, stepN: 0, ti: -1, tr: null,
    style: 'play', key: '', text: { label: 'Music' },
    pill: null, btn: null, range: null, slider: null, labelEl: null,

    init() {
      if (this.ctx) return true;
      if (!AC) return false;
      const ctx = new AC();
      this.ctx = ctx;
      ctx.onstatechange = () => { this.paint(); if (this.on && ctx.state !== 'running' && !document.hidden) this.arm(); };
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.ratio.value = 4;
      this.master = ctx.createGain();
      this.master.gain.value = 0;
      this.master.connect(comp);
      const mk = ctx.createGain();
      mk.gain.value = 1.5;
      comp.connect(mk);
      mk.connect(ctx.destination);
      this.bus = ctx.createGain();
      this.bus.connect(this.master);
      this.delay = ctx.createDelay(1.5);
      this.delay.delayTime.value = 0.2;
      const fb = ctx.createGain();
      fb.gain.value = 0.3;
      const dl = ctx.createBiquadFilter();
      dl.type = 'lowpass';
      dl.frequency.value = 2600;
      const dw = ctx.createGain();
      dw.gain.value = 0.45;
      this.delay.connect(dl);
      dl.connect(fb);
      fb.connect(this.delay);
      dl.connect(dw);
      dw.connect(this.master);
      this.noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
      const nd = this.noise.getChannelData(0);
      for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
      if (this.style === 'calm') {
        const len = Math.floor(ctx.sampleRate * 3.6);
        const ir = ctx.createBuffer(2, len, ctx.sampleRate);
        for (let c = 0; c < 2; c++) {
          const d = ir.getChannelData(c);
          for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2.6);
        }
        this.rev = ctx.createConvolver();
        this.rev.buffer = ir;
        const rw = ctx.createGain();
        rw.gain.value = 0.7;
        this.rev.connect(rw);
        rw.connect(this.master);
      }
      return true;
    },

    tone(type, f, t, dur, peak, opt) {
      if (f < 330 && !(opt && opt.slide) && !(opt && opt.h)) {
        const o2 = Object.assign({}, opt, { h: 1 });
        this.tone('sine', f * 2, t, dur, peak * 0.7, o2);
        this.tone('sine', f * 3, t, dur, peak * 0.4, o2);
      }
      const ctx = this.ctx;
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(f, t);
      if (opt && opt.detune) o.detune.value = opt.detune;
      if (opt && opt.slide) o.frequency.exponentialRampToValueAtTime(opt.slide, t + dur);
      const a = (opt && opt.a) || 0.004;
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(peak, t + a);
      if (opt && opt.hold) g.gain.setValueAtTime(peak, t + dur * opt.hold);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      let node = o;
      if (opt && opt.lp) {
        const f1 = ctx.createBiquadFilter();
        f1.type = 'lowpass';
        f1.frequency.value = opt.lp;
        o.connect(f1);
        node = f1;
      }
      node.connect(g);
      g.connect(this.bus);
      if (opt && opt.send) g.connect(this.delay);
      if (opt && opt.rv && this.rev) g.connect(this.rev);
      o.start(t);
      o.stop(t + dur + 0.05);
    },

    hit(t, dur, peak, hat) {
      const ctx = this.ctx;
      const s = ctx.createBufferSource();
      s.buffer = this.noise;
      const f = ctx.createBiquadFilter();
      f.type = hat ? 'highpass' : 'bandpass';
      f.frequency.value = hat ? 7500 : 1900;
      const g = ctx.createGain();
      g.gain.setValueAtTime(peak, t);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(f);
      f.connect(g);
      g.connect(this.bus);
      s.start(t);
      s.stop(t + dur + 0.02);
    },

    swell(t, dur) {
      const ctx = this.ctx;
      const s = ctx.createBufferSource();
      s.buffer = this.noise;
      s.loop = true;
      const f = ctx.createBiquadFilter();
      f.type = 'bandpass';
      f.frequency.value = 420;
      f.Q.value = 0.7;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.03, t + dur * 0.45);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      s.connect(f);
      f.connect(g);
      g.connect(this.bus);
      g.connect(this.rev);
      s.start(t);
      s.stop(t + dur + 0.1);
    },

    pick() {
      const list = this.style === 'calm' ? CALM : PLAY;
      let i = this.ti;
      while (i === this.ti) i = Math.floor(Math.random() * list.length);
      this.ti = i;
      this.tr = list[i];
      this.delay.delayTime.setValueAtTime(60 / this.tr.bpm * 0.75, this.ctx.currentTime);
    },

    schedPlay(step, t) {
      const tr = this.tr;
      const bar = Math.floor(step / 16);
      const s = step % 16;
      const sec = bar % 16;
      const ci = bar % 4;
      const root = tr.roots[ci];
      const iv = PLAY_Q[tr.q[ci]];
      const beat = 60 / tr.bpm;
      if (s === 0) iv.forEach(x => this.tone('triangle', freq(root + 24 + x), t, beat * 4, 0.09, { a: 0.05, hold: 0.85, lp: 2200 }));
      if (s % 4 === 2) this.tone('square', freq(root + 36 + iv[(s >> 2) % 3]), t, beat * 0.22, 0.035, { lp: 2400, send: true });
      if (tr.bass.indexOf(s) >= 0) {
        this.tone('square', freq(root + (s === 10 || s === 14 ? 12 : 0)), t, beat * 0.4, 0.09, { lp: 700 });
        this.tone('sine', freq(root), t, beat * 0.5, 0.22);
        this.tone('triangle', freq(root + 12), t, beat * 0.35, 0.1, { lp: 1500 });
      }
      if (sec >= 2 && s % 2 === 0) {
        const ph = Math.floor(bar / 2) * 97 + s * 13 + this.ti * 5;
        if (rnd(ph) < tr.dens) {
          const d = Math.floor(rnd(ph + 1) * tr.pent.length);
          const m = root + 36 + tr.pent[d] + (rnd(ph + 2) < 0.3 ? 12 : 0);
          this.tone('square', freq(m), t, beat * (0.4 + rnd(ph + 3) * 0.7), 0.045, { a: 0.006, lp: 3400, send: true });
        }
      }
      if (sec >= 3) {
        if (s === 0 || s === 8 || (s === 10 && bar % 2)) {
          this.tone('sine', 130, t, 0.18, 0.55, { slide: 45 });
          this.tone('triangle', 280, t, 0.05, 0.18, { slide: 90 });
        }
        if (s === 4 || s === 12) this.hit(t, 0.12, 0.16, false);
        if (s % 2 === 0) this.hit(t, 0.03, s % 4 === 2 ? 0.06 : 0.035, true);
      }
    },

    schedCalm(step, t) {
      const tr = this.tr;
      const bar = Math.floor(step / 16);
      const s = step % 16;
      const sec = bar % 16;
      const ci = bar % 4;
      const root = tr.roots[ci];
      const ch = CALM_Q[tr.q[ci]];
      const beat = 60 / tr.bpm;
      if (s === 0) {
        ch.iv.forEach((x, k) => {
          this.tone('sine', freq(root + 24 + x), t, beat * 6, 0.05, { a: 1.3, hold: 0.78, rv: true, detune: k % 2 ? 5 : -5 });
          this.tone('triangle', freq(root + 12 + x), t, beat * 6, 0.022, { a: 1.5, hold: 0.75, lp: 900, rv: true });
          this.tone('sine', freq(root + 36 + x), t, beat * 5.6, 0.016, { a: 1.8, hold: 0.75, rv: true });
        });
        this.tone('sine', freq(root + 12), t, beat * 5.6, 0.16, { a: 0.6, hold: 0.8 });
        if (bar % 4 === 0) this.swell(t, beat * 8);
      }
      if (sec >= 1 && s % 2 === 0 && [0, 2, 6, 8, 10, 14].indexOf(s) >= 0) {
        const h = bar * 131 + s * 17 + this.ti * 7;
        if (rnd(h) < 0.3) {
          const m = root + 36 + ch.pent[Math.floor(rnd(h + 1) * ch.pent.length)] + (rnd(h + 2) < 0.3 ? 12 : 0);
          const f = freq(m);
          this.tone('sine', f, t, 3.4, 0.065, { a: 0.01, rv: true, send: true });
          this.tone('sine', f * 2, t, 1.8, 0.022, { a: 0.01, rv: true });
          this.tone('sine', f * 3, t, 0.9, 0.012, { a: 0.01, rv: true });
        }
      }
      if (sec >= 2 && s % 4 === 0) {
        const x = ch.iv[(bar + (s >> 2)) % ch.iv.length];
        this.tone('sine', freq(root + 36 + x), t, 2, 0.026, { a: 0.012, rv: true });
      }
    },

    sched(step, t) {
      if (step % 256 === 0 || !this.tr) this.pick();
      if (this.style === 'calm') this.schedCalm(step, t); else this.schedPlay(step, t);
    },

    pump() {
      while (this.nextT < this.ctx.currentTime + 0.25) {
        this.sched(this.stepN, this.nextT);
        this.stepN++;
        this.nextT += 60 / this.tr.bpm / 4;
      }
    },

    unlock() {
      const ctx = this.ctx;
      try {
        const src = ctx.createBufferSource();
        src.buffer = ctx.createBuffer(1, 1, 22050);
        src.connect(ctx.destination);
        src.start(0);
      } catch (e) {}
      try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) {}
      try {
        if (!this.keep) {
          const n = 8000;
          const buf = new ArrayBuffer(44 + n * 2);
          const v = new DataView(buf);
          const w = (o, t) => { for (let i = 0; i < t.length; i++) v.setUint8(o + i, t.charCodeAt(i)); };
          w(0, 'RIFF');
          v.setUint32(4, 36 + n * 2, true);
          w(8, 'WAVEfmt ');
          v.setUint32(16, 16, true);
          v.setUint16(20, 1, true);
          v.setUint16(22, 1, true);
          v.setUint32(24, 8000, true);
          v.setUint32(28, 16000, true);
          v.setUint16(32, 2, true);
          v.setUint16(34, 16, true);
          w(36, 'data');
          v.setUint32(40, n * 2, true);
          const a = new Audio(URL.createObjectURL(new Blob([buf], { type: 'audio/wav' })));
          a.loop = true;
          a.setAttribute('playsinline', '');
          this.keep = a;
        }
        const pr = this.keep.play();
        if (pr && pr.catch) pr.catch(() => {});
      } catch (e) {}
    },

    kick() {
      if (!this.ctx) return;
      this.unlock();
      if (this.ctx.state !== 'running') this.ctx.resume();
    },

    apply() {
      if (this.ctx) this.master.gain.setTargetAtTime(this.on ? this.vol : 0, this.ctx.currentTime, 0.25);
    },

    save() {
      try { localStorage.setItem(this.key, JSON.stringify({ on: this.on, vol: this.vol })); } catch (e) {}
    },

    setOn(v) {
      if (v && !this.init()) { this.on = false; this.paint(); return false; }
      this.on = !!v;
      if (this.on) {
        this.unlock();
        if (this.ctx.state !== 'running') this.ctx.resume();
        if (!this.timer) {
          this.nextT = this.ctx.currentTime + 0.1;
          this.timer = setInterval(() => this.pump(), 40);
        }
      } else if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        if (this.keep) this.keep.pause();
        const c = this.ctx;
        setTimeout(() => { if (!this.on && c.state === 'running') c.suspend(); }, 900);
      }
      this.apply();
      this.save();
      this.paint();
      return true;
    },

    setVol(v) {
      this.vol = Math.min(1, Math.max(0, v));
      this.apply();
      this.save();
      this.paint();
    },

    onWake(e) {
      if (e && e.target && e.target.closest && e.target.closest('.mu-pill')) return;
      if (!M.on) M.setOn(true); else M.kick();
      setTimeout(() => {
        if (M.ctx && M.ctx.state === 'running') M.disarm();
        M.paint();
      }, 400);
    },

    arm() {
      if (this.armed) return;
      this.armed = true;
      WAKE.forEach(ev => window.addEventListener(ev, this.onWake, true));
      this.paint();
    },

    disarm() {
      if (!this.armed) return;
      this.armed = false;
      WAKE.forEach(ev => window.removeEventListener(ev, this.onWake, true));
      this.paint();
    },

    paint() {
      if (!this.pill) return;
      const run = !!(this.ctx && this.ctx.state === 'running');
      const on = this.on || this.armed;
      this.pill.classList.toggle('on', on);
      this.pill.classList.toggle('run', on && run);
      this.pill.classList.toggle('wait', on && !run);
      this.btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      this.btn.setAttribute('aria-label', this.text.label);
      this.labelEl.textContent = this.text.label;
      const pv = Math.round(this.vol * 100);
      if (document.activeElement !== this.range && Number(this.range.value) !== pv) this.range.value = pv;
      this.range.setAttribute('aria-valuetext', this.range.value + '%');
      this.slider.style.setProperty('--v', this.range.value);
    },

    build(mount, before) {
      const pill = document.createElement('div');
      pill.className = 'mu-pill';
      pill.innerHTML =
        '<button type="button" class="mu-btn" aria-pressed="false"><span class="mu-eq" aria-hidden="true"><i></i><i></i><i></i></span><span class="mu-label"></span></button>' +
        '<div class="mu-vol"><div class="mu-slider"><div class="mu-fill"></div><input class="mu-range" type="range" min="0" max="100" step="1" value="10" aria-label="Volume"></div></div>';
      mount.insertBefore(pill, before || null);
      this.pill = pill;
      this.btn = pill.querySelector('.mu-btn');
      this.labelEl = pill.querySelector('.mu-label');
      this.range = pill.querySelector('.mu-range');
      this.slider = pill.querySelector('.mu-slider');
      this.btn.addEventListener('click', () => {
        if (this.on && this.ctx && this.ctx.state !== 'running') {
          this.kick();
          setTimeout(() => { if (this.ctx.state === 'running') this.disarm(); this.paint(); }, 400);
          return;
        }
        if (this.on || this.armed) {
          this.disarm();
          this.setOn(false);
        } else {
          this.setOn(true);
        }
      });
      this.range.addEventListener('input', () => this.setVol(Number(this.range.value) / 100));
      this.range.addEventListener('pointerdown', () => this.slider.classList.add('drag'));
      ['pointerup', 'pointercancel', 'blur'].forEach(ev => this.range.addEventListener(ev, () => this.slider.classList.remove('drag')));
    }
  };

  document.addEventListener('visibilitychange', () => {
    if (!M.on || !M.ctx) return;
    if (document.hidden) {
      M.ctx.suspend();
      if (M.keep) M.keep.pause();
    } else {
      M.ctx.resume();
      if (M.keep) { const pr = M.keep.play(); if (pr && pr.catch) pr.catch(() => {}); }
      setTimeout(() => { if (M.on && M.ctx.state !== 'running') M.arm(); }, 400);
    }
  });

  window.Music = {
    init(o) {
      M.style = o.style === 'calm' ? 'calm' : 'play';
      M.key = o.key;
      if (o.text) M.text = o.text;
      M.build(o.mount, o.before);
      let pref = null;
      try { pref = JSON.parse(localStorage.getItem(M.key) || 'null'); } catch (e) {}
      M.vol = pref && pref.vol >= 0 && pref.vol <= 1 ? pref.vol : 0.1;
      if (!pref || pref.on) {
        M.setOn(true);
        M.arm();
        setTimeout(() => {
          if (M.ctx && M.ctx.state === 'running') M.disarm();
          M.paint();
        }, 700);
      }
      M.paint();
    },
    setText(t) {
      M.text = t;
      M.paint();
    }
  };
})();
