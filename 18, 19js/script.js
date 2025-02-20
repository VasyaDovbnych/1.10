'use strict'
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];



// const user = {
//     name: "Іван",
//     age: 25,
// };


// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

















class Car {
  constructor(model, price, color){
    this.model = model
    this.price = price
    this.color = color
  }
};
const car1 = new Car ({model:'Porsche Macan 2020', price:500000, color:'red'});
const car2 = new Car ({model:'Porsche Macan 2015', price:900000, color:'white'});
const car3 = new Car ({model:'Porsche Macan 2010', price:400000, color:'black'});
console.log(car1);
console.log(car2);
console.log(car3);