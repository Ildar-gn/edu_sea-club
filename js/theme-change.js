// Переключение темы

let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');


darkThemeButton.onclick = function () {
  lightThemeButton.classList.remove('active');
  darkThemeButton.classList.add('active');
  document.body.classList.add('dark')
};

lightThemeButton.onclick = function () {
  darkThemeButton.classList.remove('active');
  lightThemeButton.classList.add('active');
  document.body.classList.remove('dark')
};

// Переключение шрифта

let sansSerifFontButton = document.querySelector('.font-button-sans-serif');
let serifFontButton = document.querySelector('.font-button-serif');

serifFontButton.onclick = function () {
  sansSerifFontButton.classList.remove('active');
  serifFontButton.classList.add('active');
  document.body.classList.add('serif');
};

sansSerifFontButton.onclick = function () {
  serifFontButton.classList.remove('active');
  sansSerifFontButton.classList.add('active');
  document.body.classList.remove('serif');
};