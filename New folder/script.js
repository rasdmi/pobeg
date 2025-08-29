html,body{height:100%;margin:0}
body{background:#eff1f3;font-family:system-ui,Segoe UI,Roboto,Manrope,sans-serif}
#wrap{display:flex;align-items:center;justify-content:center;height:100%}
canvas{background:#dfe6ea;box-shadow:0 8px 30px rgba(0,0,0,.15);border-radius:14px;max-width:100%;height:auto;touch-action:none}

/* HUD */
.hud{position:fixed;left:10px;top:10px;background:rgba(255,255,255,.92);padding:6px 10px;border-radius:10px;font-weight:800;z-index:2}
.timer{position:fixed;right:10px;top:10px;background:rgba(255,255,255,.92);padding:6px 10px;border-radius:10px;font-weight:800;z-index:2}
.help{position:fixed;left:10px;bottom:10px;background:rgba(255,255,255,.92);padding:6px 10px;border-radius:10px;font-weight:600;z-index:2}

/* Сводка */
.summary{position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:20px;z-index:3}
.summary .card{background:#fff;border-radius:16px;box-shadow:0 20px 80px rgba(0,0,0,.25);max-width:560px;width:100%;padding:22px}
.summary h2{margin:0 0 8px 0}

/* Кнопки */
.btn{padding:10px 18px;font-size:16px;font-weight:700;border:none;border-radius:10px;cursor:pointer;background:#ff6b35;color:#fff;box-shadow:0 4px 10px rgba(0,0,0,.2)}
.btn.secondary{background:#2f80ed}
.btn.ghost{background:#fff;color:#333;border:2px solid #d0d7de;box-shadow:none}

/* Окно выбора уровней */
.menu{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:4}
.menu .card{background:#fff;border-radius:16px;box-shadow:0 20px 80px rgba(0,0,0,.25);max-width:640px;width:100%;padding:22px}
.menu h1{margin:0 0 10px 0}
.menu .grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* Мини-кнопка меню */
.mini{
  position:fixed;left:10px;top:10px;z-index:5;
  background:#fff;border:2px solid #d0d7de;border-radius:12px;
  padding:6px 10px;font-weight:700;box-shadow:0 3px 12px rgba(0,0,0,.12);
  cursor:pointer
}

/* ==== Мобильные кнопки ==== */
.mobile{
  position:fixed; inset:auto 0 0 0; padding:10px 10px 14px;
  display:flex; flex-direction:column; gap:8px;
  z-index:6; pointer-events:auto; user-select:none;
}
.mobile-row{display:flex; gap:8px; justify-content:center}
.mobile .ctl, .mobile .slot{
  min-width:54px; min-height:48px; border:none; border-radius:12px;
  background:rgba(255,255,255,.9); box-shadow:0 4px 14px rgba(0,0,0,.18);
  font-weight:800; font-size:18px; padding:8px 12px;
}
.mobile .ctl.big{min-width:80px}
.mobile .hotbar .slot{min-width:40px; font-weight:700}

/* Утилиты */
.hidden{display:none!important}           /* важно: скрывает всё жёстко */
.menu.hidden{display:none!important}      /* фикс: меню действительно скрывается */

/* Адаптив */
@media (max-width: 820px){
  canvas{width:100%; height:auto}
}
