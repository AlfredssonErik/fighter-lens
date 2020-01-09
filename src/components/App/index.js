import React, { Component } from 'react';
import './App.css';
import Card from '../Card';
import Modal from '../Modal';
import fighterImage1 from './alexander-gustafsson.png';
import fighterImage2 from './jon-jones.png';

const fighter1 = {
	name: 'Alexander Gustafsson',
	image: fighterImage1,
	total: '18-5-0 (W-L-D)',
	age: 32,
	height: 77.00,
	weight: 205.00,
	debut: 'NOV. 14, 2009',
	reach: 79.00,
	legReach: 46.00,
	record: [
		{
			figure: 11,
			text: 'Wins by knockout'
		},
		{
			figure: 3,
			text: 'Wins by submission'
		},
		{
			figure: 4,
			text: 'Wins by submission'
		}
	],
	stats: [
		{
			figure: '40%',
			text: 'Striking accuracy'
		},
		{
			figure: '40%',
			text: 'Grappling accuracy'
		}
	]
}

const fighter2 = {
	name: 'Jon Jones',
	image: fighterImage2,
	total: '24-1-0 (W-L-D)',
	age: 31,
	height: 76.00,
	weight: 205.00,
	debut: 'AUG. 09, 2008',
	reach: 84.50,
	legReach: 45.00,
	record: [
		{
			figure: 10,
			text: 'Wins by knockout'
		},
		{
			figure: 6,
			text: 'Wins by submission'
		},
		{
			figure: 9,
			text: 'Title defences'
		}
	],
	stats: [
		{
			figure: '58%',
			text: 'Striking accuracy'
		},
		{
			figure: '47%',
			text: 'Grappling accuracy'
		}
	]
}

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
				fighter1: fighter1
			});
		} else if(fighterData.position === 2) {
			this.setState({
				fighter2: fighter2
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
				<Modal onSave={this.handleSave} onClose={this.toggleModal} show={this.state.modalShow} activePosition={this.state.activePosition} />
			</div>
		);
	}
}

export default App;
