alert( 1/0 )

var n = 0 // Число

alert(n)

var str = 'слово' //Строка

alert(str)

var checked = true

checked = false //логическая


alert(checked)

var age=null // неизвестен/нет

alert(age)

var x

alert (x) //не задана

var age = null;

var user {name "Вася"}; //объект

typeof // строка, содержащая тип

typeof 0;

typeof true;

typeof function(){};

1+2 //1, 2 - операнды

Операторы: унарный, бинарный

Унарный: (-,+)// к 1 операнду
Бинарный // к 2 операндам

унарный плюс делает строки числами, если в строке есть число

var a = "один" + "человек";

alert(a);

var b = 11 % 3;

alert(b); // остаток от деления

var c = 2;

c++;

alert(c); // 3

c--; // ++, -- только для переменных

alert(c); //2

var i = 0;

var a = ++i; // a = 1, i = a

var a = i++; // a = 1, i = 2

var i = 0;

i++;

++i; //i = 2

var i = 1;

alert( 2 * i++ ); // 2*1, i = 2

alert( 2 * i++ ); // 2*2, i = 3

var n = 2;

n += 3; // n = n +3

n *= 3 + 2; // n = n * (3 + 2)

var f = (5, 6); // "," оставляет последнее значение
