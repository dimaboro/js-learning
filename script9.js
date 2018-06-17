// 2*2*2*2 = 2^4 = 16

// функция для вычисления степени
function pow(x, n) {

  // принимает два аргумента, для значения и для степени

  // счетчик, изначально равен X
  // var t = x;

  // определяем временную переменную
  // со значением на этом шаге
  var t = x; // 2


  for (var i = 1; i < n; i++) {

    // 1<4
    // 2<4
    // 2<4

    // обновляем t в зависим. от шага n
    t = t * x;

// для проверки значения выводим:

    console.log(t);

  }

  // возвращаем вверх финальное t, равное 16
   return t;
}

// берем степень строго больше единицы

var x = 3;

var n = 5;

if (n <= 1) {
  alert('Степень ' + n +
    'не поддерживается, введите целую степень, больше 1'
  );
} else {
  console.log( pow(x, n) );
}



// спрашиваем, да или нет

function ask(question, yes, no) {

// если да, то функция да

  if (confirm(question)) {
    yes();

// если нет, то функция нет

  }else no();
};

// функция с аргументами

ask("Вы согласны?",

// что, если да

function () {
  console.log("yes");
},

// что, если нет

function () {
  console.log("cancel");
}
);

// самый короткий и неудобный способ задания функции

var sum = new Function("a, b", "return a+b");
var s = sum(2, 5);
console.log(s);

// 5 = 1 + 2 + 3 + 4 + 5


// через цикл
function sumTo1(n) {
    var z = 0;
  for (var i = 1; i <= n; i++) {

    var z = z + i;
  }
console.log(z);
}
sumTo1(4);

// через рекурсию
function sumTo2(n) {
  if (n != 0) {
    return n + sumTo2(n-1);
  } return n;
};

console.log(sumTo2(2));

// факториал через рекурсию

function factorial(n) {
  if (n != 1) {
    return n * factorial(n-1);
  } return n;

}
console.log(factorial(8));

// Числа Фибоначчи через рекурсию

// 1 = 1, 2 = 1, 3 = 2, 4 = 3, 5 = 5, 6 = 8, 7 = 13

function fib1(n) {
  if (n <= 1){return n;
}return fib1(n - 1) + fib1(n - 2);
}
console.log(fib1(7));


// числа Фибоначчи через цикл

function fib2(n){

// задаём начальные значения

  var a = 1,
    b = 1;

// пишем цикл от трёх, потому что до трёх значения не меняются

  for (var i = 3; i <= n; i++) {
    var c = a + b;
    a = b;
    b = c;
  }
  return b;
}
console.log(fib2(77));

// named function expression - именнованное функц. выражение

var f = function factorial(n) {
  return n ? n*factorial(n-1) : 1;
};

var g = f;  // скопировали ссылку на функцию-факториал в g
f = null;

alert( g(5) ); // 120, работает!
