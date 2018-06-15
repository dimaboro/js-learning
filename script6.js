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

var hello = function () {

  var admin = prompt("Who?", " ");

  var empty = undefined = null;

  if (empty) {

    console.log("No entrase");

  } else if ("admin") {

      if ("Black King") {

        console.log("Welkome!");

    } else if (empty) {

      console.log("Good bye");
    } else {
      console.log("not right!");
    }

  } else {
    console.log("I don't know U.");
  }
}
