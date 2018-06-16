var a = 10;

var b = 0;

while (a) {
// счетчик повторов
  b++;

  console.log(b);
// когда a = 0, while = false
  a--;

};

// другой синтаксис, функция та же

do {

  a++;

  console.log(a);

} while (a < 10); // условие в конце цикла

for (var i = 0; i < 10; i++) {

// просто функция for

  var x =  2 ^ a + i;

  console.log(x);
}

// переменная i сохраняется

console.log(i);

// просто бесконечный цикл.

/*for (;;) { // ; - обязательны
};*/

var sum = 0;

// stop - метка цикла; break stop - останавливает цикл по метке

stop: while (true) {

  var value = +prompt("Введите число", 5);

  if (!value) break stop;

  sum += value;

};

console.log(sum);

for (var i = 0; i < 10; i++) {

if (i % 2 == 0) continue;

   console.log(i);

};

var b = 0;

next: for (var i = 2; i < 1000; i++) {
    for (var j = 2; j < i; j++) {

      if (i % j == 0) continue next;

  }
    console.log(i);
    b++;
}
console.log(b);
