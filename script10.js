"use strict";

// простые типы данных

var a = 1; // number

var b = "Text"; // string

var c = true; // boolean

var d = null; // null

var e; // undefined

// простые функции

alert("something"); // сообщение

prompt("something else", "default"); // ввод данных

confirm("I know it?"); // да / нет, логическая

// особенности операторов

console.log(1 + 1) // 2, number + number = number

//console.log() - аналог alert, только выводит в консоль

console.log(1 + "1"); //11, number + string = string

console.log(1 === 1); //true, самое строгое сравнение - тип данных и значение

console.log(0 == false); //true, сравнение значений, тип приводится к числу

console.log(1 == true); // true, == - =

// также есть >, >=, <, <=, == - числовое приведение типа, != - не равно

console.log(null == undefined); // true, не равны чему-то ещё

console.log(null >= 0); //true, исключение

console.log("а" > "Я"); //true, по Юникоду

// логические операторы: &&(и), ||(или), !(не)

// циклы

// пока условие выполняется
while (true) {
  // тело цикла;
}

// то же самое, но условие в конце
do {
  // тело цикла;
} while (true);

// для и от x до y, делать

for (var i = x; i < y; i++) {
  // тело цикла;
}

// break - завершить цикл
// continue - завершить итерацию

// несколько уровней цикла - метка  для выхода
outer:
for(;;) {
  //  ...
  for(;;) {
  //  ...
    break outer;
  }
}

// в switch используется ===

var age = prompt('Ваш возраст', 18);

switch (age) {
  case 18:
    alert( 'Никогда не сработает' ); // результат prompt - строка, а не число

  case "18": // вот так - сработает!
    alert( 'Вам 18 лет!' );
    break;

  default:
    alert( 'Любое значение, не совпавшее с case' );
}

// function имя(список параметров) { тело }
function sum(a, b) {
  var result = a + b;

  return result; // вернуть как значение переменной
}

// использование:
alert( sum(1, 2) ); // 3
