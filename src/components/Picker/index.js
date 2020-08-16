import React, { Component, Fragment } from 'react';
import urlUtils from '../Utilities/url/config';
import LoadingAnimation from '../Utilities/Loading';
import { ReactComponent as Back } from '../../icons/back.svg';
import './Picker.css';

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
			<div className="picker picker--fighter">
				<button className="modal__btn-back" onClick={props.handleBackClick}>
					<span className="modal__btn-icon"><Back /></span> Back to divisions
				</button>
				{props.fighters && props.fighters.map((item, i) => {
					let rank, c;
					if (i === 0) {
						c = true;
						rank = 'C';
					} else {
						c = false;
						rank = i;
					}
					return <div key={item.name} className="picker__fighter">
						<div className="picker__fighter-inner" onClick={props.handleFighterPick.bind(null, item.link)}>
							<div><span className={c ? 'picker__champ' : 'picker__rank'}>{rank}.</span> {item.name}</div>
						</div>
					</div>
				}

				)}
			</div>
		</Fragment>
	);
};

class Picker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
			divisions: undefined,
			selectedDivision: undefined
		};
		this.handleBackClick = this.handleBackClick.bind(this);
		this.handleDivisionPick = this.handleDivisionPick.bind(this);
		this.handleFighterPick = this.handleFighterPick.bind(this);
	}

	componentDidMount() {
		fetch(`${urlUtils.baseUrl}/rankings`)
		.then((response) => {
			if(!response.ok) throw Error(response.statusText)
			return response.json();
		})
		.then((result) => {
			this.setState({
				loading: false,
				divisions: result
			})
		})
		.catch(err => console.log(err))
	}

	handleBackClick() {
		this.setState({
			selectedDivision: undefined
		});
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
		this.setState({
			loading: true
		});
		fetch(`${urlUtils.baseUrl}${link}`)
		.then((response) => {
			if(!response.ok) throw Error(response.statusText)
			return response.json();
		})
		.then((result) => {
			fighterData = result;
			fighterData.position = this.props.activePosition;
			this.setState({
				loading: false,
				selectedDivision: undefined
			});
			this.props.onSave(fighterData);
		})
		.catch(err => console.log(err))
	}

	render() {
		const { selectedDivision, loading } = this.state;
		let selector;
		if (selectedDivision === undefined) {
			selector = <Divisions handleDivisionPick={this.handleDivisionPick} divisions={this.state.divisions} />
		} else {
			const fighters = this.state.divisions[this.state.selectedDivision].fighters;
			selector = <Fighters handleBackClick={this.handleBackClick} handleFighterPick={this.handleFighterPick} fighters={fighters} />;
		}
		return (
			<div className="">
				{selector}			
				<LoadingAnimation visible={loading} />
			</div>
		);
	}
}

export default Picker;
