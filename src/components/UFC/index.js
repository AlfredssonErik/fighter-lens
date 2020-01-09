import React, { Component, Fragment } from 'react';
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

const Fighters = (props) => {
	return (
		<Fragment>
			<h2 className="modal__title">Pick a fighter</h2>
			<div className="picker">
				{props.fighters && props.fighters.map(item => 
					<div key={item.id} className="picker__item">
						<div className="picker__content" onClick={props.handleFighterPick.bind(null, item.id)}>
							<span>{item.name}</span>
						</div>
					</div>
				)}
			</div>
		</Fragment>
	);
};

class UFC extends Component {
	constructor(props) {
		super(props);
		this.fighters = [{id: 1,name: 'Alexander Gustafsson'},{id: 2,name: 'Jon Jones'}];
		this.handleFighterPick = this.handleFighterPick.bind(this);
	}
	handleFighterPick(fighter) {
		let fighterData;
		switch (fighter) {
			case 1:
				fighterData = alex;
				break;
			case 2:
				fighterData = jon;
				break;
			default:
				break;
		}
		fighterData.position = this.props.activePosition;
		this.props.onSave(fighterData);
	}

	render() {
		return (
			<div className="">
				<Fighters handleFighterPick={this.handleFighterPick} fighters={this.fighters} />
			</div>
		);
	}
}

export default UFC;