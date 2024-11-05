'use strict'
function checkJavaScript(inputText) {
    if (inputText.includes('JavaScript')) {
        console.log('Текст містить слово JavaScript');
    } else {
        console.log('Текст не містить слово JavaScript');
    }
}

// Виклик функції для перевірки
checkJavaScript('Я вивчаю JavaScript'); // Текст містить слово JavaScript
checkJavaScript('Цей текст не містить слово.'); // Текст не містить слово JavaScript