/* Fairwall AI · Simulator
   Scene 1 entry → 2 exposure → 3 what's leaking → 4 KPI boxes → 5 demo + protected → 6 CTA.
   All figures come from window.computeSimulation (simulator-assumptions.js). */
(function () {
'use strict';
var $ = function (s, r) { return (r || document).querySelector(s); };
var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
var A = window.SIMULATOR_ASSUMPTIONS;

/* ---------- formatting ---------- */
var NF = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
var fmt = function (n) { return NF.format(Math.round(n)); };
var pct = function (x) { return new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 1 }).format(x); };
var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
var SEV = {
  critical: { c: '#E5484D', n: 'Critical' },
  high:     { c: '#F0803C', n: 'High' },
  medium:   { c: '#F5B82E', n: 'Medium' },
  low:      { c: '#8A97AB', n: 'Low' }
};
var SHIELD = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z"/><path d="m8.5 12 2.5 2.5 4.5-5"/></svg>';

/* ---------- timing engine (skippable, restartable) ---------- */
var FAST = REDUCED;      // true = jump to final states
var RUN = 0;             // incremented on restart; stale async steps stop
var pending = [];
function Stop() {}
function sleep(ms) {
  var token = RUN;
  return new Promise(function (res, rej) {
    var done = function () { pending = pending.filter(function (p) { return p !== entry; }); token === RUN ? res() : rej(new Stop()); };
    var entry = { done: done, id: setTimeout(done, FAST ? 0 : ms) };
    pending.push(entry);
  });
}
function flushSleeps() { pending.slice().forEach(function (p) { clearTimeout(p.id); p.done(); }); }
var easeIn = function (t) { return t * t * t; };                 // slow start, sharp finish
var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };
function tween(ms, ease, fn) {
  var token = RUN;
  return new Promise(function (res, rej) {
    if (FAST) { fn(1); return res(); }
    var t0 = performance.now();
    (function step(now) {
      if (token !== RUN) return rej(new Stop());
      var p = FAST ? 1 : Math.min(1, (now - t0) / ms);
      fn(ease(p));
      if (p < 1) requestAnimationFrame(step); else res();
    })(t0);
  });
}
function countTo(el, to, ms, ease, f) {
  var from = el._v || 0; el._v = to; f = f || fmt;
  return tween(ms, ease || easeOut, function (p) { el.textContent = f(from + (to - from) * p); });
}
function scrollToEl(el, block) {
  if (FAST || !el) return;
  el.scrollIntoView({ behavior: 'smooth', block: block || 'nearest' });
}
var leakedFmt = function (v) { return Math.round(v) === 0 ? '0 leaked' : fmt(v); };
var quiet = function (p) { p.catch(function () {}); return p; };
var gtagEv = function (name, params) { try { window.gtag && window.gtag('event', name, params || {}); } catch (e) {} };

/* ---------- state ---------- */
var R = null;      // current simulation result
var el = {};       // element refs for the current run

/* =========================================================
   Scene 1 · entry
   ========================================================= */
var startForm = $('#startForm'), input = $('#computers'), startErr = $('#startErr');
function parseComputers(raw) {
  var s = String(raw || '').trim().replace(/[\s,’']/g, '');   // allow "1,400" / "1 400"
  if (!s) return { err: 'Please enter the number of computers in your organization.' };
  if (!/^\d+$/.test(s)) return { err: 'Please enter a whole number, for example 250.' };
  var n = parseInt(s, 10);
  if (n < 1) return { err: 'The number of computers must be at least 1.' };
  if (n > 100000) return { err: 'Please enter a number up to 100,000. For larger organizations, book a demo and we scope it with you.' };
  return { n: n };
}
startForm.addEventListener('submit', function (e) {
  e.preventDefault();
  var r = parseComputers(input.value);
  if (r.err) { startErr.textContent = r.err; input.setAttribute('aria-invalid', 'true'); input.focus(); return; }
  startErr.textContent = ''; input.removeAttribute('aria-invalid');
  input.value = r.n;
  start(r.n);
});
input.addEventListener('input', function () { if (startErr.textContent) { startErr.textContent = ''; input.removeAttribute('aria-invalid'); } });

/* =========================================================
   Card builders
   ========================================================= */
var FEED = [ // illustrative sample events (masked). Content only, no figures.
  ['customer',  'Customer email',     'k•••@••••••.eu',            'ChatGPT',    'Sales'],
  ['employee',  'Salary figure',      '€ ••.•••,•• [5-digit]',     'Copilot',    'HR'],
  ['financial', 'IBAN',               'AT61 •••• •••• •••• 3201',  'ChatGPT',    'Finance'],
  ['customer',  'Customer name',      'M••••• H•••••',             'Gemini',     'Customer Service'],
  ['code',      'API key',            'sk-••••••••••••3f9a',       'Claude',     'IT'],
  ['customer',  'Phone number',       '+43 6•• ••• ••12',          'ChatGPT',    'Sales'],
  ['legal',     'Contract draft',     'NDA_••••_draft.docx',       'Copilot',    'Legal'],
  ['employee',  'Sick-leave record',  '[HR record · 2026-••-••]',  'ChatGPT',    'HR'],
  ['customer',  'Customer address',   '[location · AT-W]',         'Perplexity', 'Marketing'],
  ['financial', 'Invoice amount',     '€ •••.•••,••',              'Gemini',     'Finance'],
  ['code',      'Database password',  'db_pass=••••••••',          'ChatGPT',    'R&D'],
  ['customer',  'Customer email',     'a•••@••••••.at',            'Copilot',    'Customer Service']
];
var catOf = function (key) { return A.categories.filter(function (c) { return c.key === key; })[0]; };

function buildExposure() {
  var c = document.createElement('section');
  c.className = 'card exp enter';
  c.innerHTML =
    '<div class="card-hd"><div><h3><span class="n">01</span>Data exposure</h3><div class="sub">Sensitive data leaving your organization through AI tools</div></div>' +
    '<span class="badge-sim"><i></i>SIMULATED</span></div>' +
    '<div class="lbl">Sensitive prompts sent to AI tools · one working day</div>' +
    '<div class="big num"><span id="expNum">0</span><small>in clear text</small></div>' +
    '<div class="track" aria-hidden="true"><span id="expBar"></span></div>' +
    '<div class="track-lg"><span>Start of day</span><span>End of day</span></div>' +
    '<div class="feed" id="feed" aria-hidden="true"></div>';
  return c;
}
function feedItem(f) {
  var cat = catOf(f[0]), sev = SEV[cat.severity];
  var d = document.createElement('div');
  d.className = 'fe';
  d.innerHTML = '<i style="background:' + sev.c + '"></i><div>' +
    '<div class="l1"><b>' + esc(f[1]) + '</b><span class="mv">' + esc(f[2]) + '</span><span class="dt">detected</span></div>' +
    '<div class="l2">→ sent to ' + esc(f[3]) + ' in clear text</div>' +
    '<div class="l3">' + esc(f[4]) + ' · ' + esc(cat.label) + '</div></div>';
  return d;
}

function sevTotals(cats) {
  var t = {};
  cats.forEach(function (c) { t[c.severity] = (t[c.severity] || 0) + c.count; });
  return ['critical', 'high', 'medium', 'low'].filter(function (k) { return t[k] !== undefined; }).map(function (k) { return [k, t[k]]; });
}
function buildLeak() {
  var c = document.createElement('section');
  c.className = 'card leak enter';
  var rows = R.categories.map(function (cat, i) {
    var s = SEV[cat.severity];
    return '<div class="erow" data-i="' + i + '"><span class="nm"><i style="background:' + s.c + '"></i><span>' + esc(cat.label) + '</span></span>' +
      '<span class="bar"><span style="background:' + s.c + '"></span></span>' +
      '<span class="val num">0</span><span class="pct">' + pct(cat.share) + '</span>' +
      '<span class="ok" title="Protected">' + SHIELD + '</span></div>';
  }).join('');
  c.innerHTML =
    '<div class="card-hd"><div><h3><span class="n">02</span><span class="h-risk">What\'s leaking</span><span class="h-safe">What\'s protected</span></h3>' +
    '<div class="sub">Sensitive prompts per year, by type of data</div></div></div>' +
    '<div class="sevchips">' + sevTotals(R.categories).map(function (s) {
      return '<span class="sevchip" data-sev="' + s[0] + '"><i style="background:' + SEV[s[0]].c + '"></i>' + SEV[s[0]].n + ' · <span class="num">0</span></span>';
    }).join('') + '</div>' + rows +
    '<div class="unit-note">Shares of all sensitive prompts. Categories add up to the yearly total.</div>';
  return c;
}

function kpiDefs() {
  return [
    { k: 'computers', label: 'Computers in scope', v: R.computers,
      bad: 'Every one can paste data into any AI tool', good: 'Fairwall AI on every endpoint' },
    { k: 'aiUsers', label: 'Employees using AI', v: R.aiUsers,
      bad: pct(A.aiAdoptionRate.value) + ' of employees use AI tools at work', good: 'Every prompt checked locally before sending' },
    { k: 'shadowAiUsers', label: 'On unapproved AI tools', v: R.shadowAiUsers,
      bad: pct(A.shadowAiRate.value) + ' of AI users, outside IT\'s control', good: 'Covered too: protection works in any AI tool' },
    { k: 'promptsPerYear', label: 'AI prompts per year', v: R.promptsPerYear,
      bad: fmt(R.promptsPerDay) + ' per working day × ' + fmt(A.workdaysPerYear.value) + ' days', good: 'All inspected on the device' },
    { k: 'sensitivePromptsPerYear', label: 'Sensitive prompts per year', v: R.sensitivePromptsPerYear, crit: true, zero: true,
      bad: '≈ ' + fmt(R.sensitivePromptsPerDay) + ' per working day reach AI providers in clear text', good: 'Redacted before leaving the device' }
  ];
}
function buildKpis() {
  var g = document.createElement('section');
  g.className = 'kpis';
  g.setAttribute('aria-label', 'Key figures');
  kpiDefs().forEach(function (d) {
    var b = document.createElement('div');
    b.className = 'card kpi' + (d.crit ? ' crit' : '');
    b.dataset.k = d.k; b.style.opacity = '0';
    b.innerHTML = (d.crit ? '<span class="dot"></span>' : '') +
      '<div class="lbl">' + esc(d.label) + '</div><div class="v num">0</div>' +
      '<div class="d"><span class="bad">' + esc(d.bad) + '</span><span class="good">' + esc(d.good) + '</span></div>' +
      '<div class="ok">' + SHIELD + (d.zero ? '0 leaked' : 'Protected') + '</div>';
    b._def = d;
    g.appendChild(b);
  });
  return g;
}
function buildCalcLink() {
  var p = document.createElement('div');
  p.className = 'calc-link';
  p.innerHTML = 'Estimate, not a measurement. <button class="linkbtn" type="button" data-calc>How we calculate this</button>';
  return p;
}

/* ---------- Scene 5 workbench ---------- */
var DEMO = (function () {
  var N = { t: 'NAME', v: 'Sophie Berger', ph: '[NAME_1]' };
  var E = { t: 'EMAIL', v: 'sophie.berger@kanzlei-berger.at', ph: '[EMAIL_1]' };
  var C = { t: 'CUSTOMER_ID', v: 'CUST-48213', ph: '[CUSTOMER_ID_1]' };
  var I = { t: 'IBAN', v: 'AT61 1904 3002 3457 3201', ph: '[IBAN_1]' };
  return {
    items: [N, E, C, I],
    prompt: ['Draft a reply to ', N, ' (', E, ') about customer ID ', C, '. Confirm that her refund will be paid to ', I, ' by Friday.'],
    reply: ['Dear ', N, ',\n\nThank you for your message about customer account ', C, '. We confirm that your refund will be transferred to ', I, ' by Friday.\n\nA copy of this confirmation has been sent to ', E, '.\n\nKind regards']
  };
})();
function segHTML(segs, mode, upto) {
  // mode: plain | mark | redact | ph | restore ; upto = number of placeholders restored so far (restore mode)
  var k = 0;
  return segs.map(function (s) {
    if (typeof s === 'string') return esc(s);
    if (mode === 'plain') return esc(s.v);
    if (mode === 'mark') return '<mark class="pii">' + esc(s.v) + '</mark>';
    if (mode === 'redact' || mode === 'ph') return '<mark class="ph">' + s.ph + '</mark>';
    k++;
    return k <= upto ? '<mark class="back" title="' + s.ph + '">' + esc(s.v) + '</mark>' : '<mark class="ph" style="animation:none">' + s.ph + '</mark>';
  }).join('');
}
var plain = function (segs) { return segs.map(function (s) { return typeof s === 'string' ? s : s.v; }).join(''); };
function buildBench() {
  var w = document.createElement('section');
  w.className = 'demo enter';
  w.innerHTML =
    '<div class="bench" aria-label="Fairwall AI demo">' +
      '<div class="tbar"><i></i><i></i><i></i><span class="tab">New chat</span></div>' +
      '<div class="ubar"><span class="u">chatgpt.com</span><span class="ext" title="Fairwall AI plug-in"><img src="/assets/logo-mark-new.png" alt="Fairwall AI plug-in"></span></div>' +
      '<div class="hd"><b>The solution · Fairwall AI in action</b></div>' +
      '<div class="pane"><div class="composer"><div class="txt" id="dTxt"><span class="caret"></span></div><span class="hint">Message any AI tool</span></div><div class="meter" id="dMeter"></div></div>' +
      '<div class="out"><label><span id="dOutL">What the AI receives</span><span id="dOutR">Waiting for send</span></label><div class="body" id="dOut"><span class="wait">Nothing has left the device yet.</span></div></div>' +
      '<div class="act"><button class="btn btn-g" id="dSend" type="button" tabindex="-1">Send</button><button class="btn btn-o" id="dRest" type="button" tabindex="-1" style="box-shadow:inset 0 0 0 1px var(--navy-600);color:var(--white)!important" disabled>Restore values</button>' +
        '<span class="lat"><span class="fwb"><img src="/assets/logo-mark-new.png" alt=""><span><b id="dCnt">0</b> protected</span></span></span></div>' +
      '<div class="flow" id="dFlow"><span>Detect</span><i></i><span>Redact</span><i></i><span>Send</span><i></i><span>Restore</span></div>' +
    '</div>' +
    '<p class="step-note" id="dNote" aria-live="polite"></p>';
  return w;
}

/* =========================================================
   Scenes
   ========================================================= */
function fillHidden() {
  var f = $('#leadForm');
  var set = function (n, v) { var i = f.querySelector('input[name="' + n + '"]'); if (i) i.value = v; };
  set('computers', R.computers);
  set('ai_users', Math.round(R.aiUsers));
  set('shadow_ai_users', Math.round(R.shadowAiUsers));
  set('prompts_per_day', Math.round(R.promptsPerDay));
  set('prompts_per_year', Math.round(R.promptsPerYear));
  set('sensitive_prompts_per_day', Math.round(R.sensitivePromptsPerDay));
  set('sensitive_prompts_per_year', Math.round(R.sensitivePromptsPerYear));
  var names = { customer: 'cat_customer_personal_data', employee: 'cat_employee_data', financial: 'cat_financial_data', code: 'cat_source_code_credentials', legal: 'cat_legal_strategic' };
  R.categories.forEach(function (c) { if (names[c.key]) set(names[c.key], c.count); });
}

function start(n) {
  RUN++; FAST = REDUCED; flushSleeps();
  R = window.computeSimulation(n);
  fillHidden();
  gtagEv('simulator_start', { computers: n });
  document.body.className = 's2';
  $('#entry').hidden = true;
  $('#stage').hidden = false;
  $('#cta').hidden = true;
  $('#skipBtn').hidden = REDUCED;
  $('#stageTitle').textContent = 'Simulation for ' + fmt(n) + ' computer' + (n === 1 ? '' : 's');
  var L = $('#colL'), Rc = $('#colR');
  L.innerHTML = ''; Rc.innerHTML = ''; L.className = 'col col-l empty';
  el = {};
  window.scrollTo(0, 0);
  play().catch(function (e) { if (!(e instanceof Stop)) throw e; });
}

async function play() {
  var Rc = $('#colR');
  /* ---- Scene 2 · exposure: slow start, sharp finish ---- */
  el.exp = buildExposure(); Rc.appendChild(el.exp);
  var expNum = $('#expNum', el.exp), expBar = $('#expBar', el.exp), feed = $('#feed', el.exp);
  var shown = 0, total = FEED.length;
  await tween(3600, function (t) { return t; }, function (t) {
    var e = easeIn(t);
    expBar.style.width = (e * 100) + '%';
    expNum.textContent = fmt(R.sensitivePromptsPerDay * e);
    // event i appears when the ease-in curve passes i/total → feed accelerates
    var due = Math.min(total, Math.floor(e * total + 1e-9));
    while (shown < due) { feed.insertBefore(feedItem(FEED[shown]), feed.firstChild); shown++; }
  });
  expNum._v = R.sensitivePromptsPerDay;
  while (shown < total) { feed.insertBefore(feedItem(FEED[shown]), feed.firstChild); shown++; }
  await sleep(700);

  /* ---- Scene 3 · what's leaking: count up, ease-out ---- */
  el.leak = buildLeak(); Rc.appendChild(el.leak); scrollToEl(el.leak);
  var max = Math.max.apply(null, R.categories.map(function (c) { return c.count; })) || 1;
  var rows = el.leak.querySelectorAll('.erow'), chips = el.leak.querySelectorAll('.sevchip');
  var sevT = sevTotals(R.categories);
  await tween(2600, easeOut, function (p) {
    R.categories.forEach(function (c, i) {
      rows[i].querySelector('.val').textContent = fmt(c.count * p);
      rows[i].querySelector('.bar span').style.width = (c.count / max * 100 * p) + '%';
    });
    sevT.forEach(function (s, i) { chips[i].querySelector('.num').textContent = fmt(s[1] * p); });
  });
  R.categories.forEach(function (c, i) { rows[i].querySelector('.val')._v = c.count; });
  sevT.forEach(function (s, i) { chips[i].querySelector('.num')._v = s[1]; });
  await sleep(500);

  /* ---- Scene 4 · KPI boxes: stagger 150 ms, each counts up ---- */
  el.kpis = buildKpis(); Rc.appendChild(el.kpis);
  el.calc = buildCalcLink(); Rc.appendChild(el.calc);
  scrollToEl(el.kpis, 'center');
  var boxes = Array.prototype.slice.call(el.kpis.children);
  var counts = boxes.map(function (b, i) {
    return sleep(i * 150).then(function () {
      b.style.opacity = ''; if (!FAST) b.classList.add('enter');
      return countTo(b.querySelector('.v'), b._def.v, 1700, easeOut);
    });
  });
  await Promise.all(counts);
  await sleep(800);

  /* ---- Scene 5 · numbers move left, demo appears right ---- */
  if (!FAST) { $('#stage').scrollIntoView({ behavior: 'smooth', block: 'start' }); await sleep(450); }
  el.exp.style.transition = 'opacity .3s'; el.exp.style.opacity = '0';
  await sleep(300);
  var moving = [el.kpis, el.leak, el.calc];
  // re-inserting a node restarts its CSS entrance animation, so drop it first
  [el.leak].concat(Array.prototype.slice.call(el.kpis.children)).forEach(function (n) { n.classList.remove('enter'); });
  var first = moving.map(function (m) { return m.getBoundingClientRect(); });
  el.exp.remove();
  var L = $('#colL');
  L.classList.remove('empty');
  moving.forEach(function (m) { L.appendChild(m); });
  el.bench = buildBench(); el.bench.style.opacity = '0';
  $('#colR').appendChild(el.bench);
  if (!FAST) {
    moving.forEach(function (m, i) {
      var last = m.getBoundingClientRect();
      m.style.transition = 'none';
      m.style.transform = 'translate(' + (first[i].left - last.left) + 'px,' + (first[i].top - last.top) + 'px)';
    });
    void document.body.offsetWidth;
    moving.forEach(function (m) { m.style.transition = 'transform .85s cubic-bezier(.2,.8,.2,1)'; m.style.transform = ''; });
    await sleep(700);
  }
  el.bench.style.transition = 'opacity .45s'; el.bench.style.opacity = '';
  await sleep(500);
  moving.forEach(function (m) { m.style.transition = ''; m.style.transform = ''; });

  await demo();
  await sleep(400);
  await protect();

  /* ---- Scene 6 · CTA ---- */
  await sleep(500);
  $('#skipBtn').hidden = true;
  var cta = $('#cta'); cta.hidden = false;
  if (!FAST) { cta.classList.add('enter'); scrollToEl(cta, 'center'); }
  gtagEv('simulator_complete', { computers: R.computers });
}

async function demo() {
  var b = el.bench, txt = $('#dTxt', b), meter = $('#dMeter', b), out = $('#dOut', b);
  var outL = $('#dOutL', b), outR = $('#dOutR', b), send = $('#dSend', b), rest = $('#dRest', b), cnt = $('#dCnt', b), note = $('#dNote', b);
  var flow = b.querySelectorAll('#dFlow span');
  var setFlow = function (n) { Array.prototype.forEach.call(flow, function (f, i) { f.classList.toggle('on', i <= n); }); };
  var say = function (h) { note.innerHTML = h; };

  /* 1 · typing */
  say('An employee asks an AI tool for help. The request contains a <b>name</b>, an <b>email</b>, a <b>customer ID</b> and an <b>IBAN</b>.');
  var full = plain(DEMO.prompt);
  if (FAST) txt.textContent = full;
  else for (var i = 1; i <= full.length; i++) { txt.innerHTML = esc(full.slice(0, i)) + '<span class="caret"></span>'; await sleep(26); }
  await sleep(350);

  /* 2 · detect */
  txt.innerHTML = segHTML(DEMO.prompt, 'mark');
  setFlow(0);
  for (var k = 0; k < DEMO.items.length; k++) {
    var c = document.createElement('span'); c.className = 'chip'; c.textContent = '1× ' + DEMO.items[k].t;
    meter.appendChild(c); cnt.textContent = k + 1; await sleep(160);
  }
  say('<b>Detect.</b> Fairwall AI flags 4 sensitive values on the device, before anything is sent.');
  await sleep(1300);

  /* 3 · redact */
  setFlow(1);
  outR.textContent = 'Redacted on your device';
  out.innerHTML = segHTML(DEMO.prompt, 'redact');
  say('<b>Redact.</b> Each value is replaced with a placeholder. This is all the AI provider will receive.');
  await sleep(1700);

  /* 4 · send + response */
  send.classList.add('press'); await sleep(160); send.classList.remove('press');
  setFlow(2); send.disabled = true;
  outL.textContent = 'AI response'; outR.textContent = 'Received from the AI tool';
  out.innerHTML = '<span class="wait">The AI is answering…</span>';
  say('<b>Send.</b> The AI answers using the placeholders. It never sees the real data.');
  await sleep(900);
  out.innerHTML = segHTML(DEMO.reply, 'ph');
  rest.disabled = false;
  await sleep(1500);

  /* 5 · restore */
  rest.classList.add('press'); await sleep(160); rest.classList.remove('press');
  setFlow(3); outR.textContent = 'Restored on your device';
  var nPh = DEMO.reply.filter(function (s) { return typeof s !== 'string'; }).length;
  for (var r = 1; r <= nPh; r++) { out.innerHTML = segHTML(DEMO.reply, 'restore', r); await sleep(260); }
  rest.disabled = true;
  say('<b>Restore.</b> The real values are put back into the answer locally. Nothing sent. Nothing stored. Nothing risked.');
}

async function protect() {
  var boxes = Array.prototype.slice.call(el.kpis.children);
  for (var i = 0; i < boxes.length; i++) {
    var b = boxes[i];
    b.classList.add('safe');
    if (b._def.zero) quiet(countTo(b.querySelector('.v'), 0, 1100, easeOut));
    await sleep(220);
  }
  el.leak.classList.add('safe');
  var rows = el.leak.querySelectorAll('.erow');
  for (var j = 0; j < rows.length; j++) {
    rows[j].classList.add('safe');
    quiet(countTo(rows[j].querySelector('.val'), 0, 1000, easeOut, leakedFmt));
    await sleep(180);
  }
  el.leak.querySelectorAll('.sevchip .num').forEach(function (n) { quiet(countTo(n, 0, 900, easeOut)); });
  await sleep(1000);
}

/* ---------- skip / restart ---------- */
$('#skipBtn').addEventListener('click', function () { FAST = true; flushSleeps(); this.hidden = true; });
$('#restartBtn').addEventListener('click', function () {
  RUN++; flushSleeps(); FAST = REDUCED;
  document.body.className = 's1';
  $('#stage').hidden = true; $('#entry').hidden = false;
  $('#colL').innerHTML = ''; $('#colR').innerHTML = '';
  window.scrollTo(0, 0);
  input.focus(); input.select();
});

/* =========================================================
   "How we calculate this"
   ========================================================= */
function asValue(key, a) {
  if (/Rate$/.test(key)) return pct(a.value);
  return fmt(a.value) === String(a.value) ? fmt(a.value) : String(a.value);
}
function renderCalc() {
  var keys = ['usersPerComputer', 'aiAdoptionRate', 'shadowAiRate', 'promptsPerUserPerDay', 'workdaysPerYear', 'sensitivePromptRate'];
  var h = '<p>Every number in the simulation is <b>your number of computers</b> multiplied by the assumptions below. Nothing is random and nothing is measured from your systems. A demo on your own data replaces these estimates with real figures.</p>';
  h += '<h3>Assumptions</h3>';
  keys.forEach(function (k) {
    var a = A[k];
    h += '<div class="as"><div class="r"><b>' + esc(a.label) + '</b><span class="v">' + asValue(k, a) + '</span></div><div class="u">' + esc(a.unit) + '</div><div class="s">Source: ' + esc(a.source) + '</div></div>';
  });
  h += '<h3>Sensitive data by type</h3>';
  A.categories.forEach(function (c) {
    h += '<div class="as"><div class="r"><b>' + esc(c.label) + '</b><span class="v">' + pct(c.share) + '</span></div><div class="u">' + esc(c.example) + ' · shown as ' + SEV[c.severity].n.toLowerCase() + ' severity</div><div class="s">Source: ' + esc(c.source) + '</div></div>';
  });
  if (R) {
    h += '<h3>Formulas, with your numbers</h3>';
    var line = function (label, formula, calc, v) { return '<div class="fx"><b>' + label + '</b><span class="v">' + fmt(v) + '</span><span class="t">' + formula + '<br>' + calc + '</span></div>'; };
    h += line('AI users', 'computers × users per computer × AI adoption rate', fmt(R.computers) + ' × ' + A.usersPerComputer.value + ' × ' + pct(A.aiAdoptionRate.value), R.aiUsers);
    h += line('Shadow AI users', 'AI users × shadow AI rate', fmt(R.aiUsers) + ' × ' + pct(A.shadowAiRate.value), R.shadowAiUsers);
    h += line('AI prompts per working day', 'AI users × prompts per AI user per day', fmt(R.aiUsers) + ' × ' + A.promptsPerUserPerDay.value, R.promptsPerDay);
    h += line('AI prompts per year', 'prompts per day × working days', fmt(R.promptsPerDay) + ' × ' + A.workdaysPerYear.value, R.promptsPerYear);
    h += line('Sensitive prompts per day', 'prompts per day × sensitive prompt rate', fmt(R.promptsPerDay) + ' × ' + pct(A.sensitivePromptRate.value), R.sensitivePromptsPerDay);
    h += line('Sensitive prompts per year', 'prompts per year × sensitive prompt rate', fmt(R.promptsPerYear) + ' × ' + pct(A.sensitivePromptRate.value), R.sensitivePromptsPerYear);
    R.categories.forEach(function (c) { h += line(esc(c.label), 'sensitive prompts per year × ' + pct(c.share), '', c.count); });
  }
  h += '<div class="note">Displayed numbers are rounded to whole numbers. Category counts are distributed so they add up exactly to the yearly total. The live feed in step 01 shows illustrative, masked example events, not data from your organization.</div>';
  $('#calcBody').innerHTML = h;
}

/* =========================================================
   Overlays (drawer + modal)
   ========================================================= */
var lastFocus = null;
function openLayer(node) {
  lastFocus = document.activeElement;
  node.classList.add('on'); node.setAttribute('aria-hidden', 'false');
  if (node.id === 'calcDrawer') $('#scrim').classList.add('on');
  document.body.style.overflow = 'hidden';
  var f = node.querySelector('input:not([type=hidden]):not([tabindex="-1"]), button, select');
  setTimeout(function () { f && f.focus(); }, 60);
}
function closeLayers() {
  ['#calcDrawer', '#leadModal'].forEach(function (s) { var n = $(s); n.classList.remove('on'); n.setAttribute('aria-hidden', 'true'); });
  $('#scrim').classList.remove('on');
  document.body.style.overflow = '';
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
document.addEventListener('click', function (e) {
  if (e.target.closest('[data-calc]')) { renderCalc(); openLayer($('#calcDrawer')); return; }
  if (e.target.closest('[data-close]') || e.target === $('#scrim') || e.target === $('#leadModal')) closeLayers();
});
document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeLayers(); });
$('#ctaBtn').addEventListener('click', function () { openLayer($('#leadModal')); gtagEv('simulator_cta_click'); });

/* =========================================================
   Lead form → Netlify Forms → /simulator/book
   ========================================================= */
var form = $('#leadForm');
var industry = $('#fIndustry'), otherWrap = $('#otherWrap'), other = $('#fOther');
industry.addEventListener('change', function () {
  var on = industry.value === 'Other';
  otherWrap.hidden = !on; other.required = on;
  if (!on) other.value = '';
});
function validate() {
  var ok = true;
  var put = function (id, input, msg, focusEl) {
    $('#' + id).textContent = msg || '';
    if (input) { if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid'); }
    if (msg && ok) { ok = false; var f = focusEl || input; f && f.focus(); }
  };
  var email = $('#fEmail'), company = $('#fCompany'), phone = $('#fPhone'), size = $('#fSize');
  put('eEmail', email, !email.value.trim() ? 'Please enter your email address.' : !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()) ? 'Please enter a valid email address.' : '');
  put('eCompany', company, company.value.trim() ? '' : 'Please enter your company name.');
  var digits = phone.value.replace(/\D/g, '');
  put('ePhone', phone, !phone.value.trim() ? 'Please enter your phone number.' : !/^\s*(\+|00)\d/.test(phone.value) || !/^[\d\s+()\/.-]+$/.test(phone.value) || digits.length < 8 || digits.length > 15 ? 'Please include the country code, for example +43 660 1234567.' : '');
  var blocking = form.querySelector('input[name="ai_blocking"]:checked');
  put('eBlock', null, blocking ? '' : 'Please choose an answer.', form.querySelector('input[name="ai_blocking"]'));
  put('eSize', size, size.value ? '' : 'Please choose your company size.');
  put('eIndustry', industry, industry.value ? '' : 'Please choose your industry.');
  if (industry.value === 'Other') put('eOther', other, other.value.trim() ? '' : 'Please tell us your industry.');
  else put('eOther', null, '');
  return ok;
}
form.addEventListener('submit', function (e) {
  e.preventDefault();
  $('#formErr').textContent = '';
  if (!validate()) return;
  var btn = $('#leadSubmit'); btn.disabled = true; btn.textContent = 'Sending…';
  var body = new URLSearchParams(new FormData(form)).toString();
  fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body })
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      gtagEv('generate_lead', { form: 'simulator' });
      window.location.href = '/simulator/book';
    })
    .catch(function () {
      btn.disabled = false; btn.textContent = 'Continue to booking →';
      $('#formErr').innerHTML = 'Your details could not be sent. Please try again, or email us at <a href="mailto:juan@ddynamics.ai">juan@ddynamics.ai</a>.';
    });
});

/* deep link for testing / sharing: /simulator?computers=250 */
var qs = new URLSearchParams(location.search).get('computers');
if (qs) { var pr = parseComputers(qs); if (pr.n) { input.value = pr.n; start(pr.n); } }
else input.focus();
})();
