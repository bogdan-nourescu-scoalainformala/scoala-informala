//for(/*initializare*/;/*daca conditia este true*/; /*incrementare/decrementare*/){
	//cod
//}

let array = [ 3,6,7,8,1,2,4,99,8,6,4,3,2,6];
array.length;//13

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