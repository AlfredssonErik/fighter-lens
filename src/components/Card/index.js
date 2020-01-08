import React, { Component, Fragment } from 'react';
import './Card.css';

const INITIAL_STATE = {
	position: null,
	fighter: null
};

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE }
		this.add = this.add.bind(this);
	}

	componentDidMount() {
		console.log('Mounted');
	}

	add() {
		const { fighter, position } = this.props;
		this.setState({
			position: position,
			fighter: fighter
		});
	}

	render() {
		if (this.state.fighter === null) {
			return (
				<div className="card card--empty" onClick={this.add}>
					<span className="card__add">Pick a fighter</span>
				</div>
			);
		} else {
			return (
				<Fragment>
					<img src={this.state.fighter.image} alt={this.state.fighter.name} className={`fighter__image fighter__image--${this.state.position}`}></img>
					<div className="card">
						<h2 className="card__name">{this.state.fighter.name}</h2>
						<p className="card__total">{this.state.fighter.total}</p>
						<div className="card__record">
							{
								this.state.fighter.record.map((item, index) => 
								<div key={index}>
									<span className="card__record-stat">{item.figure}</span><br />
									<span>{item.text}</span>
								</div>
								)
							}
						</div>
						<div className="card__stats">
						{
							this.state.fighter.stats.map((item, index) => 
							<div key={index}>
								<span className="card__accuracy">{item.figure}</span><br />
								<span>{item.text}</span>
							</div>
							)
						}
						</div>
						<table className="card__table">
							<thead>
							<tr>
								<th className="card__table-header">Age</th>
								<th className="card__table-header">Height</th>
								<th className="card__table-header">Weight</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>{this.state.fighter.age}</td>
								<td>{this.state.fighter.height}</td>
								<td>{this.state.fighter.weight}</td>
							</tr>
							</tbody>
						</table>
						<table className="card__table">
							<thead>
							<tr>
								<th className="card__table-header">Octagon debut</th>
								<th className="card__table-header">Reach</th>
								<th className="card__table-header">Leg reach</th>
							</tr>
							</thead>
							<tbody>
							<tr>
								<td>{this.state.fighter.debut}</td>
								<td>{this.state.fighter.reach}</td>
								<td>{this.state.fighter.legReach}</td>
							</tr>
							</tbody>
						</table>
					</div>
				</Fragment>
			);
		}
	}
};

export default Card;