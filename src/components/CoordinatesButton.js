import React from 'react';


export default class CoordinatesButton extends React.Component {

	handleCoordinates = (event) => {
		this.props.onReceiveCoordinates([event.pageX, event.pageY]);
	}

	render() {
		return (
			<button onClick={this.handleCoordinates} />
			)
	}
}

