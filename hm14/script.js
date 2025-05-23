'use strict'
const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Завдання 1
const upgradePlayer = function (players, playerIdToUpdate) {
    return players.map(player => {
      if (player.id === playerIdToUpdate) {
        player.timePlayed += 100;
      }
      return player;
    });
};
console.log(upgradePlayer(players, 'player-3'));
  
// Завдання 2
const changePlayers = players.map(function(player) {
    player.online = !player.online;
    return player;
});
console.log(changePlayers);
  