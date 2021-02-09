import React, { Component } from 'react';


class Formular extends Component {
	constructor(props) {
		super(props);
		
		this.state = props.fieldValues;
		
		console.log(props, this.state);
		// create a ref to store the textInput DOM element
		
		this.submitHandler = this.submit.bind(this);
		this.changeHandler = this.change.bind(this);
	  }
	
	
	submit(event){
		event.preventDefault();
		console.log(this.state);
	}
	change(event){
		let value = event.target.value;
		let name = event.target.name;
		
		this.setState({
			[name]: value
		});
	}
	
	
    render() {
        return (
            <form onSubmit={this.submitHandler} className="hidden" >
				<label>
					Link:<input type="text" name="link" value={this.state.link} onChange={this.changeHandler}/>
				</label><br />
				<label>
					Parola:<input type="password" name="parola" value={this.state.parola} onChange={this.changeHandler}/>
				</label><br />
				<label>
					data:<input type="date" name="data" value={this.state.data} onChange={this.changeHandler}/>
				</label><br />
				<input id="addBtn" type="submit" value="Adauga"/>
				<input id="editBtn" type="button" onClick={this.editPasul2} className="hidden" value="Editeaza"/>
				<input id="cancelBtn" type="button" onClick={this.cancel} value="Cancel"/>
			</form>
        );
    }
}

export default Formular;