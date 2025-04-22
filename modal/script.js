'use strict'
'use strict';

// Створюємо контейнер
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

// Заголовок
const heading = document.createElement('h2');
heading.textContent = 'Випадкові числа';
container.appendChild(heading);

// Контейнер чисел
const numbersDiv = document.createElement('div');
numbersDiv.className = 'numbers';
container.appendChild(numbersDiv);

// Результат
const result = document.createElement('div');
result.id = 'result';
result.textContent = 'Найбільше число - (число)';
container.appendChild(result);

// Кнопка
const button = document.createElement('button');
button.textContent = 'Згенерувати';
container.appendChild(button);

// Генерація чисел
function generateNumbers() {
  numbersDiv.innerHTML = '';
  const nums = [];
  for (let i = 0; i < 3; i++) {
    const num = Math.floor(Math.random() * 100);
    nums.push(num);

    const numBox = document.createElement('div');
    numBox.className = 'number-box';
    numBox.textContent = num;
    numbersDiv.appendChild(numBox);
  }

  const max = Math.max(...nums);
  result.textContent = `Найбільше число - ${max}`;
}

// Обробник
button.addEventListener('click', generateNumbers);

// Генерація при завантаженні
generateNumbers();





































