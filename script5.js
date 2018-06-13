
var a = 0;

clicker.onclick = function() {

    a++;

    // впихиваем а в див
    document.getElementById("container").innerHTML = a;

    // вытягиваем контент из дива в значение value
    var value = document.getElementById("container").innerHTML;

    // готовим результат для консоли
    var b = "Сейчас в объекте container лежит: " + value;

    // вывод
    console.log(b);
};
