import React, { Component } from 'react';
import './UFC.css';
import fighterImage1 from './alexander-gustafsson.png';
import fighterImage2 from './jon-jones.png';

const alex = {
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

const jon = {
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
class UFC extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedOption: undefined
		};

		this.onSave = this.onSave.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
	}

	handleFormSubmit(e) {
		e.preventDefault();
		this.onSave();
	}

	handleOptionChange(changeEvent) {
		this.setState({
			selectedOption: changeEvent.target.value
		});
	}

	onSave() {
		let fighterData;
		switch (this.state.selectedOption) {
			case 'alex':
				fighterData = alex;
				break;
			case 'jon':
				fighterData = jon;
				break;
			default:
				break;
		}
		fighterData.position = this.props.activePosition;
		this.props.onSave && this.props.onSave(fighterData);
	}

	render() {
		return (
			<form className="ufc-form" onSubmit={this.handleFormSubmit}>
				<div className="ufc-form__fighter">
					<input id="alex" name="fighter" type="radio" value="alex" checked={this.state.selectedOption === 'alex'}  onChange={this.handleOptionChange} />
					<label htmlFor="alex" className="ufc-form__fighter-label">
						Alexander Gustafsson
					</label>
				</div>
				<div className="ufc-form__fighter">
					<input id="jon" name="fighter" type="radio" value="jon" checked={this.state.selectedOption === 'jon'}  onChange={this.handleOptionChange} />
					<label htmlFor="jon" className="ufc-form__fighter-label">
						Jon Jones
					</label>
				</div>
				<button disabled={!this.state.selectedOption} type="submit" className="ufc-form__save">
					Save
				</button>
			</form>
		);
	}
}

export default UFC;
