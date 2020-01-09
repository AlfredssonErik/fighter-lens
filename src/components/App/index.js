import React, { Component } from 'react';
import './App.css';
import Card from '../Card';
import Modal from '../Modal';
import UFC from '../UFC';

class App extends Component {
	constructor() {
		super();
		this.state = {
			modalShow: false,
			activePosition: undefined,
			fighter1: undefined,
			fighter2: undefined
		}

		this.handleSave = this.handleSave.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}

	handleSave(fighterData) {
		if (fighterData.position === 1) {
			this.setState({
				fighter1: fighterData
			});
		} else if(fighterData.position === 2) {
			this.setState({
				fighter2: fighterData
			});
		}
		
		this.toggleModal();
	}

	toggleModal(newPosition) {
		this.setState({ 
			activePosition: newPosition,
			modalShow: !this.state.modalShow
		});
	}

	render() {
		return (
			<div className="app">
				<h1 className="app__title">Modal lens</h1>
				<div className="app__cards">
					<Card onSelect={this.toggleModal} fighter={this.state.fighter1} position={1} />
					<Card onSelect={this.toggleModal} fighter={this.state.fighter2} position={2} />
				</div>
				<Modal onSave={this.handleSave} onClose={this.toggleModal} show={this.state.modalShow} activePosition={this.state.activePosition}>
					<UFC />
				</Modal>
			</div>
		);
	}
}

export default App;
