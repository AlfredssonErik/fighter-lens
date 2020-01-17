import React, { Component } from "react";
import PropTypes from "prop-types";
import { ReactComponent as Close } from '../../icons/close.svg';
import './Modal.css';

class Modal extends Component {
	constructor(props) {
		super(props);
		
		this.onClose = this.onClose.bind(this);
		this.escFunction = this.escFunction.bind(this);
	}

	componentDidMount() {
		document.addEventListener("keydown", this.escFunction, false);
	}

	componentWillUnmount(){
		document.removeEventListener("keydown", this.escFunction, false);
	}

	onClose() {
		this.props.onClose && this.props.onClose();
	}

	escFunction(event){
		if(event.keyCode === 27) {
			this.onClose();
		}
	}

	render() {
		if (!this.props.show) return null;
		return (
			<div className="modal">
				<div className="modal__overlay" onClick={this.onClose}></div>
				<div className="modal__modal">
					<div className="modal__content">
					<button className="modal__btn-close" onClick={this.onClose}>
						<Close />
					</button>
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