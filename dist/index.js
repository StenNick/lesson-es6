'use strict';

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


// function getSum(){ 
//     let questionUserOne = prompt('Enter number', 5);
//     let questionUserTwo = prompt('Enter your number', 10);
//   return questionUserOne + questionUserTwo;
// }
// getSum();


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }  ПЕРЕПИСАТЬ ФУНКЦИЮ ИСПОЛЬЗУЯ ЛИБО ? ИЛИ ||


// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
// checkAge(21);
// function checkAge(age){
//     return (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(12);

// function min(){
//     let numberUser1 = prompt('Enter your number ', 2);
//     let numberUser2 = prompt('Your number', 8);
//     if (numberUser1 < numberUser2){
//         return numberUser1;
//     }
//     else {
//         return numberUser2;
//     }
// }
// min(); //получить наименьшее число


// Methods 

// let someWord = 'Here some word';
// console.log(someWord.length);

// let upperCaseWord = 'this word with uppercase';
// console.log(upperCaseWord.toUpperCase());


// let num = 12.345,
//     somenumber = 43.200;

// console.log(num.toFixed(2) + '   12.345');
// console.log(num.toFixed(0) + '   12.345');
// console.log(num.toFixed(4) + '   12.345');
// console.log(somenumber.toFixed(1) + '    43.200');

// let numOne = 12;
// let notNumber = Infinity;
// let nanNumber = NaN;
// console.log(isFinite(numOne));
// console.log(isFinite(notNumber));
// console.log(isFinite(nanNumber));


// let someNumber = '342.43',
//     secondnumber = '435';
//     console.log(+someNumber); // преобразовали к числу явно через знак +
//     console.log(+secondnumber);
// let stringNotNumber = '214what';
// console.log(+stringNotNumber); // NaN

// alert( +"  -12" ); // -12
// alert( +" \n34  \n" ); // 34, перевод строки \n является пробельным символом
// alert( +"" ); // 0, пустая строка становится нулем
// alert( +"1 2" ); // NaN, пробел посередине числа - ошибка

// let changeString = '545px';
// console.log(parseInt(changeString));
// let secondNumber = '1234.324.12';
// console.log(parseFloat(secondNumber));

// Проверка на число

// let number1 = prompt('Enter number', ' 20');
// let blabla = parseInt(number1);
// if (isNaN(blabla)){
//     console.log('It not a number - NaN');
// } else {
//     console.log(' It number');
// }


// function inNumeric(x) { // строгая проверка на число
//     return !isNaN(parseFloat(x)) && isFinite(x);
// }


// let myNumber = prompt('Enter number', '42');

// function getNumber() {
//     console.log(inNumeric(myNumber) + ' проверка');
// }
// getNumber();

// if (inNumeric(myNumber)) {
//     console.log(myNumber + ' number');
// } else {
//     console.log(myNumber + ' not a number');
// }


// function mathMakes() {
//     let num1 = 5.65;
//     let num2 = 5.65;
//     let num3 = 5.65;
//     console.log(Math.floor(num1));
//     console.log( Math.ceil(num2));
//     console.log(Math.round(num3));
// }
// mathMakes();

// let minNumber = 34.245;
// let maxNumber = 4.53677;

// console.log(Math.round(minNumber * 100) / 100 + '  number will be change from 34.245');
// console.log( Math.ceil(maxNumber * 100) / 100 + ' method Math.ceil,  number will be change from  4.53677');


// let localeString = 1234567890;
// let localNumber = '234765';
// let number = 2812;

// console.log(localeString.toLocaleString());
// console.log(localNumber.toLocaleString() + ' this String, not number');
// console.log(number.toLocaleString());


// function getAnswerUser() {
//     let questionUserOne = +prompt('Enter first number', 2);
//     let questionUserTwo = +prompt('Enter second number', 5);
//     alert(parseInt(questionUserOne) + parseInt(questionUserTwo));
//     return questionUserOne + questionUserTwo;
// }
// getAnswerUser();


// function getPrice() {
//     let price1 = +prompt("Enter price", "");
//     let price2 = +prompt('enter second price', '');
//     console.log( +(price1 + price2).toFixed(2));
// }
// getPrice();


// String

// console.log('Hello \nWorld!');

// console.log('My it\'s name \nNick');

// console.log('First'.charAt(2));

// let str = 'Крутое слово';
// str = str[0] + str[1] + str[2];
// console.log(str);


// IndexOf();

// let str = 'Widget with id some word, position';

// console.log(str.indexOf('id'));
// console.log(str.indexOf('rere'));
// console.log(str.indexOf('Widget'));
// console.log(str.indexOf('word'));
// console.log(str.indexOf('position'));


// let str = 'I\'m long string';

// console.log(str.substring(0, 3)); // i'm 
// console.log(str.substring(2)); // m long string
// console.log(str.substring(4, 6)); // lo


// Object or assotian array

// let propertyObject = {

//     name: 'Stenli',
//     age: '24',
//     someProp: 'Delete me'

// };
// console.log(propertyObject.name + " " + propertyObject.age);
// delete propertyObject.someProp;
// console.log(propertyObject.someProp);

// if ('name' in propertyObject) {
//     console.log(' good :) ')
// }

// let user = {};
// user['name'] = 'Вася';
// user['surename'] = 'Петров';
// user['name'] = 'Сергей';
// delete user.name;
// console.log(user.name);

// let user2 = {
//     name: 'Вася',
//     surname: 'Петров'
// };

// user2.name = 'Сергей';
// console.log(user2.name);

// delete user2.name;
// console.log(user2.name);

// let someObject = {
//     name: 'Shon',
//     age: 24,
//     job: 'Developer'
// };
// let counter = 0;
// for( let keyObj in someObject ) {
//     counter++;
//     console.log('Key ' + keyObj + " " +  someObject[keyObj] + ' количество свойств ' + counter);
// }

// let codesCounters = {
//     '+7' : 'Russia',
//     '+38' : 'Ukraine',
//     '+1' : 'USA'
// };

// for (let key in codesCounters) {
//     let value = codesCounters[key];
//     key = +key;
//     console.log(key + ":" + value);
// }


// function checkPropInObj(value) {
//     for (let key in value) {
//             return false;
//     } 
//     return true;
// }

// let UserProp = {};
// checkPropInObj(UserProp);
// UserProp['name'] = 'Mike';
// checkPropInObj(UserProp);


// var salaries = {
//   "Вася": 100,
//   "Петя": 300,
//   "Даша": 250
// };

// let counter = 0;
// for (var key in salaries) {
//      counter += salaries[key];
// }
// console.log(counter); // сумма всех свойств

// var max = 0;
// var maxName = "";
// for (var name in salaries) {
//   if (max < salaries[name]) {
//     max = salaries[name];
//     maxName = name;
//   }
// }

// console.log( maxName || "нет сотрудников" );


// Для проверки на число используйте функцию:

// function isNumeric(n) {
//   return !isNaN(parseFloat(n)) && isFinite(n)
// }


// let menu = {
//     width: '500',
//     height: '200',
//     title: 'Menu'
// };

// function multiplyNumeric(value){
//     for (var key in value) {
//         if(isNumeric(value[key])) {
//             value[key] *= 2;
//         }
//     }
// } // умножаем свойства объекта на 2

// multiplyNumeric(menu);

// console.log(menu.width + " " + menu.height);


// Links with Object's


// let userName = {
//     name: 'Ivan',
//     lastName: 'Petrov'
// };

// let anotherUser = userName; // copy link for userName, not object.
// anotherUser.lastName = 'Alekseev';

// for (var key in userName) {
//     console.log(key + " " + userName[key]);
// }

// for (var key in anotherUser) {
//     console.log(key + ": " + anotherUser[key]);
// }


// let nameIvan = {
//     name: 'Ivan'
// };

// let cloneObj = {};

// for (let key in nameIvan) {
//     cloneObj[key] = nameIvan[key]; // клонировали Объект Иван в  другой объект
// }

// console.log( nameIvan.name = 'Grisha');
// console.log(cloneObj.name);


// let elem = document.documentElement.childNodes;
// [].forEach.call(elem, function(el){
//     console.log(el);
// }); // выдаст массив всех DOM элементов на странице в виде списка массива


// for(let i = 0; i < document.body.children.length; i++){
//     console.log(document.body.children[i]);
// }


// let parentElem = document.getElementById('parentElem');
// let childElem = parentElem.firstElementChild;
// let childParent = document.getElementsByClassName('child');
// console.log(parentElem, childElem);
// console.log('this is an element of type' + parentElem.nodeType);
// console.log('this is inner html element ' + parentElem.innerHTML.length + ' length array');
// console.log(childParent.innerHTML);

// function changeColor(){
//     document.body.style.background = '#333';
// }


// const coffeButton = document.querySelectorAll('.coffeButton');
// // coffeButton.onclick = function() {
// //     document.body.style.background = '#80c7f7';
// // }
// coffeButton.forEach(function(ev){
//     ev.onclick = changeColor; // пройдемся по массиву и назначим каждой кнопке эту функцию
// })

// const lalaBut = document.querySelector('.changeText');

// function replaceText(){
//     lalaBut.innerHTML = 'new text';
// }
// lalaBut.addEventListener('click', replaceText);


// let colorBody = document.querySelector('.changeColorBody');
// colorBody.onclick = function(ev) {
//    document.body.style.background = '#92dbc4';
// }

// let btnElem = document.querySelector('.btn');
// console.log(btnElem.closest('button').className);


// console.log(document.body);

// console.log(document.body instanceof Object);


// document.body.myData = {
//     name: 'Петр',
//     familyName: 'Петрович'
//   };

//   console.log( document.body.myData.name ); // Петр


//   let attrElem = document.querySelector('.changeColor');
//   console.log(attrElem.getAttribute('about')); // получаем имя аттрибута из html дерева
//   attrElem.setAttribute('fuck', 'new element!'); // меняем старый аттрибут на fuck, и даем ему свойство - new element  (fuck='new element')
//   console.log(attrElem.getAttribute('fuck'));


//   let link = document.querySelector('.link');
//   console.log(link.getAttribute('href'));
//   link.setAttribute('href','https://www.yandex.ru/');
//   console.log(link.getAttribute('href'));

//   let changeClass = document.querySelector('.changeRadius');
// //   changeClass.onclick = function() {
// //       this.className = 'blueButton';
// //   }


// //   console.log(changeClass.classList.contains('changeRadius')); // проверяет наличие класса у элемента

//  changeClass.classList.toggle('blueButton');


//  let attrDiv = document.querySelector('.car');
//  console.log(attrDiv.getAttribute('data-ng-blur'));

//  let widgetElement = document.getElementById('widget');
//  console.log(widgetElement);
//  console.log(widgetElement.getAttribute('data-widget-name'));


//  const outerLink = document.querySelectorAll('a');
// for (var item = 0; item < outerLink.length; item++) {
//     let a = outerLink[item];
//     let href = a.getAttribute('href');
//     if (!href) continue;
//     if (href.indexOf('://') == -1) continue;
//     if (!href.indexOf('http://') === 0 || !href.indexOf('ftp://')) continue;
//     a.classList.add('external');
// }


// let cars = ['bmw', 'mercedes', 'lada', 'nissan'];

// for (var i = 0; i < cars.length; i++) {
//     let itemCar = cars[i];
//     let emptyArr = [];
//     let a = ' Cool car';
//     emptyArr.push(itemCar + a);
//     console.log(emptyArr);
// }


// let parentUl = document.querySelector('.parent'); // родительский блок
// let childLi = document.querySelector('.childUl'); // дочерний элемент
// var innerChild = parentUl.contains(childLi); // проверяем есть ли у родителя элемент li
// console.log(innerChild); // true


// let parentBlock = document.querySelector('.container');
// let childBlock = document.querySelector('.second');
// let nextElem = document.querySelector('.third');
// let result = parentBlock.contains(childBlock);

// if (result) {
//   childBlock.style.border = "2px solid red";
// }


// console.log(parBlock);


// let newElem = document.createElement('div');

// let someText = document.createTextNode('Welcome on my Page!');
// newElem.className = 'alert alert-succes';
// newElem.innerHTML = '<strong>Yeah!</strong> Yor read it message';


// subLi.appendChild(newElem);

// let newLiElement = document.createElement('li');
// newLiElement.innerHTML = 'Java Script!';

// let someOne = document.createElement('li');
// someOne.innerHTML = 'new element here';


// let list = document.querySelector('.list');
// list.insertBefore(newLiElement, list.children[2]); // вставили новый ЛИ элемент перед 2м индексом (элементом в списке)


// list.insertBefore(someOne, list.children[0]);


// let empt = document.querySelector('.emptyElement');
// empt.insertBefore(newLiElement, empt.firstChild); // добавили элемент в начало списка, даже если он пустой, он встанет тудаlet compareElement = nextElem.compareDocumentPosition(childBlock);
// console.log(compareElement);

// let subLi = document.querySelector('.subElem');
// let parBlock = subLi.compareDocumentPosition(parentBlock);


// КЛОНИРОВАНИЕ УЗЛОВ cloneNode

// let alertMessage = document.querySelector('.alert');
// let newAlert = document.createElement('li');
// newAlert.className = ' danger';
// newAlert.innerHTML = ' DANGER! '; // создали новый элементо/узел, дали ему текст


// alertMessage.appendChild(newAlert);

// let cloneAlert = newAlert.cloneNode(true); // клонируем новый элемент и даем новый текстовый узел
// cloneAlert.innerHTML = 'Homer Simpson';

// alertMessage.insertBefore(cloneAlert, alertMessage.firstChild); // вставим в самое начало наш КЛОНИРОВАННЫЙ узел


// let numbresUl = document.querySelector('.numbres');

// let subelements = numbresUl.getElementsByTagName('li');
// for (var i = 0; i < subelements.length; i++) {
//     console.log(subelements[i]);
//     numbresUl.insertBefore(cloneAlert, subelements[2]);
//     let numberThree = subelements[3];
//     numberThree.style.background = '#5cb6f2';
//     let lastElement = subelements.length - 1;
//     numberThree.onclick = function(){
//         // numbresUl.removeChild(subelements[0]); // удаляем элемент с момщью removeChild
//         this.remove(lastElement);
//     }

// }

// let textMess = document.createTextNode('Hidden block');
// let hiddenBlock = document.querySelector('.hiddenBlock');
// hiddenBlock.appendChild(textMess);
// setTimeout(() => {
//    document.body.removeChild(hiddenBlock); //  удалим блок спустя 3 секунды
// }, 3000);


// let colorBlock = document.querySelector('.colorBlock');

// function changeColor() {
//     colorBlock.classList.toggle('red-block');
// }


// let ulElement = document.querySelectorAll('ul');

// function getAllUl() {
//     for (let i = 0; i < ulElement.length; i++) {
//         // console.log(ulElement[i]);
//         ulElement[i].style.background = 'lightblue';
//         let parrentUl = ulElement[2];
//         // console.log(parrentUl);
//         let liChild = parrentUl.getElementsByTagName('li');
//         // console.log(liChild);
//         for (let li = 0; li < liChild.length; li++) {
//             // console.log(liChild[li]);
//             let textNode = document.textContent = 'Hello!';
//             liChild[2].innerHTML = textNode;
//             liChild[2].style.background = 'coral';
//             liChild[2].onclick = function(){
//                let redBlock = document.createElement('div');
//                 redBlock.className = 'red-block';
//                 let alertMessage = redBlock.textContent = 'Внимание!';
//                 redBlock.innerHTML = alertMessage;
//                 this.appendChild(redBlock);

//             }
//         }
//     }
// }

// getAllUl();


// const bigDiv = document.createElement('div');
// for (let i = 0; i < bigDiv.length; i++ ) {
//     bigDiv[i].appendChild(span);
//     document.body.appendChild(bigDiv);
// }


// const mainElement = document.querySelectorAll('ul')[0];
// let  childElementOne = mainElement.children[0];

// childElementOne.style.background = '#b3dffc';
// childElementOne.style.color = '#333';

// let one = childElementOne.insertAdjacentHTML('beforeBegin', '<li class="before">перед элементом  beforeBegin  </li>');
// // найдем самый первый UL элемент из всех списков, найдем его первый дочерний элемент (0), и вставим ПЕРЕД ним множество новых li с чем либо


// childElementOne.insertAdjacentHTML('afterBegin', '<li class="before-middle">в самое начало элемента  afterBegin </li>');
// // нашли 1й элемент, и вставили перед ним что либо

// childElementOne.insertAdjacentHTML('beforeEnd', '<li class="after-middle">в конец  элемента  beforeEnd </li>');


// childElementOne.insertAdjacentHTML('afterEnd', '<li class="after-end">после элемента  afterEnd </li>');

// let parrent = document.querySelector('#parrent');


// let subElem = document.createElement('div');
// subElem.className = 'sub-block';
// subElem.textContent = 'append method';
// let fragment = document.createDocumentFragment(subElem);

// console.log(fragment);
// parrent.appendChild(fragment);

// let preElement = document.createElement('div');
// preElement.className = 'pre-block';
// preElement.textContent = 'prepend method';

// let afterElement = document.createElement('div');
// afterElement.className = 'after-element';
// afterElement.textContent = 'after element';

// let beforeElement = document.createElement('div');
// beforeElement.className = 'before-element';
// beforeElement.textContent = 'before element';

// let replaceElement = document.createElement('div');
// replaceElement.className = 'replace-element';
// replaceElement.textContent = ' I NEW ELEMENT ';


// parrent.append(subElem);
// parrent.prepend(preElement);

// parrent.before(beforeElement);
// parrent.after(afterElement);


// let bigBlock = document.querySelector('.big-block');
// let paragraph = bigBlock.querySelectorAll('p')[3];
// // console.log(bigBlock.clientWidth);
// // console.log(getComputedStyle(bigBlock).width + ' comuted style width');

// let innerBlock = document.querySelector('.inner-block');


// var scrollHeight = Math.max(
//     document.body.scrollHeight, document.documentElement.scrollHeight,
//     document.body.offsetHeight, document.documentElement.offsetHeight,
//     document.body.clientHeight, document.documentElement.clientHeight
//   );

//   console.log( 'Высота с учетом прокрутки: ' + scrollHeight ); // Надёжно определить размер страницы с учетом прокрутки можно, взяв максимум из нескольких свойств:

//   console.log( 'Текущая прокрутка сверху: ' + window.pageYOffset );
//   console.log(document.documentElement.scrollTop + ' scroll'); // Текущая прокрутка сверху:

//   parrent.onclick = function() {
//     window.scrollTo(0, 100); // при нажатии на элемент вернет окно на заданую высоту от начала экрана
// }

// innerBlock.onclick = function() {
//    this.scrollIntoView(true);
//    console.log(this.getBoundingClientRect());
// }


// Итого

// Размеры:

// Для получения размеров видимой части окна: document.documentElement.clientWidth/Height

// Для получения размеров страницы с учётом прокрутки:

// var scrollHeight = Math.max(
//   document.body.scrollHeight, document.documentElement.scrollHeight,
//   document.body.offsetHeight, document.documentElement.offsetHeight,
//   document.body.clientHeight, document.documentElement.clientHeight
// );


// paragraph.style.border = '6px solid red';
// console.log(paragraph.clientHeight);


// let paddingBlock,
//     borderBlock,
//     innerWidth,
//     scrollBar;

//     borderBlock = bigBlock.clientLeft;
//     scrollBar = bigBlock.scrollTop;
//     innerWidth = bigBlock.clientWidth;
//     console.log(borderBlock + scrollBar + innerWidth);

// console.log(bigBlock.clientHeight + ' высота контента clientHeight');
// console.log(bigBlock.clientWidth +  ' ширина контента clientWidth');
// console.log(bigBlock.clientTop +    ' высота рамки блока clientTop');
// console.log(bigBlock.clientLeft +   ' ширина рамки блока clientLeft');
// console.log(bigBlock.offsetTop + ' высота элемента от начала страницы или род. элемента');
// console.log(bigBlock.offsetLeft + ' расстояние от левого края страницы или род элемента');
// console.log(bigBlock.offsetWidth +   ' внешняя ширина элемента, ширина блока в ксс 450');
// console.log(bigBlock.offsetHeight +   ' внешняя высота элемента');
// console.log(bigBlock.scrollHeight +   ' скролл элемента');
// console.log(bigBlock.scrollTop +   ' скролл внешнего размера элемента');


// let innerBlock = document.querySelector('.inner-block');

// console.log(innerBlock.offsetTop + ' внешняя высота от род блока');
// console.log(innerBlock.offsetLeft + ' внешний отступ от род блока');

// console.log(innerBlock.offsetHeight + ' высота блока включая рамки');
// console.log(innerBlock.offsetWidth + ' ширина блока включая рамки');
// console.log(innerBlock.clientHeight + ' внутреняя высота блока');


// getBoundingClientRect()   Координаты в окне


// top – Y-координата верхней границы элемента,
// left – X-координата левой границы,
// right – X-координата правой границы,
// bottom – Y-координата нижней границы.


// let rect = document.querySelector('.rect-block');
// console.log(rect.getBoundingClientRect());

// rect.onclick = function () {

//     console.log(this.getBoundingClientRect())


// }


// function getBlock() {
//     let heightRect = rect.clientHeight;
//     let bodyHeight = pageYOffset;
//     console.log(bodyHeight + ' body ');
//     console.log(heightRect + ' rect');
//     let topY = heightRect + pageYOffset;
//     console.log(topY);
//     if (bodyHeight <= topY) {
//         rect.style.background = 'red';
//     }
// }
// getBlock();


// function getCoords(elem) { // кроме IE8-
//     var box = elem.getBoundingClientRect();

//     return {
//       top: box.top + pageYOffset,
//       left: box.left + pageXOffset
//     };

//   }

//   console.log(getCoords(rect));


// function getDocumentScroll() {
//      var scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//     );
//     return {
//       top: pageYOffset,
//       bottom: pageYOffset + document.documentElement.clientHeight,
//       height: scrollHeight
//     };
//   }
// console.log(  getDocumentScroll());


// let bot = rect.getBoundingClientRect();
// let resultCoords = bot.bottom;
// console.log(resultCoords);

// // window.onscroll = function() {
// //     var scrolled = window.pageYOffset || document.documentElement.scrollTop; // узнали сколько прокрутили в PX страницу
// //    console.log(scrolled + ' px ' + resultCoords);
// //    if (scrolled > resultCoords) {
// //        rect.className ='fixed';
// //    } else {
// //        rect.classList.remove('fixed');
// //        rect.className = 'rect-block';
// //    }
// //   }

// function makeRed(elem) {
//     this.classList.toggle('shadow');
// }


// bigBlock.addEventListener('click', makeRed);

// console.log(rect.getAttribute('data-ng-app'));


// let containerBlock = document.querySelectorAll('#messages-container .remove-button');
// for (let item = 0; item < containerBlock.length; item++) {
//     console.log(containerBlock[item]);
//     let buttons = containerBlock[item];

//     buttons.onclick = function() {
//         let el = this.parentNode;
//         el.parentNode.removeChild(el);
//     }
// }


// let down = document.querySelector('.down');
// let heightParrent = parrent.getBoundingClientRect();


// function scrollWin() {
//     window.scrollTo(0, heightParrent.top); // перейти к верхней границе элемента
// }

// down.addEventListener('click', scrollWin); // при нажатии на кнопку down мы переходи к элементу в самом низу, к его верхней границе


// window  ONSCROLL - ПОКАЗЫВАЕТ СКОЛЬКО БЫЛО ПРОКРУЧЕННО ПИКСЛЕЙ НА ЭЛЕМЕНТЕ !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


// function makeFixed() {
//     let relativeBlock = document.querySelector('.barSide');
//     let toPoint = relativeBlock.getBoundingClientRect().top + window.pageYOffset;
//     window.onscroll = function() {
//         var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//         if (scrolled >= toPoint && relativeBlock.classList.contains('barSide')) {
//             relativeBlock.classList.remove('barSide');
//             relativeBlock.className = 'fixedBlock';
//         } else if (scrolled <= toPoint && relativeBlock.classList.contains('fixedBlock')) {
//             relativeBlock.classList.remove('fixedBlock');
//             relativeBlock.className = 'barSide';
//         }
//     }
// }
// makeFixed(); // создали блок, который прилипает если высотра страницы больше или равна верхней точке рекламного блока


// window.onscroll = function() {
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop; // узнали сколько прокрутили в PX страницу
//    console.log(scrolled + ' px ');
// }

// узнаем по каком элементу был Клик

// function getTypeEvent() {
//     let sub = document.querySelector('.sub-inner');
//     sub.onclick = function(event){
//         console.log(event.type + ' on ' + event.currentTarget); //  click on [object HTMLDivElement]
//     }
//     let clickDoc = document.documentElement;
//     clickDoc.onclick = function(ev) {
//         console.log(ev.clientX + ' ' + ev.clientY); // узнаем координаты документа при клике
//     }
// }
// getTypeEvent();


// function changeColor(e) {
// let external = document.querySelector('.external'); // найдем родителя
//     external.onclick = function(event) {
//         console.log(event.type + ' ' + event.target.tagName); // сможем найти все вложенные элементы (дочерние)
//     }

//    // узнаем по какому элементу был клик или событие

// }


// let messBox = document.getElementById('messages-container'); // нашли элемент

// messBox.onclick = function(event) {

//     console.log('на что кликнули ' + event.target.tagName + ' this = ' + this.tagName); // узнали на что нажали, и какой родитель у элементов
// }


var main = document.querySelector('.main');
var subEl = document.querySelectorAll('.sub');
var spanText = document.querySelectorAll('.span-text');

function getMain() {
    main.addEventListener('click', function (event) {
        console.log(this.tagName);
        if (event.target == this) {
            event.target.classList.toggle('yellowBlock');
        }
    });
}

function redBlock() {
    for (var i = 0; i < spanText.length; i++) {
        var allSpan = spanText[i];
        allSpan.addEventListener('click', function (event) {
            if (!this == event.target) return;
            if (this == event.target) {
                console.log(event.target);
                event.target.classList.toggle('someColor');
            }
        });
    }
}

function blueBlock() {
    var _loop = function _loop(a) {
        var allSub = subEl[a];
        allSub.addEventListener('click', function (event) {
            if (!allSub) return;
            if (this == event.target) {
                console.log(event.target);
                event.target.style.background = 'lightblue';
            }
        });
    };

    for (var a = 0; a < subEl.length; a++) {
        _loop(a);
    }
}

function init() {
    blueBlock();
    redBlock();
    getMain();
}
init();

var txt = document.querySelector('.text');

// function Menu(option) {

//     let elem = option.elem;

//     elem.onclick = function(event) {

//         if (event.target.closest('.title')) {
//             elem.classList.toggle('open');
//         }
//     }
// }

// var menu = new Menu({
//     elem: txt
//   });


function getChildren() {
    var targetElem = document.querySelectorAll('.target'); // мы нашли все элементы - детей

    var _loop2 = function _loop2(i) {
        // узнали сколько их и применили к ним обработчик событий для каждого
        targetElem[i].onclick = function (event) {
            if (event.target.closest('.parent')) {
                // если событие на котором произошло действие имеет ближайший тег или класс, то применим к нему...
                targetElem[i].classList.toggle('changeColor'); // если все ок, то для каждого Ребенка будет примененно правило
            }
        };
    };

    for (var i = 0; i < targetElem.length; i++) {
        _loop2(i);
    }
}getChildren();

var outerBlock = document.querySelector('.outer-block');
var subBlock = document.querySelectorAll('.sub-block');
var childrenBlock = document.querySelectorAll('.children-block');

function ChangeElement(options) {
    var elem = options.elem;
    elem.onclick = function (event) {
        if (event.target.closest('body')) {
            toggleElement();
            console.log(this.tagName);
        }
    };
    function toggleElement() {

        elem.classList.toggle('someColor');
    }
    this.toggleElement = toggleElement;
}

// function getAllElements(element){
//     if (outerBlock.hasChildNodes(subBlock) && outerBlock.hasChildNodes(childrenBlock)) {
//     for(let i = 0; i < element.length; i++) {
//         console.log(element[i]);
//         ChangeElement( element[i]);
//      }
//     }
// }

// getAllElements(subBlock);
// getAllElements(childrenBlock);


var change = new ChangeElement({
    elem: outerBlock
});
change.toggleElement();

var containerList = document.createElement('div');
containerList.className = 'container-list';

var menu = new Menu({
    title: 'Search',
    items: ['Rambler', 'Yandex', 'Google', 'Yahoo']
});

var elem = menu.getElem();
document.body.appendChild(elem);

// function Menu(option) {
//     let elem;

//     function render() {
//         elem = document.createElement('div');
//         elem.className = 'menu';

//         let titleElem = document.createElement('span');
//         titleElem.className = 'title';
//         elem.appendChild(titleElem);
//         titleElem.textContent = option.title;

//     }


//     elem.onclick = function(event) {
//         if (event.target.closest('.title')) {
//             toggle();
//         }
//     }


// function renderItems() {
//     let items = option || [];
//     let list = document.createElement('ul');
//     items.forEach(function(item) {
//         let li = document.createElement('li');
//         li.textContent = item;
//         list.appendChild(li);
//     });
//     elem.appendChild(list);
// }


// function close() {
//     elem.classList.remove('open');
// }

// function open() {
//     if (!elem.querySelector('ul')) {
//         renderItems();
//     }
//     elem.classList.add('open');
// }

// function toggle() {
//     if (elem.classList.contains('open')) close();
//     else open();
//  }

//  this.getElem = getElem;
//  this.toggle = toggle;
//  this.close = close;
//  this.open = open;

// }


function Menu(options) {
    var elem;

    function getElem() {
        if (!elem) render();
        return elem;
    }

    function render() {
        elem = document.createElement('div');
        elem.className = "menu";

        var titleElem = document.createElement('span');
        elem.appendChild(titleElem);
        titleElem.className = "title";
        titleElem.textContent = options.title;

        elem.onmousedown = function () {
            return false;
        };

        elem.onclick = function (event) {
            if (event.target.closest('.title')) {
                toggle();
            }
        };
    }

    function renderItems() {
        var items = options.items || [];
        var list = document.createElement('ul');
        items.forEach(function (item) {
            var li = document.createElement('li');
            li.textContent = item;
            list.appendChild(li);
        });
        elem.appendChild(list);
    }

    function open() {
        if (!elem.querySelector('ul')) {
            renderItems();
        }
        elem.classList.add('open');
    };

    function close() {
        elem.classList.remove('open');
    };

    function toggle() {
        if (elem.classList.contains('open')) close();else open();
    };

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
}

//   const people = ['Misha', 'Sasha', 'Julia', 'Danila'];
//  let joinName = people.join(', ');
//  console.log(joinName)

//  function deleteIndex(arr) {
//      for (let i = 0; i < arr.length; i++) {
//              delete arr[2];
//              if (arr[2] == undefined) {

//              }
//          }
//      return arr;
//  }

//  console.log(deleteIndex(people));


//  const spliceArr = ['one', 'two', 'three', 'four', 'five'];
//  // универсальный метод для массивов!
// // arr.splice(index[, deleteCount, elem1, ..., elemN])
// spliceArr.splice(0, 2); // удалить 2 элемента начиная с 1го 
// console.log(spliceArr);

// // вставим элементы

// spliceArr.splice(0, 0, 'I', 'NEW', 'ELEMENT!'); // вставить новые элементы с 1го не меняя и не заменяя другие элементы
// console.log(spliceArr);

// // вставить с позиции 2, удалить 0 элементов, вставить новые индексы
// spliceArr.splice(2, 0, 'wow', 'cool!');
// console.log(spliceArr);


// const animals = ['cat', 'dog', 'chiken', 'dragons', 'cow'];

// animals.splice(0, 0, '1', '2', '3');

// console.log(animals);

// const animals2 = animals.slice(0); // скопируем весь массив
// console.log(animals2);


// const alphabet = ['z', 'g', 'b', 'a', 'q', 'c', 'd', 'w', 'e', 'r', 'f', 'h'];
// alphabet.sort();
// console.log(alphabet); // ["a", "b", "c", "d", "e", "f", "g", "h", "q", "r", "w", "z"]

// const sortNumber = [2, 10, 1, 0, 5, 3, 4, 8, 7];
// sortNumber.sort(function(a, b){
//     if (a < b) {
//         return -1;
//     } else {
//         return 1;
//     }
// });
// console.log(sortNumber); // [0, 1, 2, 3, 4, 5, 7, 8, 10]


// let one = [1, 2, 3];
// let two = [4, 5, 6];
// function plus(a1 ,b2 ){
//   let sum1 = a1.reduce(function(prev, value) {
//       return prev + value;
//   });
//   let sum2  = b2.reduce(function(prev, value) {
//          return prev + value;
// });
//  return sum1 + sum2;
// }
// console.log(plus(one, two));


var numbers = [2, 4, 6, 8, 10];

var sum = numbers.map(function (item) {
    return item + item;
});
console.log(sum);

var fruits = ['Apple', 'Orange', 'waterlemon', 'Cranberry'];
var fruitJuce = fruits.map(function (frut) {
    return frut + ' juce';
});
console.log(fruitJuce);

var parkRides = [["Birch Bumpers", 40], ["Pines Plunge", 55][("Cedar Coaster", 20)], ["Ferris Wheel of Firs", 90]];

var fastPassQueue = ["Cedar Coaster", "Pines Plunge", "Birch Bumpers", "Pines Plunge"];

/* Создадим функцию конструктор, в которую будем помещать данные о пассажирах и билетах  */

function assignTorpedo(passengerArray) {
    return function (name) {
        for (var i = 0; i < passengerArray.length; i++) {
            // найдем имя пассажира в списке 
            if (passengerArray[i] == name) {
                // если массив с именами совпадает с именем которое мы передадим, то вывести...
                // то выводим имя и номер под которым оно находится в массиве
                console.log('hey  ' + name + ' man your post at torpedo ' + (i + 1) + ' !');
            }
        }
    };
}
var subPassengers = ["Luke", "Leia", "Han", "Chewie", "Yoda", "R2-D2"]; // subPassengers эо второй аргумент функции, массив с именами
var getName_1 = assignTorpedo(subPassengers);
getName_1('Han');

function buildCoveTicketMaker(transport) {
    // transport - имя транспорта, передаваемая в новой переменной 
    var passengerNumber = 0; // начнем нумерацию каждого пассажира с 0 (нуля)
    return function (name) {
        // nmae - имя пассажира, передается в параметре ТРАНСПОРТА  - getSubmarineTicket('Sten');
        passengerNumber++; // когда вызывана функция с каким либо транспортом, мы добавляем пассажира 
        // каждый раз когда будет вызвана повторно функция с одним и тем же именем, счетчик увеличится на 1
        console.log('Here is your transport ' + transport + ' welcome to the Cold cove ' + name + ' you are passenger # ' + passengerNumber);
        /* passengerNumber - Каждый раз, когда билет «печатается», этот
            Номер пассажира будет содержать
            точное количество раз сколько раз 
            билет был выдан */
    };
}

var getSubmarineTicket = buildCoveTicketMaker('Submarine'); // создали переменную, и передали в нее функцию конструктор, в ее параметре есть имя транспорта
var getBattleshiptTicket = buildCoveTicketMaker('Battleship');
var getBirdTicket = buildCoveTicketMaker('bird');

getSubmarineTicket('Sten'); // в новой переменной задаем параметр - имени, т.к. функция констсруктор возвращает АНОНИМНУЮ функцию и там есть аргумент NAME
getBattleshiptTicket('Nick');
getBirdTicket('Parrot');

function capacityStatus(numPass, cap) {
    if (numPass > cap) {
        noSeats();
    } else {
        seats();
    }

    function noSeats() {
        console.log('no seats!');
        return false;
    }
    function seats() {
        console.log('have seats!');
        return true;
    }
}

capacityStatus(6, 20);

/*    Объекты */

var aquarium = {
    Nemo: {
        type: "fish",
        age: 23,
        length: 3.7,
        color: 'orange-white'
    },
    Marlin: {
        type: "fish",
        age: 10,
        length: 1.7,
        color: 'white'
    },

    Dory: {
        type: "i Dory!",
        age: 5,
        length: 2,
        color: 'blue'
    },

    "Coral castle": {
        type: "build",
        age: 76,
        height: '213',
        width: 260,
        owner: 'Artur'
    },
    addCritter: function addCritter(name, type, age, length, color) {
        this[name] = {
            type: type,
            age: age,
            color: color
        };
    }
};

// aquarium.addCritter('Bubbles', 'fish', 12, 4.7, 'yellow');
// aquarium.addCritter('SHARK!', 'fish', 7, 3.4, 'grey');
// function getkeys() {
//     for (let outkey in aquarium) {
//         const saver = aquarium[outkey]; 
//         for (let innerKey in saver) { 

//             console.log(innerKey + ' ' + saver[innerKey]); 
//         }
//     }
// }
// getkeys();


//---------------------------------CALL----------------------------------

// function getFullName() {
//     console.log(this.first + this.last);
// }

// function getPropMan(fristArg, secondArg, lastArg) {
//     console.log(this[fristArg] + ' ' + this[secondArg] + ' ' + this[lastArg]);
// }

// let user = {
//     first: 'bruce ',
//     last: ' Wayne',
//     age: 24,
//     sex: 'man',
//     colorHair: 'brown'
// };

// getFullName.call(user); // вызвали функцию через call, передав в аргумент Объект со свойствами объекта
// getPropMan.call(user, 'sex', 'colorHair', 'age');


// function getArgs() {
//     arguments.join = [].join; // отдолжили метод у массива для объекта - arguments
//     let argStr = arguments.join('-');
//     console.log(argStr);
// }
// getArgs(1, 2, 3, 4);


var user = {
    firstName: "Вася",
    sayHi: function sayHi() {
        console.log(this.firstName);
    }
};

setTimeout(user.sayHi, 1000); // undefined (не Вася!)


//------------------------- BIND -----------------------

var users = {
    data: [{ name: 'Mikle' }, { name: 'Bruce' }, { name: 'John' }, { name: 'Deeper' }, { name: 'Luce' }],
    showName: function showName(event) {
        // for (let i = 0; i < this.data.length; i++) {
        //    // console.log(this.data[i]);
        //   //  let dataname = this.data[i];
        //     for (let key in dataname) {
        //         console.log(dataname[key]);

        //     }
        // }
        console.log(this.data[2].name);
    }
};

var showObj = document.querySelector('.showObject');
// console.log(showObj);
// showObj.addEventListener('click', function(event){
//     users.showName();
// });

showObj.onclick = function (ev) {
    users.showName();
};

var employee = {
    name: 'John',
    phone: '+7 (765) 000-98-34',
    company: 'Opera Software',
    email: 'john@opera.com'
};

var keys = Object.keys(employee);
console.log(keys); // ["name","phone","company","email","key"]


keys.forEach(function (key) {
    console.log(key + ': ' + employee[key]);
});

//  Arrow function


var b = 20;
if (true) {
    var _b = 10;
    console.log(_b + ' inner');
}