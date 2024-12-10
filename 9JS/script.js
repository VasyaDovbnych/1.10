'use strict'
// const add = function(a, b, c) {
//     return a + b + c;
// }
// console.log(add(5, 4, 3));






// const a = 3;
// const b = 4;
// const k = Math.sqrt(Math.pow( a, 2 ) + Math.pow(b, 2));
// console.log(k);



// const randoms = Math.floor(Math.random() * (19 - 3 + 1)) + 3;
// console.log(randoms)


// const c = parseFloat(prompt('Ввидіть цифру'));
// const k = parseFloat(prompt('Ввидіть цифру'));
// const number = c + k;
// alert(`Сума цих чисел ${ number }` );

// a2 * b2 = c2




const filter = function (array, test) {
    const filteredElements = [];
    for (const element of array){
        const passed = test(element);
        if (passed){
            filteredElements.push(element)
        }
    }
    return filteredElements;
}


const fruits = [
    {name: 'apples', quantity: 300, isFresh: true},
    {name: 'ananas', quantity: 150, isFresh: true},
    {name: 'kiwis', quantity: 550, isFresh: false}
]

const freshFruits = filter(fruits, fruit => fruit.isFresh);
console.log(freshFruits);