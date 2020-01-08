import React from 'react';
import './App.css';
import Card from '../Card'
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

function App() {
	return (
		<div className="app">
			<h1 className="app__title">Fighter lens</h1>
			<div className="app__cards">
				<Card fighter={fighter1} position={'left'} />
				<Card fighter={fighter2} position={'right'} />
			</div>
		</div>
	);
}

export default App;
