import React from 'react';

import Titulo from '../components/Titulo.js';
import Subtitulo from '../components/Subtitulo.js';

export default class Home extends React.Component {
	constructor(props) {
	  super(props)

	  this.state = {
	  	saludo: 'Hola pepe'
	  }
	}
	render(){
		return(
			<div>
				<Titulo name={this.state.saludo}/>
				<Subtitulo />
			</div>
		);
	}	
}