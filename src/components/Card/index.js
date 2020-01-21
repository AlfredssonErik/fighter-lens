import React, { Component, Fragment } from 'react';
import './Card.css';

// https://www.w3schools.com/howto/howto_css_flip_card.asp

export default class Card extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isFlipped: false
		};

		this.handleFlip = this.handleFlip.bind(this);
		this.onSelectFighter = this.onSelectFighter.bind(this);
	}

	handleFlip(e) {
		e.preventDefault();
		this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
	}

	onSelectFighter() {
		this.props.onSelect && this.props.onSelect(this.props.position);
	}

	render() {
		if (this.props.fighter === null || this.props.fighter === undefined) {
			return (
				<div className="card card--empty" onClick={this.onSelectFighter}>
					<div className="card__inner">
						<span className="card__add">Pick</span>
					</div>
				</div>
			);
		} else {
			return (
				<Fragment>
					<img src={this.props.fighter.image} alt={this.props.fighter.name} className={`fighter__image fighter__image--${this.props.position}`}></img>
					<div className={`card ${this.state.isFlipped ? 'card--fliped' : ''}`}>
						<div className="card__inner">
							<div className="card__front">
								<button className="card__flip" onClick={this.handleFlip}>View history</button>
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
							<div className="card__back">
								<button className="card__flip" onClick={this.handleFlip}>View stats</button>
							</div>
						</div>
					</div>
				</Fragment>
			);
		}
	}
};