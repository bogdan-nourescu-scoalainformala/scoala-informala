//definitia functiei
function numeFunctie(parametrul1, parametrul2) {

	let x = 5; // variabile locale
	x+=7;
	x/5;
	//...
	//.


}

numeFunctie(); //apelul functiei


function sum(a,b){
	return a + b;
}
function sum(a,b){
	let sum = a + b;
	return sum; //de preferat sa nu folosim numele functiei ca si nume de variabila
}

sum(5, 10); // 15 //a =5 si b=10
sum(5, 10, 15); // 15 //a =5 si b=10

let x = sum(2,5); //7
x=5;
let y = sum(x,x)+sum(sum(2,x),x);

//  y = sum(7,7)+sum(sum(2,7),7);
//  y = 14      +16;//30

function noReturn(a,b){
	a+b;
}
noReturn();//undefined;


function perimetruPatrat(latura) {
	return 4*latura;
}

console.log("perimetruPatrat",perimetruPatrat(5));
console.log("perimetruPatrat",perimetruPatrat(7));
console.log("perimetruPatrat",perimetruPatrat(1));
console.log("perimetruPatrat",perimetruPatrat(0.5));

function celsiusToFahrenheit(celsius){
	return (celsius * 9/5) + 32
}
console.log("celsiusToFahrenheit",celsiusToFahrenheit(0));
console.log("celsiusToFahrenheit",celsiusToFahrenheit(100));
console.log("celsiusToFahrenheit",celsiusToFahrenheit(36.8));
console.log("celsiusToFahrenheit",celsiusToFahrenheit(180));

// scrisoarea < 50g => 5lei
// scrisoarea >=50g => 5 lei + 10bani/gram extra
function pretScrisoare(gramaj) {
	if (gramaj<50) {
		return 5;
		//daca conditia este true
	} else {
		return 5+(gramaj-50) * 0.1;
		//daca conditia este false
	}
}
function pretScrisoare(gramaj) {
	if (gramaj<50) {
		var pret = 5;
		//daca conditia este true
	} else {
		var pret = 5+(gramaj-50) * 0.1;
		//daca conditia este false
	}
	
	return pret;
}
console.log("pretScrisoare",pretScrisoare(25));
console.log("pretScrisoare",pretScrisoare(50));
console.log("pretScrisoare",pretScrisoare(60));
console.log("pretScrisoare",pretScrisoare(500));

function inaltime(hPersoana) {
	if (hPersoana <= 1.5) {
		return "esti foarte scund";
	} else if (hPersoana <= 1.70) {
		return "esti mediu";
	} else if (hPersoana <= 1.90) {
		return "esti inalt";
	} else {
		return "esti un gigant";
	}
}

console.log("inaltime",inaltime(1.3));
console.log("inaltime",inaltime(1.5));
console.log("inaltime",inaltime(1.6));
console.log("inaltime",inaltime(1.7));
console.log("inaltime",inaltime(1.8));
console.log("inaltime",inaltime(1.9));
console.log("inaltime",inaltime(2));



