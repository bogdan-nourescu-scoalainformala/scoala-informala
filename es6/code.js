//functioneaza pt ca functiile sunt hoisted
f();
let varGlobal = 5;
function f(){
	let varLocalaFunctieiF=7;
}


//nu functioneaza pentru ca clasele nu sunt hoisted
new Persoana();

class Persoana extends Om{
	
}
class Om{
	
}


let x;


x=5;

let x = 5;



const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

promise1
.then((value) => {
  console.log(value);
  // expected output: "Success!"
})
.then(....)
.then(....);


let value = await promise1;
....
....

new Promise((resolve,reject)=>{
	setTimeout(()=>{
		if(nr >5){
			resolve (nr);
		}else {
			reject (nr);
		}
	},5000);
});

function wait(nrSecunde){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve();
		},nrSecunde*1000);
	});
}

function timeout(nrSecunde){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			reject();
		},nrSecunde*1000);
	});
}

function ajax(url, method, body){
	return new Promise((resolve,reject)=>{
		
		
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4){
				if(this.status == 200) {
					resolve(xhttp.responseText);
				}else{
					reject(xhttp.responseText);
				}
			}
		};
		xhttp.open(method, url, true);
		xhttp.send(body);
		
		
		
	});
}

let x = await ajax(....);


//niste cod initial
//asteapta 5 secunde
//niste cod

//Varianta 1:

//niste cod initial
setTimeout(function(){
	//niste cod
},5000);

//Varianta 2:
//niste cod initial
await wait(5);
//niste cod

let arr = [1,2,3,4,5,6];

let a=arr[0];
let b=arr[1];
let c=arr[2];

let [a,b,c, ...d] = arr;


[...arr,last] = arr;

var temp = a;
a=b;
b=temp;

[b,a] = [a,b]

let persoana = {
	nume:"Nourescu",
	prenume:"Bogdan",
	varsta:7,
	cnp:7,
}
xxx = {
	...persoana,
	adresa:"asdasdad"
}
let copyObiect = {...persoana};

{nume, prenume,...other} = persoana;

nume=persoana.nume;
prenume=persoana.prenume;

let arr = [1,2,3];
let arr2 = [4,5,6];

let concat = [...arr, ...arr2];
let concat = [7,5,...arr];

let copy = [...arr];

Math.max(5,6,7,8,9,9,10);//asa merge
Math.max([5,6,7,8,9,9,10]);//asa NU merge
let arrMax = [5,6,7,8,9,9,10];
Math.max(...arrMax)


function suma(diff, ...arr){
	for(let i=0;i<arr.length;i++){
		
	}
}
suma(5,6,7,8,10);


function x(){
	//asdasdasdada
	asdadsasd/asdads
}


setTimeout(function(a,b,c){
	return a+b*5
},5000);
setTimeout((a,b,c)=>{
	return a+b*5
},5000);
setTimeout((a,b,c)=>a+b*5,5000);

setTimeout((a,b,c)=> {
	if(a>5){
		asdasdasdada
	}
	return a+b*5
},5000);

[1,2,10].sort((a,b)=> a-b)
[1,2,10].sort(function(a,b){return a-b})

function a(){
	var a,b,c,d;
	
	//niste cod
	//niste cod
	//niste cod
	//niste cod
	//niste cod
	//niste cod
	
	a = 5;
	b = 5;
	c = 5;
	d = 5;
	
	//niste cod
	//niste cod
	//niste cod
	//niste cod
	//niste cod

}




function a(){
	var a,b,c,d,e,f;
	
	
	for(i =0;i<5;i++){

	}
	for(;i<10;i++){

	}
	for(i =0;i<15;i++){

	}
}
function a(){
	
	for(let i =0;i<5;i++){
	
	}
	for(let i =0;i<10;i++){

	}
	for(let i =0;i<15;i++){

	}
}


let url;
if(nr === "One"){
	url = 1;
	if(options === "Programming"){
		url = 2;
	}
	
} else {
	url = "https://official-joke-api.appspot.com/jokes/ten";
	if(options === "Programming"){
		url = "https://official-joke-api.appspot.com/jokes/programming/ten";
	}
}
//este vizibil url


var url
if(nr === "One"){
	 url= 1;
	if(options === "Programming"){
		var url = 2;
	}
	
} else {
	var url = "https://official-joke-api.appspot.com/jokes/ten";
	if(options === "Programming"){
		var url = "https://official-joke-api.appspot.com/jokes/programming/ten";
	}
}
//variabila url cu var este vizibila aici














