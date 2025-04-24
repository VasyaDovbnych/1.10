'use strict';

// Дані з фото
const scientists = [
  { name: 'Albert Einstein', birth: 1879, death: 1955, img: '/9.jpg' },
  { name: 'Isaac Newton', birth: 1643, death: 1727, img: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Sir_Isaac_Newton_%281643-1727%29.jpg' },
  { name: 'Galileo Galilei', birth: 1564, death: 1642, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Galileo.arp.300pix.jpg' },
  { name: 'Marie Curie', birth: 1867, death: 1934, img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Marie_Curie_c1920.jpg' },
  { name: 'Johannes Kepler', birth: 1571, death: 1630, img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Johannes_Kepler_1610.jpg' },
  { name: 'Nicolaus Copernicus', birth: 1473, death: 1543, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Nikolaus_Kopernikus.jpg' },
  { name: 'Max Planck', birth: 1858, death: 1947, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Max_Planck_1933.jpg' },
  { name: 'Katherine Blodgett', birth: 1898, death: 1979, img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Katherine_Blodgett.jpg' },
  { name: 'Ada Lovelace', birth: 1815, death: 1852, img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Ada_Lovelace_portrait.jpg' },
  { name: 'Sarah E. Goode', birth: 1855, death: 1905, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sarah_E._Goode.jpg/220px-Sarah_E._Goode.jpg' },
  { name: 'Lise Meitner', birth: 1878, death: 1968, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Lise_Meitner_1946b.jpg' },
  { name: 'Hanna Hammarström', birth: 1829, death: 1909, img: 'https://upload.wikimedia.org/wikipedia/commons/f/fc/Hanna_Hammarstr%C3%B6m.jpg' },
];

// Заголовок
const title = document.createElement('h2');
title.textContent = 'Вчений';
document.body.appendChild(title);

// Контейнер
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

// Функція відображення
function renderCards(data, singleRow = false) {
  container.innerHTML = '';
  container.className = singleRow ? 'container filtered' : 'container';
  data.forEach(sci => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <strong>${sci.name}</strong><br>${sci.birth} – ${sci.death}
      <img src="${sci.img}" alt="${sci.name}" />
    `;
    container.appendChild(card);
  });
}
renderCards(scientists);

// Кнопки
const actions = document.createElement('div');
actions.className = 'actions';
document.body.appendChild(actions);

function addButton(text, callback) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.onclick = callback;
  actions.appendChild(btn);
}

// Фільтри
addButton('Відсортувати за кількістю прожитих років', () => {
  const sorted = [...scientists].sort((a, b) => (b.death - b.birth) - (a.death - a.birth));
  renderCards(sorted);
});

addButton('Знайти вченого, який народився найпізніше', () => {
  const latest = Math.max(...scientists.map(s => s.birth));
  renderCards(scientists.filter(s => s.birth === latest), true);
});

addButton('Перші літери імені = прізвищу', () => {
  renderCards(scientists.filter(s => {
    const [first, last] = s.name.split(' ');
    return first?.[0] === last?.[0];
  }), true);
});

addButton('Знайти рік народження Ейнштейна', () => {
  const einstein = scientists.find(s => s.name.includes('Einstein'));
  if (einstein) renderCards([einstein], true);
});

addButton('Прізвища не на "C"', () => {
  renderCards(scientists.filter(s => {
    const last = s.name.split(' ').slice(-1)[0];
    return !last.startsWith('C');
  }));
});

addButton('Видалити вчених з іменем на "A"', () => {
  renderCards(scientists.filter(s => !s.name.startsWith('A')));
});

addButton('Прожив найменше', () => {
  const minLived = Math.min(...scientists.map(s => s.death - s.birth));
  renderCards(scientists.filter(s => (s.death - s.birth) === minLived), true);
});

addButton('Народились у 19 ст.', () => {
  renderCards(scientists.filter(s => s.birth >= 1801 && s.birth <= 1900));
});
