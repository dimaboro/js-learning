// запрашиваем возраст
var age = prompt("Ваш возраст,", 16);

// формируем сообщение
var message = (age < 5) ? "Привет, малыш" :
  (age < 18) ? "Привет" :
  (age < 100) ? "Здравствуйте" :
  "Какой интересный возраст!";

// выводим сообщение
console.log(message);

// запрашиваем имя JS
var name = prompt("name of JS?", " ");

// если имя - ECMAScript,
if (name == "ECMAScript") {

  // то...

  // палим тру
  console.log("true")

} else {

  // палим фолс
  console.log(false);
};



// ==========================================================

// делаем функцию ради undefined = null

var hello = function () {

// запрашиваем имя

  var admin = prompt("Who?", " ");

  var empty = undefined = null;
// первое значение запрашиваемой переменной
  if (empty) {

    console.log("No entrase");
// второе значение
  } else if ("admin") {
// первая опция второго значения
      if ("Black King") {

        console.log("Welkome!");
// вторая опция
    } else if (empty) {

      console.log("Good bye");
// третья опция
    } else {

      console.log("not right!");

    }

// опции закрыты

// третье значение

  } else {
    console.log("I don't know U.");
  }
}
// конец
