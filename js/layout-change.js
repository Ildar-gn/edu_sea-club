let gridButton = document.querySelector('.card-view-button-grid');
let listButton = document.querySelector('.card-view-button-list');
let cards = document.querySelector('.cards');

listButton.onclick = function () {
  gridButton.classList.remove('active');
  listButton.classList.add('active');
  cards.classList.add('list');
};

gridButton.onclick = function () {
  listButton.classList.remove('active');
  gridButton.classList.add('active');
  cards.classList.remove('list');
};