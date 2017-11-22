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


var ulElement = document.querySelectorAll('ul');

function getAllUl() {
    for (var i = 0; i < ulElement.length; i++) {
        // console.log(ulElement[i]);
        ulElement[i].style.background = 'lightblue';
        var parrentUl = ulElement[2];
        console.log(parrentUl);
        var liChild = parrentUl.getElementsByTagName('li');
        console.log(liChild);
        for (var li = 0; li < liChild.length; li++) {
            console.log(liChild[li]);
            var textNode = document.textContent = 'Hello!';
            liChild[2].innerHTML = textNode;
            liChild[2].style.background = 'coral';
            liChild[2].onclick = function () {
                var redBlock = document.createElement('div');
                redBlock.className = 'red-block';
                var alertMessage = redBlock.textContent = 'Внимание!';
                redBlock.innerHTML = alertMessage;
                this.appendChild(redBlock);
            };
        }
    }
}

getAllUl();

var bigDiv = document.createElement('div');
for (var i = 0; i < bigDiv.length; i++) {
    bigDiv[i].appendChild(span);
    document.body.appendChild(bigDiv);
}

var mainElement = document.querySelectorAll('ul')[0];
var childElementOne = mainElement.children[0];

childElementOne.style.background = '#b3dffc';
childElementOne.style.color = '#333';

var one = childElementOne.insertAdjacentHTML('beforeBegin', '<li class="before">перед элементом  beforeBegin  </li>');
// найдем самый первый UL элемент из всех списков, найдем его первый дочерний элемент (0), и вставим ПЕРЕД ним множество новых li с чем либо


childElementOne.insertAdjacentHTML('afterBegin', '<li class="before-middle">в самое начало элемента  afterBegin </li>');
// нашли 1й элемент, и вставили перед ним что либо

childElementOne.insertAdjacentHTML('beforeEnd', '<li class="after-middle">в конец  элемента  beforeEnd </li>');

childElementOne.insertAdjacentHTML('afterEnd', '<li class="after-end">после элемента  afterEnd </li>');

var parrent = document.querySelector('#parrent');
var subElem = document.createElement('div');
subElem.className = 'sub-block';
subElem.textContent = 'append method';
var fragment = document.createDocumentFragment(subElem);

console.log(fragment);
parrent.appendChild(fragment);

var preElement = document.createElement('div');
preElement.className = 'pre-block';
preElement.textContent = 'prepend method';

var afterElement = document.createElement('div');
afterElement.className = 'after-element';
afterElement.textContent = 'after element';

var beforeElement = document.createElement('div');
beforeElement.className = 'before-element';
beforeElement.textContent = 'before element';

var replaceElement = document.createElement('div');
replaceElement.className = 'replace-element';
replaceElement.textContent = ' I NEW ELEMENT ';

parrent.append(subElem);
parrent.prepend(preElement);

parrent.before(beforeElement);
parrent.after(afterElement);