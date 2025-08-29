<!-- Основная разметка игры — вставь внутрь <body> -->
<div class="hud" id="hud">🪙 <span id="score">0</span> · ❤️ <span id="lives">3</span> · 🔧 <span id="weapon">нет</span></div>
<div class="timer" id="timer">⏱️ <span id="time">30</span> c</div>
<div id="wrap"><canvas id="game" width="1024" height="576"></canvas></div>

<button id="menuMini" class="mini hidden" title="Открыть выбор уровня">📂 Уровни</button>

<div id="menu" class="menu">
  <div class="card">
    <div style="display:flex;justify-content:space-between;align-items:center;gap:8px">
      <h1 style="margin:0">Выбор уровня</h1>
      <button id="minBtn" class="btn ghost" title="Свернуть в левый верх">↖ Свернуть</button>
    </div>
    <p>Выбери режим. Esc — освободить мышь.</p>
    <div class="grid">
      <button id="btnL1" class="btn">Уровень 1 — Паркур побег</button>
      <button id="btnL2" class="btn secondary">Уровень 2 — 1-лицо (майнкрафт)</button>
    </div>
  </div>
</div>

<div id="summary" class="summary hidden" role="dialog" aria-modal="true">
  <div class="card">
    <h2 id="sumTitle">Миссия!</h2>
    <p id="sumText"></p>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:14px">
      <button id="restart" class="btn">🔄 Играть снова</button>
      <button id="toMenu" class="btn secondary">🏠 В меню уровней</button>
    </div>
  </div>
</div>

<div id="help" class="help hidden"></div>
