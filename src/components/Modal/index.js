import React, { Component } from "react";
import PropTypes from "prop-types";
import './Modal.css';
import fighterImage1 from './alexander-gustafsson.png';
import fighterImage2 from './jon-jones.png';

const fighter1 = {
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

const fighter2 = {
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

class Modal extends Component {
	constructor(props) {
		super(props);
		this.onSave = this.onSave.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	onSave() {
		const fighterData = fighter1;
		fighterData.position = this.props.activePosition;
		this.props.onSave && this.props.onSave(fighterData);
	}

	onClose() {
		this.props.onClose && this.props.onClose();
	}

	render() {
		if (!this.props.show) return null;
		return (
			<div className="modal">
				<div className="modal__overlay" onClick={this.onClose}></div>
				<div className="modal__modal">
					<div className="modal__content">
						<h2 className="modal__title">Take your pick</h2>
						{this.props.children}
					</div>
					<div className="modal__actions">
						<button className="modal__save" onClick={this.onSave}>
							Save
						</button>
					</div>
				</div>
			</div>
		);
	}
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired
};

export default Modal;