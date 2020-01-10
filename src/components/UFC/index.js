import React, { Component, Fragment } from 'react';
import './UFC.css';

const Divisions = (props) => {
	return (
		<Fragment>
			<h2 className="modal__title">Pick a division</h2>
			<div className="picker">
				{props.divisions && props.divisions.map(item => 
					<div key={item.name} className="picker__item">
						<div className="picker__content" onClick={props.handleDivisionPick.bind(null, item.name)}>
							<span>{item.name}</span>
						</div>
					</div>
				)}
			</div>
		</Fragment>
	);
};

const Fighters = (props) => {
	return (
		<Fragment>
			<h2 className="modal__title">Pick a fighter</h2>
			<div className="picker">
				{props.fighters && props.fighters.map(item => 
					<div key={item.name} className="picker__item">
						<div className="picker__content" onClick={props.handleFighterPick.bind(null, item.link)}>
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
		this.state = {
			divisions: undefined,
			selectedDivision: undefined
		};
		this.handleDivisionPick = this.handleDivisionPick.bind(this);
		this.handleFighterPick = this.handleFighterPick.bind(this);
	}

	componentDidMount() {
		fetch('/rankings')
		.then((response) => {
			if(!response.ok) throw Error(response.statusText)
			return response.json();
		})
		.then((result) => {
			this.setState({
				divisions: result
			})
		})
		.catch(err => console.log(err))
	}

	handleDivisionPick(division) {
		const index = this.state.divisions.findIndex(function(item, i){
			return item.name === division
		  });
		this.setState({
			selectedDivision: index
		});
	}

	handleFighterPick(link) {
		let fighterData;
		fetch(link)
		.then((response) => {
			if(!response.ok) throw Error(response.statusText)
			return response.json();
		})
		.then((result) => {
			fighterData = result;
			fighterData.position = this.props.activePosition;
			this.setState({
				selectedDivision: undefined
			});
			this.props.onSave(fighterData);
		})
		.catch(err => console.log(err))
	}

	render() {
		const { selectedDivision } = this.state;
		let selector;
		if (selectedDivision === undefined) {
			selector = <Divisions handleDivisionPick={this.handleDivisionPick} divisions={this.state.divisions} />
		} else {
			const fighters = this.state.divisions[this.state.selectedDivision].fighters;
			selector = <Fighters handleFighterPick={this.handleFighterPick} fighters={fighters} />;
		}
		return (
			<div className="">
				{selector}			
			</div>
		);
	}
}

export default UFC;
