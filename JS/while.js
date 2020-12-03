//for(/*initializare*/;/*daca conditia este true*/; /*incrementare/decrementare*/){
	//cod
//}

let array = [3,6,4,5];

var suma = 0;
suma+=array[0];
suma+=array[1];
suma+=array[2];
suma+=array[3];
//array.length 4
 //4

for(var i=0;i<array.length;i++){
	suma+=array[i];
}





for(let i=0;i<array.length;i++){
	let value = array[i];
	console.log(value);
}
console.log("===============");
for(let i=array.length-1;i>=0;i--){
	let value = array[i];
	console.log(value);
}

//