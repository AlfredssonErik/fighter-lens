import React, { Component } from 'react';
import './UFC.css';

class UFC extends Component {
	render() {
		return (
			<div className="ufc">
				<form>
					<label>
						<input name="fighter" type="radio" value="alexander gustafsson" />
						Alexander Gustafsson
					</label><br />
						<label>
							<input name="fighter" type="radio" value="jon jones" />
							Jon Jones
					</label>
				</form>
			</div>
		);
	}
}

export default UFC;
