import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/index';

export class Login extends React.Component {
	userRef = React.createRef();

	passRef = React.createRef();

	onLogin = () => {
		const username = this.userRef.current.value;
		const password = this.passRef.current.value;

		this.props.login({ username, password });

		if (localStorage.getItem('userToken')) {
			this.props.history.push('/friends-list');
		}
	};

	render() {
		return (
			<div>
				<div>
					username <input type="text" ref={this.userRef} />
				</div>
				<div>
					password <input type="text" ref={this.passRef} />
				</div>

				<button onClick={this.onLogin}>Log in</button>
				<button onClick={() => localStorage.clear()}>Log out</button>
			</div>
		);
	}
}

export default connect((st) => st, { login })(Login);
// connect it so we get the login action creator
