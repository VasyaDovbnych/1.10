'use strict';
const coords = document.querySelector('.js-coords');
let mouse = 0;
window.addEventListener('mousemove', (event) =>{
    mouse += 1;
    coords.textContent = `
    Кількість викликів onMouseMove: ${mouse},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
})