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




// const filter = function (array, test) {
//     const filteredElements = [];
//     for (const element of array){
//         const passed = test(element);
//         if (passed){
//             filteredElements.push(element)
//         }
//     }
//     return filteredElements;
// }


// const fruits = [
//     {name: 'apples', quantity: 300, isFresh: true},
//     {name: 'ananas', quantity: 150, isFresh: true},
//     {name: 'kiwis', quantity: 550, isFresh: false}
// ]

// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits);


// const add = (a, b, c) => a + b + c;

// const fn = x => x * 2;

// const fn2 = () => {
//     console.log('hello')
// }
// console.log(fn2)

// const fn3 = (a, b, c) => {
//     return a + b + c;
// }

// const addArr =  (...args) => {
//     console.log(args)
// }

























// const hotel = {
//     name: 'Hittom',
//     stars: 5,
//     capacity: 250,
//     senMessege: function(){
//         console.log('Welcome')
//     },

//     senMessege(){
//         console.log('Welcome')
//     }
// }
// console.log(hotel);


// const person = {
//     name: 'Tom',
//     age: 12,
//     gender: 'boy',

//     describe(){
//         console.log(`Ім'я: ${this.name} Вік: ${this.age} Стать: ${this.gender}`)
//     }
// } 

// console.log(person.describe());




// const students = [ {
//     name: 'One',
//     age: 11,
//     gender: 'boy',
//     grade: 1
// }, {
//     name: 'Two',
//     age: 17,
//     gender: 'boy',
//     grade: 2
// }

// ]
// function count (students){
//     let count = 0;
//     let total = 0;
//     for( let i = 0; i < students.length; i++){
//         total += students[i].grade;
//         count++;
//     }
//     return count === 0 ? 0 : total/count;
// }
//  const average = count(students)
//  console.log(`Середній бал студентів ${average}`);































// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capasity: 250,
// }

// for(const key in hotel) {
//     console.log('Key: ', key);
// }

// for(const key in hotel) {
//     console.log('value: ', hotel[key]);
// }




// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capasity: 250,
// }
// const keys = Object.keys(hotel);
// console.log(keys);

// const values = Object.values(hotel);
// console.log(values)

// const entries = Object.entries(hotel);
// console.log(entries);



// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capasity: 250,
// }

// const keys = Object.keys(hotel);
// for(const key of keys) {
//     console.log('value: ', hotel[key]);
// }


// const entries = Object.entries(hotel);
// for(const entry of entries) {
//     const key = entry [0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }




// const goods = {
//     apples: 10,
//     kiwi: 5,
//     mango: 6,
//     line: 2,
// }
// const values = Object.values(goods);

// let total = 0;
// for(const value of values) {
//     total += value;
// }
// console.log(total);




// const temp = [20, 24, 18, 22, 20, 21, 23, 25, 27];
// const min = Math.min(temp);
// console.log(min);

// const mini = Math.min(...temp);
// console.log(mini);


// const names = ['Alex', 'Sam', 'Bob', 'Tom'];
// console.log(names);

// const copyNames = [...names];
// console.log(copyNames);

// console.log(names === copyNames);

// const sliceNames = names.slice();
// console.log(sliceNames);



// const names = ['Alex', 'Sam', 'Bob', 'Tom', 'Nick', 'Poll'];
// const complateNames = [...names, 'Vasyl'];
// console.log(complateNames);



// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr = [...arr1, ...arr2];
// console.log(arr);



// const names = ['Alex', 'Sam', 'Bob', 'Tom', 'Nick', 'Poll'];
// const copy = [...names.slice(0,4), ...names.slice(5)];
// console.log(copy);
// const copy1 = [...names.slice(0,1), 'Bibi', ...names.slice(2)];
// console.log(copy1);



// const a = {x: 1, y: 2 };
// const b = {x: 0, n: 3};
// const c= Object.assign({}, a, b);
// console.log(c);

// const d = {...a, ...b};
// console.log(d);


// const a = {x: 1, y: 2 };
// const b = {x: 0, n: 3};
// const c = {m: 4, ...a, l: 6, ...b};
// console.log(c);





































// const hotel = {
//     name: 'Hilton',
//     stars: 5,
//     capacity: 250,
// };
// const {name, stars, status} = hotel;
// console.log(name, stars, status);

// const {name, ...rest} = hotel;
// console.log(name);
// console.log(rest);

// let options = {
//     size: {
//         width: 100,
//         height: 200,
//     },
//     items: ['Cake', 'Donut'],
//     extra: true,
// };
// const { size: {width, height}, items: [item1, item2]} = options;
// console.log(width);
// console.log(height);
// console.log(item1);
// console.log(item2);

// const rgb = [200, 255, 100];
// // const [red, green, blue] = rgb;
// // console.log(`Red: ${red}, green: ${green}, blue: ${blue}`)

// // const [red, ...colors] = rgb;
// // console.log(`Red: ${red}, colors: ${colors}`);

// // const [ , , blue] = rgb;
// // console.log(`Blue: ${blue}`);

// let arr = ['Bob', 'Nick'];
// let [firstName, secondName] = arr;
// console.log(firstName);
// console.log(secondName);
















































const numb = [1, 2, 3, 4, 5];
const sum = numb.reduce((acc, value) => acc + value, 0);
console.log(sum);


const twe = [
    {id: "01", likes: 15, tags: ["js", "react"] },
    {id: "02", likes: 1125, tags: ["js", "react"] },
    {id: "03", likes: 32, tags: ["js"] },
    {id: "04", likes: 135, tags: ["js", "react"] },
    {id: "05", likes: 115, tags: ["react"] },
]
const likes = twe.reduce((totallikes, tweet) => totallikes + tweet.likes, 0);
console.log(likes);
