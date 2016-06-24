import React from 'react';

export default class Titulo extends React.Component {
	constructor() {
	  super();
	}
	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
			</div>
		);
	}
}