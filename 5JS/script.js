'use strict'
// let cost;
// const sub = 'premium';

// switch(sub){
//     case 'free':
//        cost - 0;
//        break;

//     case 'pro':
//         cost = 200;
//         break;

//     case 'premium':
//         cost = 400;
//         break;

//     default:
//         console.log('Такого виду підписки не існує');

// }
// console.log(cost);



let ago = 26;
let group;
switch(true){
    case(ago < 18):
    group = 'Не повнолітній';
    break;

    case(ago >= 18):
    group = 'Повнолітній';
    break;

    default:
        console.log('Неправильно вказаний вік');

}
console.log(group);


let lang = 'en';
let month;
switch(lang){
    case 'ua':
        month = 'Січень';
        break;
    
    case 'en':
        month = 'January';
        break;
    case 'fr':
        month = 'Janvier';
        break;
    default:
        month = 'Мова не знайдена';
}
console.log(month);




