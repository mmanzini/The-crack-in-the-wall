(function () {
  var root = document.documentElement;
  var STORAGE_KEY = 'ts-theme';

  function applyTheme(dark) {
    root.classList.toggle('dark', dark);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    var icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = dark ? '\u2600' : '\u263E';
    var label = document.getElementById('theme-label');
    if (label) label.textContent = dark ? 'Light mode' : 'Dark mode';
  }

  // Hydrate immediately from localStorage (before first paint — no flash)
  var stored = localStorage.getItem(STORAGE_KEY);
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(stored !== null ? stored === 'dark' : prefersDark);

  window.toggleTheme = function () {
    var isDark = root.classList.toggle('dark');
    localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light');
    applyTheme(isDark);
  };
})();
