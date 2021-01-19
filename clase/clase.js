class Nota {
	constructor(v, p, d){
		this.valoare = v;
		this.data = new Date();
		this.profesor = p;
		this.disciplina = d;
	}
}
new Nota(10, "Ion", "Matematica");
new Nota(7, "Ion", "Matematica");
class Student {
	constructor(nume, prenume){
		this.nume=nume;
		this.prenume=prenume;
		this.note = [];
		this.medie = 0;
	}
	addNota(nota){
		this.note.push(nota);
		this.calculeazaMedie();
	}
	calculeazaMedie(){
		let m = 0;
		for(let i=0;i<this.note.length;i++){
			m+=this.note.valoare;
		}
		this.medie =m/this.note.length;
	}
}

class Clasa{
	constructor(numeleClasei){
		this.nume = numeleClasei;
		this.studenti = [];
	}
	inmatriculeaza(student){
		this.studenti.push(student);
	}
	exmatriculeaza(student){
		for(let i=0;i<this.studenti.length;i++){
			if(this.studenti[i]===student){
				this.splice(i,1);
				break;
			}
		}
	}
}
let bogdan = new Student("Bogdan", "Nourescu");
let clasa12A = new Clasa("12A");

clasa12A.inmatriculeaza(bogdan);


bogdan.addNota(new Nota(7, "Ion", "Matematica"));
bogdan.addNota(new Nota(10, "Ion", "Matematica"));
bogdan.addNota(new Nota(8, "Ion", "Matematica"));



let catalog = [];
catalog.push(new Student("Bogdan", "Nourescu"))
catalog.push(new Student("Bogdan1", "Nourescu1"))
catalog.push(new Student("Bogdan2", "Nourescu2"))
catalog.push(new Student("Bogdan3", "Nourescu3"))


let bogdan2 = {
	nume:"Bogdan",
	prenume:"Nourescu",
	note:[]
}
function calculeazaMedie2(note){
	let m = 0;
	for(let i=0;i<note.length;i++){
		m+=note.valoare;
	}
	return m/note.length;
}
bogdan2.note.push({
	valoare:7,
	data:new Date(),
	profesor:"Ion",
	disciplina:"Matematica"
});
bogdan2.medie = calculeazaMedie2(bogdan2.note);
