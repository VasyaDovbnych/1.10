'use strict'
/*
 * Array.prototype.filter()
 * - Поелементо перебирає оригінальний масив
 * - Повертає новий масив (з елементами або пустий)
 * - Додає в повертаємий масив елементи які задовольняють умови коллбек-функції
 *    - якщо коллбек повернув true елемент додається в масив, що повертається
 *    - якщо коллбек повернув false елемент НЕ додається в масив, що повертається
*/
/*
 * Array.prototype.find()
 * - Поелементо перебирає оригінальний масив
 * - Повертає перший елемент який задовольняє умову пошуку або undefined
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];
const numbers = [5, 10, 15, 20, 25];
const filtredNumbers = numbers.filter(function (number){});

// Отримуємо масив всіх гравців онлайн
const isOnline = players.filter(function name(player) {
    return player.online
});
console.log(isOnline);

// Отримуємо масив всіх гравців офлайн
const isOnFline = players.filter(function name(player) {
    return !player.online
});
console.log(isOnFline);

// Отримуємо масив всіх хардкорних гравців з часом більше 250
const hardPlayers = players.filter(function(hardPlayers){
    return hardPlayers.timePlayed >= 200;
});
console.log(hardPlayers);

// Шукаємо гравця по id
const playerId = 'player-1'
const findPlayer = players.find(function(player){
    return player.id === playerId
});
console.log(findPlayer);

// Шукаємо гравця по імені
const playerName = 'Mango';
const namePlayer = players.find(function(player){
    return player.name === playerName
});
console.log(namePlayer);
