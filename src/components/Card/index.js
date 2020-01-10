import React, { Component, Fragment } from 'react';
import './Card.css';


export default class Card extends Component {
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
					<span className="card__add">Pick</span>
				</div>
			);
		} else {
			return (
				<Fragment>
					<img src={this.props.fighter.image} alt={this.props.fighter.name} className={`fighter__image fighter__image--${this.props.position}`}></img>
					<div className="card">
						<button className="card__edit" onClick={this.onSelectFighter}>Switch</button>
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
						<div className="card__bio">
							{
								this.props.fighter.bio.map((item, index) => 
								<div key={index} className="card__bio-item">
									<p className="card__bio-header">{item.text}</p>
									<span>{item.figure}</span>
								</div>
								)
							}
						</div>

					</div>
				</Fragment>
			);
		}
	}
};