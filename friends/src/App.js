import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendsList';

class App extends Component {
	render() {
		return (
			<div>
				<FriendsList />
			</div>
		);
	}
}

export default App;
