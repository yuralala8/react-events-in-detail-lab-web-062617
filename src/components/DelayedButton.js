import React from 'react';

export default class DelayedButton extends React.Component {
	handleDelayedClick = (event) => {
		event.persist()
		this.props.onDelayedClick(event)

	}

	render() {
		return (
		<button onClick={this.handleDelayedClick} />
	)}

}