'use strict'
let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

let email = "vasiaadovbnich@gmail.com";
let containsAtSymbol = email.includes('@');
let characterCount = email.length;
console.log("Містить @:", containsAtSymbol);
console.log("Кількість символів:", characterCount);

let word1 = "My";
let word2 = "name";
let word3 = "is";
let fullName = word1 + " " + word2 + " " + word3 + " Viktor";
console.log(fullName);

let userName = "Олександро";
let payment = 300;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень.`);