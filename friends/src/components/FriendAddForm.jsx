import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { func, number } from 'prop-types';
import { postFriend } from '../actions/index';

export class FriendAddForm extends React.Component {
	name = React.createRef();
	age = React.createRef();
	email = React.createRef();

	addFriend = () => {
		const name = this.name.current;
		const age = this.age.current;
		const email = this.age.current;

		const friend = {
			name: name.value,
			age: age.value,
			email: email.value
		};

		this.props.postFriend(friend);
		//console.log('NEW FRIEND', friend);
		// Invoke addQuoteAsync at this point.
		// Review its definition to know how to invoke it correctly.

		name.value = '';
		age.value = '';
		email.value = '';
	};

	render() {
		console.log('FORM PROPS', this.prosp);
		return (
			<div style={{ textAlign: 'center' }}>
				<div>
					<em>Name: </em>
					<input ref={this.name} type="text" />
				</div>
				<div>
					<em>Age: </em>
					<input ref={this.age} type="number" />
				</div>
				<div>
					<em>Email: </em>
					<input ref={this.email} type="email" />
				</div>
				<div>
					<button onClick={this.addFriend}>Add Friend</button>
				</div>
			</div>
		);
	}
}

// QuoteForm.propTypes = {
// 	// data
// 	numberOfQuotes: number.isRequired,
// 	// action creator
// 	addQuoteAsync: func.isRequired
// };

function mapStateToProps(state) {
	return {
		isLoading: state.friendsReducer.isLoading,
		error: state.friendsReducer.error
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			postFriend
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendAddForm);
