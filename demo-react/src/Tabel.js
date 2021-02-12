import React, { Component } from 'react';
import './Tabel.css';
import delIcon from './icons/icon-delete-16.jpg';
import editIcon from './icons/edit.png';


class Tabel extends Component {
	constructor(props) {
		super(props);
		
		this.onDelete = props.onDelete;
		this.onEdit = props.onEdit;
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
					{this.props.rows.map((inregistrare, index)=>(
						<tr key={index}>
							<td>{inregistrare.data}</td>
							<td><a href={inregistrare.link} target="_blank" rel="noreferrer">Link</a></td>
							<td>{inregistrare.parola}</td>
							<td>
								<img className="delete" src={delIcon} alt="delete" onClick={()=>this.onDelete(index)} />
								<img className="edit" src={editIcon} alt="edit" onClick={()=>this.onEdit(index)} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
        );
    }
}

export default Tabel;