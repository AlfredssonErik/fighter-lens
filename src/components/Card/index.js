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
								<div className="card__controls">
									<button className="card__flip" onClick={this.handleFlip}>View history</button>
									<button className="card__edit" onClick={this.onSelectFighter}>Switch fighter</button>
								</div>
								<div className="card__content">
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
							</div>
							<div className="card__back">
								<div className="card__controls">
									<button className="card__flip" onClick={this.handleFlip}>View stats</button>
									<button className="card__edit" onClick={this.onSelectFighter}>Switch fighter</button>
								</div>
								<div className="card__content">
									<ul className="card__history">
									{
										this.props.fighter.history.map((item, index) =>
										<li key={index} className={`card__event ${item.win ? 'card__event--win' : 'card__event--loss'}`}>
											<div className="card__event-description">
												<span className="card__event-no">{item.event}</span>
												<h2 className="card__event-name">{item.name}</h2>
												<span className="card__event-date">{item.date}</span>
											</div>
											<div className="card__event-details">
												<div className="card__event-detail">
													<p className="card__event-header">Result</p>
													<span>
														{`${item.win ? 'Win' : 'Loss'}`}
													</span>
												</div>
												{
													item.stats.map((item, index) => 
													<div key={index} className="card__event-detail">
														<p className="card__event-header">{item.label}</p>
														<span>{item.text}</span>
													</div>
													)
												}
											</div>
										</li>
										)
									}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			);
		}
	}
};