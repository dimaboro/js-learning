// свойство .length - выводит длину введенной строки

alert("Hello, world".length); //12

// метод .toUpperCase() - возвращает строку в верхнем регистре

alert( "hello, world".toUpperCase() ); // HELLO, WORLD

// метод .toFixed(n) - возвращает число с n знаков после запятой

var n = 12.345

console.log( n.toFixed(5) ); // 12.34500

console.log( 12..toFixed(7) ); //чтобы работало, надо точку после числа

console.log( 0xFF ); //255 в 16 сс

console.log( 5e6 ); // 5 000 000

console.log( 5 / 0 ); // infinity

// infinity - особенное численное значение

// если операция не может быть совершена, возвращается NaN - Not a Number

console.log( 0 / 0 ); // NaN

// NaN не равно ничему, включая себя

if (NaN == NaN) console.log("==");

if (NaN === NaN) console.log("===");

// нифига не сработало

// можно проверить через isNaN - только для NaN

var n = 0 / 0;

console.log( isNaN(n) ); //true

// операции с NaN возвращают NaN

if (n !== n) console.log("NaN"); // работает
if ( isNaN(n) ) console.log("NaN"); // но этот способ лучше

// isFinite(п) возвращает true, если п != NaN, infinity, -infinity

console.log( isFinite(Infinity) ); //false

var s = 123;

console.log( +s ); //123

console.log("12t"); //NaN

// пробелы игнорируются, символ пробела \n или " "

console.log(+""); // 0

console.log(+"1 2"); // NaN

console.log("33." / "-3"); //11

// parseInt, parseFloat - вернет только число из строки
// parseFloat - работает с драбными числами
// до первой ошибки

console.log( parseInt("12px") ); //12

console.log( parseFloat("12.3456.7") ); //12.3456

// в parseInt можно задавать систему счисления

console.log( parseInt( "0xFF", 16 ) ); // 255

// функция проверки на число

function isNumeric(n) {
  return !isNaN(parseFloat(n) ) && isFinite(n);
}

// toString делает из одной СС число в другой

n = 255;

console.log( n.toString(16) );

// основание от 2 до 36

var n = 123456789;

console.log(n.toString(36) );

// округление до целого: вниз Math.floor, вверх Math.ceil,
 // до ближайшего Math.round

 var n = 123.456;

console.log( Math.round(n * 100) / 100 ); //до 2 знаков после запятой

// округление до заданной точности

console.log( n.toFixed(5) );

//математические функции

console.log(Math.sqrt(9) ); // 3

console.log(Math.log(1));

console.log( Math.pow(2,5) ); //32

console.log( Math.abs(3) );

// чтоб число было красивым

var random = 238778537874639

console.log(random.toLocaleString());

function getDecimal(num) {
  return num - Math.floor(num);
};
console.log( getDecimal (12.221.toFixed(3) ) );

console.log(Math.random());

function randomMax(max) {
  return Math.random() * max;
}
console.log( randomMax(5) );
