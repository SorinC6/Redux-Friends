import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/friendsList';
import FriendAddForm from './components/FriendAddForm';
import Login from './components/Login';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';



class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<nav style={{ textAlign: 'center', padding: '20px' }}>
						<Link to="/friends-list">Friends LIST</Link>
						<Link to="/login">Login</Link>
						<Link to="/contact">Contact</Link>
					</nav>
					<Route
						path="/friends-list"
						render={(pr) =>
							localStorage.getItem('userToken') ? (
								<div>
									<FriendsList {...pr} />
									<FriendAddForm {...pr} />
								</div>
							) : (
								<Redirect to="/login" />
							)}
					/>

					<Route path="/login" render={(props) => <Login {...props} />} />
				</div>
			</Router>
		);
	}
}

export default App;
