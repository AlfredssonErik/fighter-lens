import React, { Component, Fragment } from 'react';
import './UFC.css';

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
		this.fighters = [
			{id: 'jon-jones',name: 'Jon Jones'},
			{id: 'daniel-cormier',name: 'Daniel Cormier'},
			{id: 'alexander-gustafsson',name: 'Alexander Gustafsson'},
			{id: 'thiago-santos',name: 'Thiago Santos'},
			{id: 'anthony-smith',name: 'Anthony Smith'},
			{id: 'dominick-reyes',name: 'Dominick Reyes'},
			{id: 'corey-anderson',name: 'Corey Andersson'},
			{id: 'jan-blachowicz',name: 'Jan Blachowicz'},
			{id: 'volkan-oezdemir',name: 'Volkan Oezdemir'},
			{id: 'glover-teixeira',name: 'Glover Teixeira'}
		];
		this.handleFighterPick = this.handleFighterPick.bind(this);
	}

	handleFighterPick(id) {
		let fighterData;
		fetch(`/fighter/${id}`)
		.then((response) => {
			if(!response.ok) throw Error(response.statusText)
			return response.json();
		})
		.then((result) => {
			fighterData = result;
			fighterData.position = this.props.activePosition;
			this.props.onSave(fighterData);
		})
		.catch(err => console.log(err))
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