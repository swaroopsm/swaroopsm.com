const $themeToggleSwitch = document.getElementById("theme-switch");
const $html = document.documentElement;

function checkDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

function switchToDarkMode(isDarkMode) {
  if (isDarkMode) {
    $html.classList.add("mode-dark");
  } else {
    $html.classList.remove("mode-dark");
  }

  $themeToggleSwitch.checked = isDarkMode;
}

function toggleDarkMode() {
  const isDarkMode = $html.classList.contains("mode-dark");

  switchToDarkMode(!isDarkMode);
}

if (checkDarkMode()) {
  switchToDarkMode(true);
} else {
  switchToDarkMode(false);
}

$themeToggleSwitch.addEventListener("click", toggleDarkMode);
