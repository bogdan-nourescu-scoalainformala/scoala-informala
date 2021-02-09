import React, { Component } from 'react';


class Formular extends Component {
	constructor(props) {
		super(props);
		// create a ref to store the textInput DOM element
		this.linkRef = React.createRef();
		this.parolaRef = React.createRef();
		this.dataRef = React.createRef();
		
		
		this.adaugaHandler = this.adauga.bind(this);
	  }
	
	
	adauga(event){
		event.preventDefault();
		let linkInput = this.linkRef.current;
		let parolaInput = this.parolaRef.current;
		let dataInput = this.dataRef.current;
		console.log(linkInput.value, parolaInput.value, dataInput.value,);
		console.log("merge adaugarea");
	}
	editPasul2(){
		
	}
	cancel(){
		
	}
    render() {
        return (
            <form onSubmit={this.adaugaHandler} className="hidden" >
				<label>
					Link:<input type="text" name="link" ref={this.linkRef}/>
				</label><br />
				<label>
					Parola:<input type="password" name="parola" ref={this.parolaRef}/>
				</label><br />
				<label>
					data:<input type="date" name="data" ref={this.dataRef}/>
				</label><br />
				<input id="addBtn" type="submit" value="Adauga"/>
				<input id="editBtn" type="button" onClick={this.editPasul2} className="hidden" value="Editeaza"/>
				<input id="cancelBtn" type="button" onClick={this.cancel} value="Cancel"/>
			</form>
        );
    }
}

export default Formular;