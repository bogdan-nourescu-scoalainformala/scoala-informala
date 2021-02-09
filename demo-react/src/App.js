import React from 'react';
import Formular from "./Formular2.js";
import Tabel from "./Tabel.js";

import './App.css';

let inregistrari = [
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
];


class App extends React.Component {
  render() {
    return <div>
		<Formular fieldValues={inregistrari[0]}></Formular>
		<Tabel rows={inregistrari}></Tabel>
	</div>
	;
  }
}


export default App;
