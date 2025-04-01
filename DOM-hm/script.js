'use strict'
// const button = document.getElementById("myButton");
// const textInput = document.getElementById("textInput");
// button.addEventListener("click", function() {
//     button.textContent = textInput.value;
// });

// const link = document.getElementById("myLink");
// const linkImage = document.getElementById("linkImage");
// link.href = "https://new-site.com";
// linkImage.alt = "Опис нового зображення";

// const firstItem = document.getElementById("firstItem");
// firstItem.textContent = "Новий текст";














const categories = document.querySelectorAll("#categories .item");
console.log(`У списку ${categories.length} категорії.`);

categories.forEach(category => {
    const title = category.querySelector("h2").textContent;
    const itemsCount = category.querySelectorAll("ul li").length;
    console.log(`Категорія: ${title}\nКількість елементів: ${itemsCount}`);
});

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи'
];
const ingredientsList = document.getElementById("ingredients");
const ingredientsElements = ingredients.map(ingredient => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    return li;
});
ingredientsList.append(...ingredientsElements);

const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    }
];
const gallery = document.getElementById("gallery");
const galleryMarkup = images.map(image => `<li><img src="${image.url}" alt="${image.alt}"></li>`).join("");
gallery.insertAdjacentHTML("beforeend", galleryMarkup);