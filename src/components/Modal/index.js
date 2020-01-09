import React, { Component } from "react";
import PropTypes from "prop-types";
import './Modal.css';

class Modal extends Component {
	constructor(props) {
		super(props);
		this.onSave = this.onSave.bind(this);
		this.onClose = this.onClose.bind(this);
	}

	onSave() {
		const fighterData = {
			position: this.props.activePosition
		}
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