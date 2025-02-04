'use strict'

// function calculateAliceMoney(a, b, c, d) {
//     return a + b + c - d;
// }

// // Приклад використання:
// const a = parseInt(prompt("Введіть кількість гривень у Аліси:"));
// const b = parseInt(prompt("Введіть суму, яку винен Петрик:"));
// const c = parseInt(prompt("Введіть суму, яку винна Світлана:"));
// const d = parseInt(prompt("Введіть суму, яку винна Аліса Ромчику:"));

// const result = calculateAliceMoney(a, b, c, d);
// console.log("В Аліси буде:", result, "гривень"); //Борги аліси








// function didPetroPassExam(a, b, x, y) {
//     const easyPoints = 1;
//     const hardPoints = 2;
    
//     const maxPoints = a * easyPoints + b * hardPoints;
//     const scoredPoints = (a - x) * easyPoints + (b - y) * hardPoints;
    
//     return (scoredPoints / maxPoints) * 100 > 51 ? "YES" : "NO";
// }

// // Приклад використання:
// const a = parseInt(prompt("Введіть кількість легких задач:"));
// const b = parseInt(prompt("Введіть кількість складних задач:"));
// const x = parseInt(prompt("Введіть кількість нерозв'язаних легких задач:"));
// const y = parseInt(prompt("Введіть кількість нерозв'язаних складних задач:"));

// const result = didPetroPassExam(a, b, x, y);
// console.log(result); //Петрик та екзамени










// function calculatePenalty(N, M, roads, A) {
//     const adjacencyList = Array.from({ length: N + 1 }, () => []);
    
//     for (const [X, Y] of roads) {
//         adjacencyList[X].push(Y);
//         adjacencyList[Y].push(X);
//     }
    
//     const queue = [[A, 0]];
//     const visited = new Set();
//     visited.add(A);
    
//     while (queue.length > 0) {
//         const [current, distance] = queue.shift();
        
//         if (current === 1) {
//             return distance * 1000;
//         }
        
//         for (const neighbor of adjacencyList[current]) {
//             if (!visited.has(neighbor)) {
//                 visited.add(neighbor);
//                 queue.push([neighbor, distance + 1]);
//             }
//         }
//     }
    
//     return -1; // У разі, якщо шлях до столиці не існує
// }

// // Приклад використання:
// const N = parseInt(prompt("Введіть кількість міст:"));
// const M = parseInt(prompt("Введіть кількість доріг:"));
// let roads = [];
// for (let i = 0; i < M; i++) {
//     const X = parseInt(prompt(`Введіть початкове місто дороги ${i + 1}:`));
//     const Y = parseInt(prompt(`Введіть кінцеве місто дороги ${i + 1}:`));
//     roads.push([X, Y]);
// }
// const A = parseInt(prompt("Введіть місто, в якому живе Степан:"));

// const result = calculatePenalty(N, M, roads, A);
// console.log(result); //Штрафи
