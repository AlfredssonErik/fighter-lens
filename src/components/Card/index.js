import React, { Component, Fragment } from 'react';
import './Card.css';


class Card extends Component {
	constructor(props) {
		super(props);
		this.onSelectFighter = this.onSelectFighter.bind(this);
	}

	onSelectFighter() {
		this.props.onSelect && this.props.onSelect(this.props.position);
	}

	render() {
		if (this.props.fighter === null || this.props.fighter === undefined) {
			return (
				<div className="card card--empty" onClick={this.onSelectFighter}>
					<span className="card__add">Pick your data</span>
				</div>
			);
		} else {
			return (
				<Fragment>
					<img src={this.props.fighter.image} alt={this.props.fighter.name} className={`fighter__image fighter__image--${this.props.position}`}></img>
					<div className="card">
						<h2 className="card__name">{this.props.fighter.name}</h2>
						<p className="card__total">{this.props.fighter.total}</p>
						<div className="card__record">
							{
								this.props.fighter.record.map((item, index) => 
								<div key={index}>
									<span className="card__record-stat">{item.figure}</span><br />
									<span>{item.text}</span>
								</div>
								)
							}
						</div>
						<div className="card__stats">
						{
							this.props.fighter.stats.map((item, index) => 
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
								<td>{this.props.fighter.age}</td>
								<td>{this.props.fighter.height}</td>
								<td>{this.props.fighter.weight}</td>
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
								<td>{this.props.fighter.debut}</td>
								<td>{this.props.fighter.reach}</td>
								<td>{this.props.fighter.legReach}</td>
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