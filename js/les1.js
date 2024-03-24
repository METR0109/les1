//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const str = 'abcde';
// if (str.startsWith('a')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

// const str = 'abcde';
// str.startsWith('a') ? console.log('так') : console.log('ні');

//TODO: 2 ===================================
// Якщо ваше ім’я містить більше 4 букв і прізвище більше 5, то виведіть на екран число, яке дорівнює сумі букв імені і прізвища.
// Якщо умова не виконується - вивести “неможливо виконати умову”.
// Наприклад: “Віктор Сташко” Віктор - 6 літер, Сташко - 6 літер. Виводимо 12.
// Використовувати вбудований метод length.

// const firstName = 'Віктор';
// const lastName = 'Сташко';
// const totalLetters = firstName.length + lastName.length;

// if (firstName.length > 4 && lastName.length > 5) {
//   console.log(totalLetters);
// } else {
//   console.log('неможливо виконати умову');
// }

// const firstName = 'Віктор';
// const lastName = 'Сташко';
// const totalLetters = firstName.length + lastName.length;

// firstName.length > 4 && lastName.length > 5
//   ? console.log(totalLetters)
//   : console.log('неможливо виконати умову');

//TODO: 3 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const num = prompt('Enter number');
// alert(num);

// if (num >= 55 && num <= 99) {
//   alert('Число потрапляє в діапазон');
// } else {
//   alert('Число не потрапляє в діапазон');
// }

// const num = prompt('Enter number');
// alert(num);
// num >= 55 && num <= 99
//   ? alert('Число потрапляє в діапазон')
//   : alert('Число не потрапляє в діапазон');

//TODO: 4 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const maksymAge = 61;
// if (maksymAge >= 0 && maksymAge <= 16) {
//   console.log('діти');
// } else if (maksymAge > 16 && maksymAge <= 60) {
//   console.log('дорослі');
// } else if (maksymAge >= 61 && maksymAge <= 100) {
//   console.log('пенсіонери');
// } else {
//   console.log('eror');
// }

//TODO: 5 ===================================
//* Конструкція switch
// Запитай користувача у модальному вікні, який з напоїв він бажає придбати - "Кава", "Чай" чи "Сік",
// та залежно від виду напою оголоси суму досплати.Використовувати switch.

// const drink = prompt('Choice drink').toLowerCase();

// function orderDrink(drinkName) {
//   let price;
//   switch (drinkName) {
//     case 'coffe':
//       price = 40;
//       break;

//     case 'tea':
//       price = 25;
//       break;

//     case 'joce':
//       price = 50;
//       break;

//     default:
//       alert('error');
//   }
//   return `Your order total ${price} UAH`;
// }

// alert(orderDrink(drink));

//* Цикл while and do while
// TODO: 6 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

// let number = Number(prompt('число більше 100'));
// console.log('r -> number', number);
// while (Number(number) <= 100 || number !== null) {
//   number = Number(prompt('число більше 100'));
// }

// let number = Number(prompt('число більше 100'));
// console.log('r -> number', number);
// do {
//   //   number = Number(prompt('число більше 100'));
//   if (number === null) {
//     alert('Cancel');
//     break;
//   }
//   number = prompt('число більше 100');
// } while (Number(number) <= 100);

// console.log('r -> number', number);

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 1;
// }

// do {
//   console.log('hello');
// } while (true);

//TODO: 7 ===================================
// Знайдіть число 49  у проміжку чисел від 1 до 100 та вийдіть з циклу.

// const targetNumber = 49;
// for (let i = 1; i <= 100; i += 1) {
//   console.log('r - >tatargetNumber', targetNumber);
//   break;
// }

//TODO: 8 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *****

// let star = '*';
// for (let i = 1; i <= 7; i += 1) {
//   console.log(star);
//   star += '*';
// }

//TODO: 9 ===================================
// Порахуйте суму чисел від 12 до 27

// const min = 12;
// const max = 27;
// let sum = 0;
// for (let i = min;)

//TODO: 10 ===================================
//Якщо число ділитися на 3 повертати fizz
//якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

// function checkNumber(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log('fizzbuzz');
//     } else if (i % 5 === 0) {
//       console.log('buzz');
//     } else if (i % 3 === 0) {
//       console.log('fizz');
//     } else {
//       console.log(i);
//     }
//   }
// }
// checkNumber(30);

// function checkNumber(num) {
//   for (let i = 1; i <= num; i++) {
//     let str = '';
//     if (i % 3 === 0) {
//       str += 'fizz';
//     }

//     if (i % 5 === 0) {
//       str += 'buzz';
//     }

//     console.log(str || i);
//   }
// }
// checkNumber(30);
