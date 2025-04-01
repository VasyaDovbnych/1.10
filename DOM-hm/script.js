'use strict'
const button = document.getElementById("myButton");
const textInput = document.getElementById("textInput");
button.addEventListener("click", function() {
    button.textContent = textInput.value;
});

const link = document.getElementById("myLink");
const linkImage = document.getElementById("linkImage");
link.href = "https://new-site.com";
linkImage.alt = "Опис нового зображення";

const firstItem = document.getElementById("firstItem");
firstItem.textContent = "Новий текст";