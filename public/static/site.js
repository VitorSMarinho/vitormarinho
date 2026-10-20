(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var T = {
    pt: { layer: 'camada: ', copy: 'copiar', copied: 'copiado', selected: 'selecionado' },
    en: { layer: 'layer: ', copy: 'copy', copied: 'copied', selected: 'selected' },
    es: { layer: 'capa: ', copy: 'copiar', copied: 'copiado', selected: 'seleccionado' }
  }[(root.lang || 'pt').slice(0, 2)] || null;
  T = T || { layer: 'camada: ', copy: 'copiar', copied: 'copiado', selected: 'selecionado' };

  /* troca de idioma mantém a seção atual */
  Array.prototype.forEach.call(document.querySelectorAll('.lang a'), function (a) {
    a.addEventListener('click', function () { if (location.hash) a.href = a.getAttribute('href').split('#')[0] + location.hash; });
  });


  /* mola criticamente amortecida (damping 1) seguindo a rolagem */
  function Spring(onUpdate) { this.x = 0; this.v = 0; this.t = 0; this.raf = 0; this.last = 0; this.onUpdate = onUpdate; this.response = 0.35; }
  Spring.prototype.to = function (t) {
    this.t = t;
    if (reduce) { this.x = t; this.onUpdate(t); return; }
    if (!this.raf) { this.last = performance.now(); this.raf = requestAnimationFrame(this.tick.bind(this)); }
  };
  Spring.prototype.tick = function (now) {
    var dt = Math.min((now - this.last) / 1000, 1 / 30); this.last = now;
    var k = Math.pow(2 * Math.PI / this.response, 2), c = 4 * Math.PI / this.response;
    var n = Math.max(1, Math.ceil(dt * 240)), h = dt / n;
    for (var i = 0; i < n; i++) { this.v += (-k * (this.x - this.t) - c * this.v) * h; this.x += this.v * h; }
    if (Math.abs(this.x - this.t) < 0.0005 && Math.abs(this.v) < 0.001) { this.x = this.t; this.v = 0; this.raf = 0; this.onUpdate(this.x); return; }
    this.onUpdate(this.x);
    this.raf = requestAnimationFrame(this.tick.bind(this));
  };

  /* refinaria */
  var ref = document.getElementById('refinaria');
  var fields = Array.prototype.slice.call(ref.querySelectorAll('.field'));
  var checks = Array.prototype.slice.call(ref.querySelectorAll('.checks li'));
  var stages = Array.prototype.slice.call(ref.querySelectorAll('.stages li'));
  var gold = document.getElementById('goldcard');
  var layerLabel = document.getElementById('ref-layer');
  var hint = document.getElementById('scroll-hint');
  var names = ['bronze', 'silver', 'gold'];
  var lastStage = -1;
  function render(s) {
    fields.forEach(function (f) { f.classList.toggle('done', s >= +f.dataset.t); });
    checks.forEach(function (c) { c.classList.toggle('on', s >= +c.dataset.t); });
    var stage = s < 0.18 ? 0 : s < 0.64 ? 1 : 2;
    if (stage !== lastStage) {
      lastStage = stage;
      stages.forEach(function (li, i) { li.classList.toggle('on', i === stage); });
      layerLabel.textContent = T.layer + names[stage];
    }
    var g = Math.max(0, Math.min(1, (s - 0.62) / 0.22));
    gold.style.opacity = String(0.12 + 0.88 * g);
    gold.style.transform = 'translateY(' + ((1 - g) * 18) + 'px) scale(' + (0.97 + 0.03 * g) + ')';
    hint.style.opacity = String(1 - Math.min(1, s * 3));
  }
  var refSpring = new Spring(render);
  function refProgress() {
    var r = ref.getBoundingClientRect();
    var span = r.height - window.innerHeight;
    if (span <= 0) return 1;
    return Math.max(0, Math.min(1, (window.innerHeight * 0.35 - r.top) / span));
  }
  if (reduce) { render(1); hint.hidden = true; } else { refSpring.x = refProgress(); render(refSpring.x); }

  /* progresso da nav e seção ativa */
  var bar = document.getElementById('progress');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('nav.top ul.sections a'));
  var targets = navLinks.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function onScroll() {
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? window.scrollY / max : 0) + ')';
    var cur = -1;
    targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top < window.innerHeight * 0.4) cur = i; });
    navLinks.forEach(function (a, i) { a.classList.toggle('on', i === cur); });
    if (!reduce) refSpring.to(refProgress());
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* contato: a consulta roda quando aparece */
  var sql = document.getElementById('sql'), q = document.getElementById('sql-q');
  var full = q.innerHTML;
  function runQuery() {
    if (reduce || !('IntersectionObserver' in window)) { sql.classList.remove('pending'); return; }
    var plain = q.textContent, i = 0;
    q.innerHTML = '<span class="caret">&nbsp;</span>';
    (function type() {
      i += 2;
      q.textContent = plain.slice(0, i);
      q.insertAdjacentHTML('beforeend', '<span class="caret">&nbsp;</span>');
      if (i < plain.length) setTimeout(type, 16);
      else { q.innerHTML = full; setTimeout(function () { sql.classList.remove('pending'); }, 160); }
    })();
  }
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (es) { if (es[0].isIntersecting) { io.disconnect(); runQuery(); } }, { threshold: 0.6 });
    io.observe(sql);
  } else { sql.classList.remove('pending'); }

  /* copiar e-mail */
  var copyBtn = document.getElementById('copy'), email = document.getElementById('email');
  copyBtn.addEventListener('click', function () {
    var done = function () { copyBtn.textContent = T.copied; setTimeout(function () { copyBtn.textContent = T.copy; }, 1600); };
    var fallback = function () { var r = document.createRange(); r.selectNodeContents(email); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); copyBtn.textContent = T.selected; };
    try { navigator.clipboard.writeText(email.textContent).then(done, fallback); } catch (e) { fallback(); }
  });
})();
