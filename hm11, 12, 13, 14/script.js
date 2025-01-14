'use strict'

// 11
// const bankAccount = {
//     ownerName: "Іван Іваненко",
//     accountNumber: "123456789",
//     balance: 1000,
    
//     deposit() {
//         const amount = parseFloat(prompt("Введіть суму для поповнення:"));
//         if (!isNaN(amount) && amount > 0) {
//             this.balance += amount;
//             alert(`Рахунок поповнено на ${amount} грн. Залишок: ${this.balance} грн.`);
//         } else {
//             alert("Неправильна сума.");
//         }
//     },
    
//     withdraw() {
//         const amount = parseFloat(prompt("Введіть суму для зняття:"));
//         if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
//             this.balance -= amount;
//             alert(`Знято ${amount} грн. Залишок: ${this.balance} грн.`);
//         } else if (amount > this.balance) {
//             alert("Недостатньо коштів на рахунку.");
//         } else {
//             alert("Неправильна сума.");
//         }
//     }
// };

// if (confirm("Хочете поповнити рахунок?")) {
//     bankAccount.deposit();
// } else if (confirm("Хочете зняти гроші з рахунку?")) {
//     bankAccount.withdraw();
// }








// const weather = {
//     temperature: 0,
//     humidity: 50,
//     windSpeed: 10,
    
//     isBelowZero() {
//         this.temperature = parseFloat(prompt("Введіть температуру (°C):"));
//         return this.temperature < 0;
//     }
// };

// if (weather.isBelowZero()) {
//     alert("Температура нижче 0 градусів Цельсія.");
// } else {
//     alert("Температура вище або рівна 0 градусів Цельсія.");
// }











// const user = {
//     name: "Анна",
//     email: "anna@example.com",
//     password: "securepassword",
    
//     login() {
//         const enteredEmail = prompt("Введіть email:");
//         const enteredPassword = prompt("Введіть пароль:");
        
//         if (enteredEmail === this.email && enteredPassword === this.password) {
//             alert("Вхід виконано успішно.");
//         } else {
//             alert("Неправильний email або пароль.");
//         }
//     }
// };

// user.login();





// const movie = {
//     title: "Інтерстеллар",
//     director: "Крістофер Нолан",
//     year: 2014,
//     rating: 8.6,
    
//     isHighRated() {
//         return this.rating > 8;
//     }
// };

// console.log(`Назва: ${movie.title}`);
// console.log(`Режисер: ${movie.director}`);
// console.log(`Рік: ${movie.year}`);
// console.log(`Рейтинг: ${movie.rating}`);

// if (movie.isHighRated()) {
//     console.log("Рейтинг фільму вище 8.");
// } else {
//     console.log("Рейтинг фільму 8 або нижче.");
// }



// 12


// const user = { 
//     name: 'Mango', 
//     age: 20, 
//     hobby: 'html', 
//     premium: true, 
//   };
  
//   user.mood = 'happy';
  
//   user.hobby = 'skydiving';
//   user.premium = false;
  
//   const keys = Object.keys(user);
//   for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }










// const countProps = function (obj) {
//     return Object.keys(obj).length;
// };
  
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 })); // 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
  







  
// const findBestEmployee = function (employees) {
//     let maxTasks = 0;
//     let bestEmployee = '';
    
//     for (const [employee, tasks] of Object.entries(employees)) {
//       if (tasks > maxTasks) {
//         maxTasks = tasks;
//         bestEmployee = employee;
//       }
//     }
    
//     return bestEmployee;
// };
  
// console.log(findBestEmployee({ ann: 29, david: 35, helen: 1, lorence: 99 })); // lorence
// console.log(findBestEmployee({ poly: 12, mango: 17, ajax: 4 })); // mango
// console.log(findBestEmployee({ lux: 147, david: 21, kiwi: 19, chelsy: 38 })); // lux








// const countTotalSalary = function (employees) {
//     let total = 0;
//     for (const salary of Object.values(employees)) {
//       total += salary;
//     }
//     return total;
// };
  
// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, lux: 50, chelsy: 150 })); // 400










// const getAllPropValues = function (arr, prop) {
//     const values = [];
//     for (const obj of arr) {
//       if (prop in obj) {
//         values.push(obj[prop]);
//       }
//     }
//     return values;
// };
  
//   const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
// ];
  
// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []









// const calculateTotalPrice = function (allProdcuts, productName) {
//     for (const product of allProdcuts) {
//       if (product.name === productName) {
//         return product.price * product.quantity;
//       }
//     }
//     return 0;
// };
  
// const products = [
//     { name: 'Радар', price: 1300, quantity: 4 },
//     { name: 'Сканер', price: 2700, quantity: 3 },
//     { name: 'Дроїд', price: 400, quantity: 7 },
//     { name: 'Захоплення', price: 1200, quantity: 2 },
// ];
  
// console.log(calculateTotalPrice(products, 'Радар')); // 5200
// console.log(calculateTotalPrice(products, 'Дроїд')); // 2800
  

// 13


// const user = { 
//     name: 'Mango', 
//     age: 20, 
//     hobby: 'html', 
//     premium: true, 
// };
  
// user.mood = 'happy';
// ({ hobby: user.hobby } = { hobby: 'skydiving' });
// ({ premium: user.premium } = { premium: false });
  
// const keys = Object.keys(user);
// for (const key of keys) {
//     console.log(`${key}: ${user[key]}`);
// }
  
  









// const Transaction = { 
//     DEPOSIT: 'deposit', 
//     WITHDRAW: 'withdraw', 
// };
  
// const account = { 
//     balance: 0, 
//     transactions: [], 
  
//     createTransaction(amount, type) {
//       return { id: this.transactions.length + 1, type, amount };
//     },
  
//     deposit(amount) {
//       this.balance += amount;
//       const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//       this.transactions.push(transaction);
//     },
  
//     withdraw(amount) {
//       if (amount > this.balance) {
//         console.log('Недостатньо коштів для зняття.');
//         return;
//       }
//       this.balance -= amount;
//       const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
//       this.transactions.push(transaction);
//     },
  
//     getBalance() {
//       return this.balance;
//     },
  
//     getTransactionDetails(id) {
//       return this.transactions.find(transaction => transaction.id === id);
//     },
  
//     getTransactionTotal(type) {
//       return this.transactions
//         .filter(transaction => transaction.type === type)
//         .reduce((total, { amount }) => total + amount, 0);
//     },
// };
  
// account.deposit(1000);
// account.withdraw(300);
// console.log('Поточний баланс:', account.getBalance());
// console.log('Деталі транзакції з ID 1:', account.getTransactionDetails(1));
// console.log('Загальна сума депозитів:', account.getTransactionTotal(Transaction.DEPOSIT));
// console.log('Загальна сума зняття:', account.getTransactionTotal(Transaction.WITHDRAW));
  
  

// 14