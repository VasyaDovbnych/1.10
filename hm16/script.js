'use strict'
class User {
    constructor({ name, age, followers }) {
      this.name = name;
      this.age = age;
      this.followers = followers;
    }
  
    getInfo() {
      console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}
  
const mango = new User({ name: 'Mango', age: 2, followers: 20 });
mango.getInfo(); 
  
const poly = new User({ name: 'Poly', age: 3, followers: 17 });
poly.getInfo(); 
  
  // Завдання 3
class Storage {
    constructor(items) {
      this.items = items;
    }
  
    getItems() {
      return this.items;
    }
  
    addItem(item) {
      this.items.push(item);
    }
  
    removeItem(item) {
      this.items = this.items.filter(existingItem => existingItem !== item);
    }
}
  
const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);
  
console.table(storage.getItems());
  
storage.addItem('Дроїд');
console.table(storage.items);
  
storage.removeItem('Пролонгер');
console.table(storage.items);
  