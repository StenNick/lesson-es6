// let one = true;
// let two = false;

// function getSome(){
//     console.log('Condition TRUE');
// }

// function getFalse(){
//     console.log("Condition FALSE");
// }

// one ? getSome() : getFalse();

// let age = prompt('How are old?', 18);
// let messale = (age < 14) ? "малыш" : (age <= 18) ? "Проходи" : (age < 100) ? "Старик" : "нет такого возраста";
// console.log(messale);


// Logic operators
// console.log( true || true ); // true
// console.log( false || true ); // true
// console.log( true || false); // true
// console.log( false || false); // false

// var hour = 12,
//   isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) { // false, false, true
//   console.log( 'Офис до 10 или после 18 или в выходной закрыт' ); // true
// }

// console.log(false || false || true || false + ' множественная проверка true and false'); // true;

// console.log(false || false || 'word' || false);
// console.log(false || ' first true ' || ' second true ' || false || ' third true');

// var undef; // переменная не присвоена, т.е. равна undefined
// var zero = 0;
// var emptyStr = "";
// var msg = "Привет!";

// var result = undef || zero || emptyStr || msg || 0;

// console.log( result ); // выведет "Привет!" - первое значение, которое является true


// Operator &&

// var hour = 12,
//   minute = 30;

// if (hour == 12 && minute == 30) { // true && true
//   console.log( 'Время 12:30' );
// }

// console.log(1 && false && 'sting');
// console.log(1 && true && 'sting 2');


// var age = 50;
// if (!(age >= 14 && age <= 90)){
//   console.log(age + " age not = 14 and 90")
// };

// var number = 1;
// if (age < 14 || age > 90){
//   console.log(number + " number not = 14 and 90")
// };

// let a = 5;
// let b = 10;
// let c = 20;
// let res = ((a < b) && (100)); // 100, 1й аргумент равен true а второй числу (истине) значит тоже true
// let res2 = ((a > c) || (200)); // тут в 1ом случае false а во втором для ИЛИ будет истина и выведет число
// console.log(res2);
// console.log(typeof res2);

// let age = prompt('bla bla bla', 19);

// if((age >= 14 && age <= 90)){
//   console.log('Yes');
// } else {
//   console.log('no');
// }


// Преобразование примитивов к строкам, числам и логическим значениям

// let a = 42424;
// let b = false;
// console.log((String(a) + "  " + (String(b)))); // будут стркои 42424 и "false"
// console.log(typeof a + "  " + typeof b); // будут стркои 42424 и "false"


// let c = +'901212'; // краткая запись преобразования из строки в число
// let d = Number('1400'); // явно преобразуем строку в число
// console.log(c, d);

// console.log( +true ); // 1
// console.log( +false ); // 0


// Циклы 

// while (value){
//   // some code
// }

// let a = 5;
// while (a < 10){
//   a++;
//   console.log(a); // 6,7,8,9,10
// }

// // do {
// //   // тело цикла
// // } while (условие);

// let c = 10;
// do{
//   c++;
//   console.log(c);
// } while(c < 14);


// var i = 2;
// for(; i < 10; i++){
//   if(i % 2 == 0){
//     console.log(i);
//   }
// }
// console.log(i);


//  Конструктор SWITCH

// let a = 30;
// let b = 5;
// let res = a + b;

// switch (res){
//   case 30:
//   console.log('мало');
//   break;
//   case 35:
//   console.log('В точку!');
//   break;
//   case 40:
//   console.log('много');
//   break;
//   default:
//   console.log('ничего не верно!');
// }


//  let one = 2;
//  let two = 4;
//  function sumNumber(a,b) {
//    return a + b;
//  }

//  switch (10){
//   case sumNumber(1,4):
//   console.log('мало');
//   break;
//   case sumNumber(5,5):
//   console.log('В точку!!!');
//   break;
//   case sumNumber(5,7):
//   console.log('много');
//   break;
//   default:
//   console.log('ничего не верно!');
// }


// switch (browser) {
//   case 'IE':
//     alert( 'О, да у вас IE!' );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Да, и эти браузеры мы поддерживаем' );
//     break;

//   default:
//     alert( 'Мы надеемся, что и в вашем браузере все ок!' );
// }

// let browser = prompt('Your browser..','IE');  // перезапись с if... else от конструктора Switch
// if (browser == 'IE') {
//   console.log('You have IE!');
// } else if (browser != 'IE') {
//   console.log('We are support Chrome  Firefox....');
// } else {
//   console.log('Мы надеемся, что и в вашем браузере все ок!');
// }

// var a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


// let someString = prompt('Enter number', '');  // перезапись с Switch от if... else

// switch (someString) {
//   case '1':
//   console.log(someString + '  1');
//   break;
//   case '2':
//   console.log(someString + '  2');
//   break;
//   default:
//   console.log('ничего из этого');
// }


// Функции

// Аргументы по умолчанию

// function getArguments(text, name){
//   if (name == undefined){
//     // name = 'text not send'; // в случае если аргумент не присвоен (далее es6 это упростит)
//     name = name || 'text not send'; // Второй способ считает, что аргумент отсутствует, если передана пустая строка, 0, или вообще любое значение, которое в логическом контексте является false.
//   }
//   console.log(text + '  ' + name);
// }
// getArguments('Hello','Masha');
// getArguments('Nick');


// var five = 5, six = 6;
// function getSum(a,b){
//   return a + b;
//   console.log(five +six); // так не сработает, функция прекратила работу после RETURN 
// }
// getSum(2,6);
"use strict";