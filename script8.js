var a = 4 * 2;

switch (a) {
  case 4:
  case 8:
    console.log("Да, да, всё верно.");
    break;

  case 5:
    console.log("Невозможно");
    break;

  default: console.log("WTF?");
};

var exp = prompt("Опыт: ", 0);

switch (exp) {
  case "0":
    console.log("У вас нет опыта");
    break;
  case "1":
      console.log("У вас 1 опыта");
    break;

  default: console.log("WTF?");

};

var browser = prompt("Browser", "Chrome");

if ("IE") {
  console.log("bad");
} else if ("Chrome", "Firefox", "Safari", "Opera") {
  console.log("good");
} else {
  console.log("maybe normal");
};

function func() {
  console.log("Это функция");
}
func();

function showMessage(from, text) { // параметры from, text

  from = "** " + from + " **"; // здесь может быть сложный код оформления

  console.log(from + ': ' + text);
};

showMessage('Маша', 'Привет!');

function showMessage(from, text) {
    text = text || 'текст не передан';
  from = '**' + from + '**'; // меняем локальную переменную from
  console.log( from + ': ' + text );
}

var from = "Маша";

showMessage(from, "Привет");
showMessage(from);
console.log( from ); // старое значение

function calcD(a, b, c) {
   return b*b - 4*a*c; // возврат - функция играет роль переменной
}

var test = calcD(-4, 2, 1);
console.log(test); // 20

/*Имя функции следует тем же правилам, что и имя переменной.
 Основное отличие – оно должно быть глаголом, т.к. функция – это действие.*/

var a = 0;
var b = 0;

function min(a, b) {

  if (a > b) {

      return "значение " + b + " меньше " + a + ".";

    } else if(b > a) {

      return "Значение " + a + " меньше " + b + ".";
  } else {
    return "Значения равны или некорректны."
  }

}

console.log(min(4, 4));
