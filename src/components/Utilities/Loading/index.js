import React from 'react';
import './Loading.css';

export default function Loading (props) {
	return <div className={`loading ${props.visible ? 'loading--visible' : ''}`}>
		<div className="loading__animation"></div>
	</div>
};
