var a = true;

var a = 3 == 5; // 3=5

alert(a); // false

alert( 2 != 1); // true, 2><1

alert( "B" > "A" ); // true

alert( "a" > "Z" ); //true, строчные больше прописных

alert( "Rat" > "Submit"); //true, первая буква больше

alert( +"2" < "14"); // не забывать преобразовывать строки в числа

alert( "2" > 1 ); // true, делается числовое преобразование

alert( "01" == 1 ); //true, делается числовое преобразование

alert( false == 0 ); //true, false = 0, true = 1

alert( " " == false ); //true, " " = 0

alert( 0 === false ); // false, типы различны, === и !== строгое равенство/неравенство

alert( undefined == null ) // true

alert( null >= 0 ); //true, but null != (0 & 1) - лучше не использовать
