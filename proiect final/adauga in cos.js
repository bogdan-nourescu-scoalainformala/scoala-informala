function adaugaInCos(idProdus, cantitate){

	let cosStr = localStorage.getItem("cos");
	let cos = [];
	if(cosStr !== null){
		cos = JSON.parse(cosStr);
	}
	let found=false;
	for(let produs of cos){
		if(produs.idProdus===idProdus){
			found=true;
			produs.cantitate+=cantitate;
			break;
		}
	}
	if(!found){
		cos.push({
			idProdus:idProdus,
			cantitate:cantitate
		});
	}
	
	localStorage.setItem("cos", JSON.stringify(cos));
}