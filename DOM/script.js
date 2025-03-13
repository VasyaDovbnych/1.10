'use strict'
const listEl = document.querySelector("ul")
console.log(listEl)

const firstItemEl = listEl.firstElementChild
console.log(firstItemEl)

const listElOne = firstItemEl.parentElement
console.log(listElOne)









const titleEl = document.createElement('h1')
titleEl.classList.add('page-title')
titleEl.textContent = 'My first element'
titleEl.style.color = 'red'
console.log(titleEl)