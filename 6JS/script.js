'use strict'
// while цикл з передумовою

// let counter = 0;
// while(counter < 20){
//     console.log('counter: ', counter);
//     counter += 1;
// }

// let clientCount = 12;
// const maxClient = 25;
// while(clientCount <= maxClient) {
//     console.log('Кількість клієнтів: ', clientCount);
//     clientCount += 1;
// }

// const max = 10;
// for (let i = 0; i < max; i += 1){
//     console.log(i)
// }

// const target = 5;
// let sum = 0;
// for(let i = 0; i <= target; i++){
//     sum += i
// }
// console.log(sum)

// const max = 10;
// for(let i = 0; i < max; i++){
//     console.log(`${max} % ${i} = `, max % i)
// }

// for(let i = 0; i < 10; i++){
//     if (i === 5) {
//         break;
//     }
//     console.log(i)
// }

// const num = 10;
// for(let i = 0; i <= num; i++){
//     if(i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }

// for(let i = 0; i < 5; i++) {
//     console.log(i);
// }

// let num = 0;
// while(num <= 5) {
//     console.log(num);
//     num += 1;
// }

// let num = 1;
// do {
//     console.log(num);
//     num++
// } while (num <= 5);

let num;
do {
    num = prompt('Введіть число, більше за 100' , '');

} while (num !== null && (Number(num) <= 100 || isNaN(num)));