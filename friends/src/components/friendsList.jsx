import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getFriends, login } from '../actions/index';
import Friend from './Friend';


class FriendsList extends React.Component {
	componentDidMount() {
      this.props.getFriends();
      this.props.login();
	}

	loginBtn = () => {
		this.props.login();
	};

	render() {
		console.log(this.props);
		return (
			<div>
				{this.props.isLoading && <Loader type="TailSpin" color="#00BFFF" height="200" width="200" />}
				{this.props.error && <h3>{this.props.error}</h3>}
				{this.props.friends.map((friend) => {
					return <Friend key={friend.id} friend={friend} />;
				})}
				<button onCLick={this.loginBtn}>LOGIN</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		friends: state.friendsReducer.friends,
		isLoading: state.friendsReducer.isLoading,
		error: state.friendsReducer.error
	};
};

export default connect(mapStateToProps, { getFriends, login })(FriendsList);
