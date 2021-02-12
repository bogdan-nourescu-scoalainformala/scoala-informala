import React from 'react';
import Formular from "./Formular2.js";
import Tabel from "./Tabel.js";

import './App.css';



class App extends React.Component {
	constructor(props) {
		super(props);
		
		
		this.state = {
			page:"table",
			indexEdit: -1,
			inregistrari:[
				{
					"link": "https://scoalainformala.zoom.us/rec/share/8vsJX8bIMIoGBLPSpip8T0WTOd-o0zjpOjG7HZGWvUPUB--0VUtVY7jMVB_lwGAj.RWKXWofIw9ZY3hSK",
					"parola": "kP@5iyVI",
					"data": "2020-12-15"
				},
				{
					"link": "https://scoalainformala.zoom.us/rec/share/8vsJX8bIMIoGBLPSpip8T0WTOd-o0zjpOjG7HZGWvUPUB--0VUtVY7jMVB_lwGAj.RWKXWofIw9ZY3hSK",
					"parola": "kP@5iyVI",
					"data": "2020-12-14"
				},
				{
					"link": "https://scoalainformala.zoom.us/rec/share/8vsJX8bIMIoGBLPSpip8T0WTOd-o0zjpOjG7HZGWvUPUB--0VUtVY7jMVB_lwGAj.RWKXWofIw9ZY3hSK",
					"parola": "kP@5iyVI",
					"data": "2020-12-13"
				},
				{
					"link": "https://scoalainformala.zoom.us/rec/share/8vsJX8bIMIoGBLPSpip8T0WTOd-o0zjpOjG7HZGWvUPUB--0VUtVY7jMVB_lwGAj.RWKXWofIw9ZY3hSK",
					"parola": "kP@5iyVI",
					"data": "2020-12-12"
				}
			]
		}
		
	}
	onsubmit(fields){
		let newInregistrari = [...this.state.inregistrari];
		if(this.state.indexEdit===-1){
			newInregistrari.push(fields);
		}else{
			newInregistrari[this.state.indexEdit]=fields;
		}
		this.setState({
			inregistrari: newInregistrari,
			page:"table"
		});
	}
	del(idx){
		if(window.confirm("esti sigur ca vrei sa stergi?")){
			console.log("se sterge?");
			let newInregistrari = [...this.state.inregistrari];
			newInregistrari.splice(idx,1);
			this.setState({
				inregistrari: newInregistrari,
				page:"table"
			});
		}
	}
	edit(idx){
		this.setState({
			indexEdit: idx,
			page:"form"
		});
	}
	
	
  render() {
    return <div>
		{this.state.page === "table"?
			(	
				<div>
					<input 
						id="plusBtn" 
						type="button" 
						value="+" 
						onClick={()=>this.setState({page:"form", indexEdit: -1})}/>
					<Tabel 
						rows={this.state.inregistrari}
						onDelete={(idx)=>this.del(idx)}
						onEdit={(idx)=>this.edit(idx)}
					
					></Tabel>
				</div>
			):
			(<Formular 
				fieldValues={this.state.indexEdit===-1? {} : this.state.inregistrari[this.state.indexEdit]} 
				onSalveaza={(data)=>this.onsubmit(data)}
				onCancel={()=>this.setState({page:"table"})}
			></Formular>)
		}
	</div>
	;
  }
}


export default App;
