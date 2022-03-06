const $themeToggleSwitch = document.getElementById("theme-switch");
const $html = document.documentElement;

function setThemePreference({ isDarkMode }) {
  if (window.localStorage) {
    window.localStorage.setItem('site__theme', isDarkMode ? 'dark' : 'light');
  }
}

function getThemePreference() {
    return window.localStorage && window.localStorage.getItem('site__theme');
}

function toggleDarkMode(isDarkMode) {
  if (isDarkMode) {
    $html.classList.add("mode-dark");
  } else {
    $html.classList.remove("mode-dark");
  }
}

class ThemeSwitcher extends HTMLElement {
  constructor() {
    super();

    this.$toggleSwitch = this.querySelector('#theme-switch')
    this.$toggleSwitch.checked = this.checkedState;

    this.$toggleSwitch.addEventListener('change', this.handleThemeChange);
  }

  get checkedState() {
    const theme = getThemePreference();
    const userPrefersDarkMode = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (theme) {
      return theme === 'dark';
    }

    return userPrefersDarkMode;
  }

  handleThemeChange(e) {
    const isDarkMode = e.target.checked;
    setThemePreference({ isDarkMode });
    toggleDarkMode(isDarkMode);
  }
}

customElements.define('theme-switcher', ThemeSwitcher);
