'use strict'
const inputs = document.querySelectorAll('input[type="number"]');
const result = document.getElementById('result');

function updateMax() {
  const values = Array.from(inputs)
    .map(el => parseFloat(el.value))
    .filter(val => !isNaN(val));

  if (values.length > 0) {
    const max = Math.max(...values);
    result.textContent = `Найбільше число, яке ви ввели - ${max}`;
  } else {
    result.textContent = `Найбільше число, яке ви ввели - (число)`;
  }
}

inputs.forEach(input => {
  input.addEventListener('input', updateMax);
});






































