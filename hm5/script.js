'use strict'
let drink = "Чай";

switch (drink) {
    case "Кава":
        console.log("Ви вибрали каву.");
        break;
    case "Чай":
        console.log("Ви вибрали чай.");
        break;
    case "Сік":
        console.log("Ви вибрали сік.");
        break;
    default:
        console.log("Невідомий вибір.");
}

let day = "понеділок";

if (day === "субота" || day === "неділя") {
    console.log("Це вихідний день.");
} else {
    console.log("Це робочий день.");
}

let month = 3;

if (month >= 3 && month <= 5) {
    console.log("Це весна.");
} else if (month >= 6 && month <= 8) {
    console.log("Це літо.");
} else if (month >= 9 && month <= 11) {
    console.log("Це осінь.");
} else if (month === 12 || month === 1 || month === 2) {
    console.log("Це зима.");
} else {
    console.log("Невірний номер місяця.");
}

let color = "червоний";

switch (color) {
    case "червоний":
        console.log("Стоп");
        break;
    case "жовтий":
        console.log("Чекати");
        break;
    case "зелений":
        console.log("Йти");
        break;
    default:
        console.log("Невідомий колір.");
}

let num1 = 10;
let num2 = 0;
let operator = "/";

switch (operator) {
    case "+":
        console.log("Результат: " + (num1 + num2));
        break;
    case "-":
        console.log("Результат: " + (num1 - num2));
        break;
    case "*":
        console.log("Результат: " + (num1 * num2));
        break;
    case "/":
        if (num2 === 0) {
            console.log("Помилка: ділення на нуль.");
        } else {
            console.log("Результат: " + (num1 / num2));
        }
        break;
    default:
        console.log("Невірний оператор.");
}