'use strict'

const age = 15;
console.log(age);

const name = 'Vasyl';
console.log(name);

const isStudent = true;
console.log(isStudent);

const myString = 'Прагніть не до успіху, а до цінностей, які він дає. Альберт Айнштайн';
console.log(myString);

const myNumber = 20;
const myNumberTwo = myNumber + 20;
console.log(myNumberTwo);

const myNull = null;
console.log(myNull);

const user = prompt('Введіть своє ім*я');
alert(`Hello${user}`);

const change = confirm('Yes or No?');
if(change === true) {
    alert('Дякую за підтвердження!')
} else {
    alert('Дію відмінено!')
}

alert('Дія небезпечна!');
const danger = confirm('Дія небезпечна, чи підтверджуєте її?');
if (danger === true) {
    alert('Дякую за підтвердження!')
} else {
    alert('Дію відмінено!')
}

