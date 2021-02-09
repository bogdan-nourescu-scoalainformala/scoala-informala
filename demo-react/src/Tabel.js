import React, { Component } from 'react';
import './Tabel.css';
import delIcon from './icons/icon-delete-16.jpg';
import editIcon from './icons/edit.png';


class Tabel extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			rows: props.rows
		};
		console.log(this.state);
	  }
	
    render() {
        return (
			<table className="tabel" border="1">
				<thead>
					<tr>
						<th>Data</th>
						<th>Link</th>
						<th>Parola</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{this.state.rows.map((inregistrare, index)=>{
						return (
							<tr key={index}>
								<td>{inregistrare.data}</td>
								<td><a href={inregistrare.link} target="_blank" rel="noreferrer">Link</a></td>
								<td>{inregistrare.parola}</td>
								<td>
									<img className="delete" src={delIcon} alt="delete" />
									<img className="edit" src={editIcon} alt="edit" />
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
        );
    }
}

export default Tabel;