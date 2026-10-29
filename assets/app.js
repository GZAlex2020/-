/* ============================================================
   葡萄牙语外贸沟通速成 —— 交互逻辑
   功能：模块导航 / 发音朗读 / 闪卡练习 / 收藏 / 搜索
   ============================================================ */

const FAV_KEY = "ptbr_fav_v1";
let favorites = loadFav();
let flatPhrases = [];   // 所有可练习/收藏的短语
let flashList = [];     // 当前闪卡序列
let flashIdx = 0;
let flipped = false;
let currentView = "module"; // module | flash | fav

/* ---------- 收藏存取 ---------- */
function loadFav() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY)) || []; }
  catch (e) { return []; }
}
function saveFav() {
  localStorage.setItem(FAV_KEY, JSON.stringify(favorites));
}
function isFav(pt) { return favorites.includes(pt); }
function toggleFav(pt) {
  if (isFav(pt)) favorites = favorites.filter(x => x !== pt);
  else favorites.push(pt);
  saveFav();
  refreshFavButtons();
  if (currentView === "fav") renderFav();
}
function refreshFavButtons() {
  document.querySelectorAll(".fav").forEach(btn => {
    const on = isFav(btn.dataset.pt);
    btn.classList.toggle("active", on);
    btn.textContent = on ? "★ 已收藏" : "☆ 收藏";
  });
}

/* ---------- 发音朗读（浏览器内置 TTS，pt-BR） ---------- */
/* ---------- 发音朗读 ----------
   优先使用系统本地 pt-BR 语音；未安装葡语语音包时自动回退在线发音。 */
function pickVoice() {
  const vs = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return vs.find(v => /pt[-_]BR/i.test(v.lang)) ||
         vs.find(v => /^pt/i.test(v.lang)) || null;
}

function speak(text) {
  if (!("speechSynthesis" in window)) {
    toast("浏览器不支持语音朗读，请使用 Chrome / Edge");
    return;
  }
  const ptVoice = pickVoice();
  if (!ptVoice) { speakOnline(text); return; }  // 系统没有葡语语音 → 在线发音

  const synth = window.speechSynthesis;
  synth.cancel();
  // 延迟启动，规避 Chrome 中 cancel() 紧跟 speak() 被吞掉的问题
  setTimeout(() => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-BR";
    u.rate = 0.85;
    u.voice = ptVoice;
    u.onerror = () => speakOnline(text);   // 本地朗读失败 → 在线兜底
    synth.speak(u);
  }, 60);
}

/* 在线发音：主源 Google TTS（三个 Google 主机互为备用，均支持无 Referer）
   关键：浏览器加载音频会自动带 Referer，Google 会拒绝 → 设置 no-referrer */
function speakOnline(text) {
  const q = encodeURIComponent(text.slice(0, 180));
  const base = "?ie=UTF-8&client=tw-ob&tl=pt&q=";
  const sources = [
    "https://translate.google.com/translate_tts" + base + q,
    "https://clients5.google.com/translate_tts" + base + q,
    "https://translate.googleapis.com/translate_tts" + base + q,
  ];
  tryPlaySources(sources, 0);
}

function tryPlaySources(sources, i) {
  if (i >= sources.length) { toast("在线发音失败，请检查网络后重试"); return; }
  if (window._ptAudio) { window._ptAudio.pause(); window._ptAudio = null; }

  const a = new Audio();
  a.referrerPolicy = "no-referrer";   // 必须在设置 src 之前
  a.src = sources[i];
  window._ptAudio = a;

  let settled = false;
  const next = () => { if (!settled) { settled = true; tryPlaySources(sources, i + 1); } };

  a.onerror = next;
  a.play().then(() => { settled = true; }).catch(err => {
    if (err && err.name === "NotAllowedError") {
      settled = true;
      toast("播放被浏览器拦截，请再点一次");
    } else {
      next();   // 加载失败等 → 尝试下一个源
    }
  });
}

/* 轻提示气泡 */
function toast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove("show"), 3000);
}

// 部分浏览器需异步加载声音列表
if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

/* ---------- 构建侧边导航 ---------- */
function buildNav() {
  const nav = document.getElementById("nav");
  nav.innerHTML = "";

  const home = document.createElement("div");
  home.className = "nav-item active";
  home.dataset.target = "home";
  home.innerHTML = `<span class="ic">🏠</span><span>学习首页</span>`;
  nav.appendChild(home);

  COURSE.modules.forEach(m => {
    const el = document.createElement("div");
    el.className = "nav-item";
    el.dataset.target = m.id;
    el.innerHTML = `<span class="ic">${m.icon}</span><span>${m.name}</span>`;
    nav.appendChild(el);
  });

  const flash = document.createElement("div");
  flash.className = "nav-item";
  flash.dataset.target = "flash";
  flash.innerHTML = `<span class="ic">🎴</span><span>闪卡练习</span>`;
  nav.appendChild(flash);

  const fav = document.createElement("div");
  fav.className = "nav-item";
  fav.dataset.target = "fav";
  fav.innerHTML = `<span class="ic">⭐</span><span>我的收藏</span>`;
  nav.appendChild(fav);

  nav.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => switchView(item.dataset.target));
  });
}

/* ---------- 渲染模块内容 ---------- */
function renderModule(id) {
  const mod = COURSE.modules.find(m => m.id === id);
  const root = document.getElementById("module-view");
  root.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = `${mod.icon} ${mod.name}`;
  root.appendChild(h2);

  mod.sections.forEach(sec => {
    const block = document.createElement("div");
    block.className = "section-block";
    const h3 = document.createElement("h3");
    h3.textContent = sec.title;
    block.appendChild(h3);

    const grid = document.createElement("div");
    grid.className = "cards";

    sec.items.forEach(it => {
      const card = document.createElement("div");
      const isInfo = sec.type === "info";
      card.className = "card" + (isInfo ? " info-card" : "") + (sec.type === "template" ? " template-card" : "");
      card.dataset.pt = it.pt;
      card.dataset.pron = it.pron || "";
      card.dataset.zh = it.zh || "";

      let html = `<div class="row"><div style="flex:1">`;
      html += `<div class="pt">${escapeHtml(it.pt)}</div>`;
      if (it.pron && it.pron !== "——") html += `<div class="pron">${escapeHtml(it.pron)}</div>`;
      if (it.zh) html += `<div class="zh">${escapeHtml(it.zh)}</div>`;
      if (it.note) html += `<div class="note">${escapeHtml(it.note)}</div>`;
      html += `</div></div>`;

      if (sec.type !== "info") {
        html += `<div class="tools">
          <button class="speak" data-pt="${escapeAttr(it.pt)}">🔊 朗读</button>
          <button class="fav" data-pt="${escapeAttr(it.pt)}">${isFav(it.pt) ? "★ 已收藏" : "☆ 收藏"}</button>
        </div>`;
      }
      card.innerHTML = html;
      grid.appendChild(card);
    });

    block.appendChild(grid);
    root.appendChild(block);
  });

  bindCardButtons();
}

/* ---------- 首页 ---------- */
function renderHome() {
  const root = document.getElementById("home-view");
  root.innerHTML = `
    <h2>🚀 ${escapeHtml(COURSE.meta.title)}</h2>
    <p style="color:var(--muted);max-width:680px">
      ${escapeHtml(COURSE.meta.subtitle)}。本课程专为<strong>外贸 / 电商</strong>场景设计，
      从字母发音、日常问候，到询盘、报价、订单、物流、售后全流程。
      点击任意句子右侧 <strong>🔊</strong> 可听巴西葡语真人发音（依赖浏览器语音引擎）。
    </p>
    <div class="cards" style="margin-top:18px">
      <div class="card info-card" style="border-color:var(--accent)">
        <div class="pt">💡 学习建议</div>
        <div class="zh">
          ① 先过一遍「基础与问候」和「核心词汇」；<br>
          ② 重点背熟「外贸实战场景」，按客户沟通顺序记忆；<br>
          ③ 用「闪卡练习」自测，把常用句「☆收藏」建专属短语本；<br>
          ④ 给客户发消息前，套用「邮件/消息模板」并点 🔊 校对发音。
        </div>
      </div>
    </div>
    <div class="cards" style="margin-top:8px">
      <div class="card" style="cursor:pointer" onclick="switchView('flash')">
        <div class="pt">🎴 开始闪卡练习</div>
        <div class="zh">随机抽取短语，点击卡片翻转看中文。</div>
      </div>
      <div class="card" style="cursor:pointer" onclick="switchView('trade')">
        <div class="pt">💼 直达外贸实战</div>
        <div class="zh">询盘 / 报价 / 样品 / 订单 / 付款 / 物流 / 售后。</div>
      </div>
    </div>`;
}

/* ---------- 闪卡练习 ---------- */
function buildFlatPhrases() {
  flatPhrases = [];
  COURSE.modules.forEach(m => m.sections.forEach(s => {
    if (s.type === "info") return;
    s.items.forEach(it => {
      if (it.pt && it.pt !== "——") flatPhrases.push(it);
    });
  }));
}
function startFlash() {
  if (flatPhrases.length === 0) buildFlatPhrases();
  const pool = favorites.length > 0
    ? flatPhrases.filter(p => isFav(p.pt))
    : flatPhrases;
  flashList = shuffle([...pool]);
  flashIdx = 0;
  flipped = false;
  renderFlash();
  updateFlashProgress();
}
function renderFlash() {
  if (flashList.length === 0) {
    document.getElementById("flashcard").innerHTML =
      `<div class="flash-face flash-front"><div class="big">暂无卡片</div>
       <div class="small">先去收藏一些短语，或在首页开始练习。</div></div>`;
    return;
  }
  const it = flashList[flashIdx];
  const card = document.getElementById("flashcard");
  card.className = "flashcard" + (flipped ? " flipped" : "");
  card.innerHTML = `
    <div class="flash-inner">
      <div class="flash-face flash-front">
        <div class="big">${escapeHtml(it.pt)}</div>
        <div class="flash-hint">点击卡片翻面看意思 · 🔊 听发音</div>
      </div>
      <div class="flash-face flash-back">
        ${it.pron && it.pron !== "——" ? `<div class="mid">${escapeHtml(it.pron)}</div>` : ""}
        <div class="small">${escapeHtml(it.zh || "")}</div>
        ${it.note ? `<div class="flash-hint" style="margin-top:8px">${escapeHtml(it.note)}</div>` : ""}
      </div>
    </div>`;
  card.onclick = () => { flipped = !flipped; renderFlash(); };
}
function nextFlash(dir) {
  if (flashList.length === 0) return;
  flashIdx = (flashIdx + dir + flashList.length) % flashList.length;
  flipped = false;
  renderFlash();
  updateFlashProgress();
}
function updateFlashProgress() {
  document.getElementById("flash-progress").textContent =
    flashList.length ? `第 ${flashIdx + 1} / ${flashList.length} 张` : "";
}
function speakCurrent() {
  const it = flashList[flashIdx];
  if (it) speak(it.pt);
}

/* ---------- 收藏页 ---------- */
function renderFav() {
  const root = document.getElementById("fav-content");
  root.innerHTML = "";
  const h2 = document.createElement("h2");
  h2.textContent = "⭐ 我的收藏";
  root.appendChild(h2);

  if (favorites.length === 0) {
    root.innerHTML += `<div class="empty-tip">还没有收藏。在任意句子点「☆ 收藏」即可加入这里。</div>`;
    return;
  }
  const grid = document.createElement("div");
  grid.className = "cards";
  flatPhrases
    .filter(p => isFav(p.pt))
    .forEach(it => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <div class="pt">${escapeHtml(it.pt)}</div>
        ${it.pron && it.pron !== "——" ? `<div class="pron">${escapeHtml(it.pron)}</div>` : ""}
        <div class="zh">${escapeHtml(it.zh || "")}</div>
        ${it.note ? `<div class="note">${escapeHtml(it.note)}</div>` : ""}
        <div class="tools">
          <button class="speak" data-pt="${escapeAttr(it.pt)}">🔊 朗读</button>
          <button class="fav active" data-pt="${escapeAttr(it.pt)}">★ 已收藏</button>
        </div>`;
      grid.appendChild(card);
    });
  root.appendChild(grid);
  bindCardButtons();
}

/* ---------- 视图切换 ---------- */
function switchView(target) {
  currentView = target;
  document.querySelectorAll(".nav-item").forEach(n =>
    n.classList.toggle("active", n.dataset.target === target));
  closeSidebar();

  const home = document.getElementById("home-view");
  const mod = document.getElementById("module-view");
  const flash = document.getElementById("flash-view");
  const fav = document.getElementById("fav-view");
  [home, mod, flash, fav].forEach(v => v.classList.remove("active"));

  if (target === "home") { home.classList.add("active"); renderHome(); }
  else if (target === "flash") { flash.classList.add("active"); startFlash(); }
  else if (target === "fav") { fav.classList.add("active"); renderFav(); }
  else { mod.classList.add("active"); renderModule(target); }
  // 搜索框清空，避免影响其它视图
  const sb = document.getElementById("search");
  if (sb) sb.value = "";

  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- 事件绑定 ---------- */
function bindCardButtons() {
  document.querySelectorAll(".speak").forEach(b =>
    b.addEventListener("click", e => { e.stopPropagation(); speak(b.dataset.pt); }));
  document.querySelectorAll(".fav").forEach(b =>
    b.addEventListener("click", e => { e.stopPropagation(); toggleFav(b.dataset.pt); }));
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------- 搜索 ---------- */
function setupSearch() {
  const box = document.getElementById("search");
  box.addEventListener("input", () => {
    const q = box.value.trim().toLowerCase();
    if (currentView !== "module") switchView("basics");
    document.querySelectorAll("#module-view .card").forEach(card => {
      const hay = (card.dataset.pt + " " + card.dataset.pron + " " + card.dataset.zh).toLowerCase();
      card.style.display = (!q || hay.includes(q)) ? "" : "none";
    });
  });
}

/* ---------- 移动端侧边栏 ---------- */
function openSidebar() { document.getElementById("sidebar").classList.add("open"); document.getElementById("overlay").classList.add("show"); }
function closeSidebar() { document.getElementById("sidebar").classList.remove("open"); document.getElementById("overlay").classList.remove("show"); }

/* ---------- 初始化 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  buildFlatPhrases();
  setupSearch();
  document.getElementById("menu-toggle").addEventListener("click", openSidebar);
  document.getElementById("overlay").addEventListener("click", closeSidebar);
  document.getElementById("flash-next").addEventListener("click", () => nextFlash(1));
  document.getElementById("flash-prev").addEventListener("click", () => nextFlash(-1));
  document.getElementById("flash-speak").addEventListener("click", speakCurrent);
  document.getElementById("flash-restart").addEventListener("click", startFlash);
  switchView("home");
});
