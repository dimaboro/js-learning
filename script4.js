alert( "Hello" ); // модальное, пока не нажмем ОК

//result = prompt( title, default );

var years = prompt("Сколько вам лет?", 150);

alert("Вам " + years + " лет");

var test = prompt( "Тест", " " ); // всегда пиши второй аргумент

var Me = confirm( "Вы - человек?" );

alert( Me );

var name = prompt( "Ваше имя", " " );

alert( name );

if (name === "Дима" ) {
alert("Добро пожаловать, Ваше Величество");
alert("Укажите дату Вашего рождения");
};
var day = prompt("День", 7);
var month = prompt("Месяц", 11);
var year = prompt("Год", 1998);
if ((day === 7) & (month === 11) & (year === 1998)) {
  alert("Ну конечно...");
}
else if (day !=7 | month != 11 | year != 1998){
  var c = confirm("Ты уверен?");
  if (c == true) {
    alert("Нет!");
  }
  else {
    alert("Второго шанса нет!");
  }
};
