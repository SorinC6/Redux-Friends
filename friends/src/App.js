import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendsList';
import FriendAddForm from './components/FriendAddForm';

class App extends Component {
	render() {
		return (
			<div>
				<FriendsList />
            <FriendAddForm/>
			</div>
		);
	}
}

export default App;
