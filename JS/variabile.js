var numeVariabila = 5; //camelCase
var nume_variabila = 5;//snake_case de obicei in python/php
//kebab-case

var integerVar = 5;//integer AKA Number
var floatVar = 5.7;//float/double AKA Number

var stringVar = "test";//string ghilimele sau glilimele duble
var stringVar = 'test';//string aprostrof sau glilimele simple
var stringVar = `test`;//string tick. Poti sa scrii pe mai multe randuri textul

// HTML: <!-- -->
// CSS /* */
// JS // de aici pana sf randului
// JS multiline /* */
var booleanTrue = true; //boolean
var booleanFalse = false; //boolean

var nullVar = null; // lipsa
var undefinedVar = undefined; // lipsa

var nanVar = NaN; // not a number

var x = 5;
var y = 6;
var z = x + y; //5+6 =11
z = z + 3; //14
z = z - 5; //9
z = z / 3; //3
z = z * 7; //21

var str = "ana are";
str = str + " mere";

str = str + 3; // transforma 3 in "3" si le concateneaza

str = "5";
str = str + 3; //"53"
str = 3 + "5"; //"35"
str = 1 + 1 + "3"; //"23"

str = "Ana are " + z+1 +" mere";// "Ana are 211 mere"
str = "Ana are " + (z+1) + " mere";// "Ana are 22 mere"

var m = "5" * 5;//25
var p = "5" / 5;//1
var n = "asd" * 5;//NaN => not a number

var stringToNumber = Number("1234"); // 1234
//parseInt("123qweqwe") => 123
//parseFloat("123.75qweqwe") => 123.75
//Number("123.75qweqwe") => NaN
//"123" * 1 => 123
//123,5 => nu este numar
//123.5 => este numar
console.log("Aici am o problema",stringToNumber, n);

var array = [5, "ana are mere", true]; //array
var array2 = [1, 2, 3, 4,5 ,6 ,7 ,8 ,9 ,0]; //array
//pozitii = 0, 1,2,3,4...

array2[4] // 5

array2[0] = array2[4] + 10; // [15, 2, 3, 4,5 ,6 ,7 ,8 ,9 ,0]
array2[0] += 4; //array2[0] = array2[0] + 4;
array2[0] -= 4; //array2[0] = array2[0] - 4;
array2[0] /= 4; //array2[0] = array2[0] / 4;
array2[0] *= 4; //array2[0] = array2[0] * 4;
str += "adasda a sda sda s";
array2[0] += 1; //array2[0] = array2[0] + 1;
array2[0]++;

array2[0]--;

var mod = 5 % 2; // restul impartirii lui 5 la 2; => 1



