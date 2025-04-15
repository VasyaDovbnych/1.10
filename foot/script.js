'use strict';

const field = document.querySelector('.field');
const ball = document.getElementById('ball');

field.addEventListener('mousemove', (e) => {
  const rect = field.getBoundingClientRect();
  const x = e.clientX - rect.left - ball.offsetWidth / 2;
  const y = e.clientY - rect.top - ball.offsetHeight / 2;

  // Переміщення м’яча
  ball.style.left = `${x}px`;
  ball.style.top = `${y}px`;
});
