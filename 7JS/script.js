'use strict'
// const arr = [];

// const clients = ['Dod', 'Bob', 'Tom', 'Anna'];
// console.table(clients);

// console.log(clients[3]);

// clients[0] = 'Alex';
// clients[7] = 'Nick';
// console.table(clients);

// console.log(clients.length);
// clients.length = 7;
// console.log(clients);

// clients.length = 2;
// console.log(clients);




// const clients = ['Dod', 'Bob', 'Tom', 'Anna'];
// for (let i=0; i < clients.length; i++){
//     console.log('Loggin clients:', clients[i])
// }


// const numbers = [3, 44, 53, 356, 345, 23, 5, 24, 64, 76];
// const threshold = 50;
// for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] > threshold){
//         continue;
//     }
//     console.log(`Число більше ${threshold}: ${numbers[i]}`);
// }



const numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
console.log(numbers[0][1])

const logins = ['Anna', 'Tom', 'Bob'];
const nameLogin = 'Tomi';
let message = 'Користувача не знайдено';
for(let i = 0; i < logins.length; i++){
    if(logins[i] === nameLogin){

        message = `Користувач ${nameLogin} знайдено`;
        break;
    }

}
console.log(message);
