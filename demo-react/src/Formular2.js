import React, { Component } from 'react';


class Formular extends Component {
	constructor(props) {
		super(props);
		
		this.state = props.fieldValues;
		
		this.onSalveaza = props.onSalveaza;
		
		this.changeHandler = this.change.bind(this);
		this.submitHandler = this.submit.bind(this);
	  }
	
	
	submit(event){
		event.preventDefault();
		console.log(this.state);
		this.onSalveaza(this.state);
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
					Link:<input type="text" name="link" value={this.state.link || ""} onChange={this.changeHandler}/>
				</label><br />
				<label>
					Parola:<input type="password" name="parola" value={this.state.parola || ""} onChange={this.changeHandler}/>
				</label><br />
				<label>
					data:<input type="date" name="data" value={this.state.data || ""} onChange={this.changeHandler}/>
				</label><br />
				<input id="addBtn" type="submit" value="Salveaza"/>
				<input id="cancelBtn" type="button" onClick={()=>this.props.onCancel()} value="Cancel"/>
			</form>
        );
    }
}

export default Formular;