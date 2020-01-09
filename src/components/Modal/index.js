import React, { Component } from "react";
import PropTypes from "prop-types";
import './Modal.css';

class Modal extends Component {
	constructor(props) {
		super(props);
		
		this.onClose = this.onClose.bind(this);
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
						{this.props.children}
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